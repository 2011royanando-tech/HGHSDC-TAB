// Centralized API Client & Network Safety

const API_CLIENT = {
  getToken() {
    try {
      return localStorage.getItem("debate_tab_token");
    } catch (e) {
      return null;
    }
  },

  setToken(token) {
    try {
      if (token) {
        localStorage.setItem("debate_tab_token", token);
      } else {
        localStorage.removeItem("debate_tab_token");
      }
    } catch (e) {}
  },

  async request(endpoint, options = {}) {
    const headers = options.headers || {};
    headers["Content-Type"] = "application/json";

    const token = this.getToken();
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    try {
      const res = await fetch(endpoint, {
        ...options,
        headers
      });

      if (res.status === 401) {
        this.setToken(null);
        if (window.app && window.app.currentUser) {
          window.app.currentUser = null;
          window.app.render();
          showToast("সেশন শেষ হয়েছে। দয়া করে আবার লগইন করুন।", "error");
        }
        throw new Error("লগইন প্রয়োজন (Authentication required).");
      }

      const text = await res.text();
      let data = null;
      try {
        data = JSON.parse(text);
      } catch (e) {
        if (!res.ok) {
          throw new Error(text || `সার্ভার এরর (${res.status})`);
        }
        return text;
      }

      if (!res.ok) {
        throw new Error((data && data.detail) ? data.detail : (text || "অনুরোধটি ব্যর্থ হয়েছে।"));
      }
      return data;
    } catch (err) {
      console.error(`API Error on ${endpoint}:`, err);
      throw err;
    }
  },

  get(endpoint) {
    return this.request(endpoint, { method: "GET" });
  },

  post(endpoint, body) {
    return this.request(endpoint, {
      method: "POST",
      body: JSON.stringify(body)
    });
  },

  put(endpoint, body) {
    return this.request(endpoint, {
      method: "PUT",
      body: JSON.stringify(body)
    });
  },

  delete(endpoint, body) {
    return this.request(endpoint, {
      method: "DELETE",
      body: body ? JSON.stringify(body) : undefined
    });
  }
};

function showToast(message, type = "info") {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.textContent = message;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(16px)";
    toast.style.transition = "all 0.25s ease";
    setTimeout(() => toast.remove(), 250);
  }, 3500);
}

window.api = API_CLIENT;
window.showToast = showToast;
