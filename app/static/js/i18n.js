// Complete Bilingual Translations: English & বাংলা (Pure Minimalist)

const TRANSLATIONS = {
  en: {
    app_title: "TRADITIONAL DEBATE TAB",
    brand_tagline: "Tournament Operating System",
    lang_toggle: "বাংলা",
    login: "Sign In",
    register: "Register Account",
    logout: "Sign Out",
    welcome: "Welcome",
    role: "Role",
    status: "Status",
    dashboard: "Dashboard",
    bracket: "Tournament Bracket",
    teams: "Teams & Rosters",
    judges: "Adjudicators & Clashes",
    matches: "Match Operations",
    rounds: "Rounds & Motions",
    timer: "Debate Timer",
    audit_log: "Audit Log",
    requests_approvals: "Requests & Approvals",
    my_team: "My Team",
    interchange_speakers: "Interchange Speakers",
    ring_bell: "Tap to Ring Bell",
    tabulation: "Tabulation",
    results: "Official Results",
    export_csv: "Export CSV",
    print: "Print View",
    users_directory: "Users Directory",
    control_center: "Control Center",
    senior_segment: "Senior Segment (Class 10)",
    senior_segment_desc: "Master Championship Round between Class 10 Master Teams",
    practice_debate: "Practice / Demo Debate",
    practice_debate_desc: "Rehearsal sandbox with debate timer, bell effects, and live scoring sheet",
    handnotes: "Private Handnote",
    handnotes_desc: "Personal scratchpad for speech drafting, drawing board, and custom debate matrices",
    judge_messages: "Judge Messages & SOS",
    judge_messages_desc: "Direct communication between Adjudicators and Tab Directors",
    random_draw_bracket: "Fair Randomized Draw (16 Teams)",
    random_draw_bracket_desc: "Randomly shuffle and pair official 16 teams into Round of 16 without tiering",
    manual_bracket_input: "Manual Bracket Input",
    manual_bracket_desc: "Manually configure team pairings for each Round of 16 match",
    auto_sequential_pairs: "Auto Sequential (1-2, 3-4...)",
    save_manual_bracket: "Save & Apply Manual Bracket",
    congratulations: "Congratulations to the Champions!",
    sidebar_toggle: "Toggle Sidebar",
    dark_mode: "Dark Theme",
    light_mode: "Light Theme",

    // 1-Word Direct Navigation Labels
    nav_overview: "Overview",
    nav_bracket: "Bracket",
    nav_senior: "Senior",
    nav_practice: "Practice",
    nav_notes: "Notes",
    nav_messages: "Messages",
    nav_teams: "Teams",
    nav_directory: "Directory",
    nav_motions: "Motions",
    nav_timer: "Timer",
    nav_audit: "Audit",
    nav_judging: "Judging",
    nav_profile: "Profile",
    nav_roster: "Roster",
    system_reset: "System Reset",
    rejudge_request: "Request Re-Judge",
    delete_ballot: "Delete Ballot",

    // Auth
    full_name: "Full Name",
    whatsapp_number: "Username / WhatsApp Number",
    pin: "4-Digit PIN",
    applying_for: "Role Application",
    institution: "Educational Institution / Organization",
    submit_registration: "Complete Registration",
    submit_login: "Authenticate",
    no_account: "Need an account? Register here",
    have_account: "Already registered? Sign in with PIN",
    photo_upload_label: "Profile Photo (Upload from Device)",
    instant_demo_logins: "Instant Demo Access (Click to Test Any Role):",

    // Roles
    role_admin: "Tab Director (Admin)",
    role_leader: "Team Leader",
    role_judge: "Adjudicator (Judge)",
    role_member: "Debater (Member)",
    pending_approval: "Pending Approval",
    approved: "Approved",
    rejected: "Rejected",

    // Dashboard
    participant_dashboard: "Participant Dashboard",
    participant_desc: "Participation credentials and official tournament status",
    my_team_info: "Team Assignment & Rosters",
    no_team_assigned: "You are not currently linked to an approved team roster.",
    under_review_title: "Role Application Under Review",
    under_review_desc: "The Tab Director is reviewing your credentials.",
    change_photo: "Change Photo",

    // Control Center
    command_center_title: "Tournament Command Center",
    command_center_desc: "Real-time match operations, scoring control, and round management",
    registered_members: "Registered Participants",
    approved_teams: "Approved Teams",
    official_teams_count: "Official 16 Teams",
    active_matches: "Active Matches",
    pending_ballots: "Pending Ballots",
    pending_publication: "Pending Publication",
    active_motion: "Active Debate Motion",
    start_round: "Start Round",
    round_is_live: "Round is Live",
    matches_and_scores: "Matches & Tabulation Progress",

    // Table Headers
    th_match: "Match",
    th_room: "Room",
    th_team1: "Team 1",
    th_team2: "Team 2",
    th_status: "Status",
    th_total_score: "Total Score",
    th_winner: "Winner",
    th_admin_actions: "Admin Actions",
    th_photo: "Photo",
    th_id: "ID",
    th_full_name: "Full Name",
    th_username: "Username / Phone",
    th_role: "Role",
    th_institution: "Institution",
    th_actions: "Actions",
    th_team_name: "Team Name",
    th_leader: "Team Leader",
    th_speakers: "Debaters Roster",
    th_rating: "Category",
    th_official16: "Official 16",
    th_assigned_judges: "Assigned Judges",
    th_timestamp: "Timestamp (UTC)",
    th_actor: "Actor",
    th_action: "Action",
    th_item: "Target Item",
    th_details: "Details",
    th_judge: "Judge",
    th_tie_choice: "Tie Choice",

    // Teams View
    team_form_title: "Team Roster Submission",
    team_form_desc: "Authorized team leaders select their official assigned team and choose 3 registered debaters.",
    select_team: "Select Official Team",
    speaker_1: "Speaker 1 (Prime Minister / Leader of Opposition)",
    speaker_2: "Speaker 2 (Deputy PM / Deputy Leader)",
    speaker_3: "Speaker 3 (Government Whip / Opposition Whip)",
    submit_team_application: "Submit Team Application",
    create_new_team: "Create New Team",
    edit_team_title: "Edit Team Roster",
    create_team_title: "Create Official Team",
    team_name_label: "Team Name",
    school_inst_label: "Institution or Club",
    speaker_selection_desc: "Debater Selection (Select from list or type custom name)",
    speaker_1_list: "-- Speaker 1 (List) --",
    speaker_2_list: "-- Speaker 2 (List) --",
    speaker_3_list: "-- Speaker 3 (List) --",
    or_type_custom: "Or type custom debater name",
    category_label: "Strength Category (ABC Rating)",
    status_label: "Status",
    speaker_duplicate_error: "Please select three distinct eligible speakers.",

    // Users Directory
    users_dir_title: "Users Directory & Management",
    users_dir_desc: "Manage all registered accounts, roles, credentials, and affiliations",
    add_new_user: "Add New User",
    edit_user_title: "Edit User Information",
    reset_pin_hint: "New PIN (Leave blank to keep unchanged)",

    // Bracket
    bracket_title: "16-Team Knockout Bracket",
    bracket_desc: "Global balanced elimination progression (Round of 16 -> Quarter Finals -> Semi Finals -> Grand Final)",
    generate_balanced_bracket: "Auto Generate Balanced Bracket",
    lock_bracket: "Lock Bracket",
    bracket_locked_badge: "Bracket Locked",
    balance_report: "Algorithm Balance Report",
    champion: "Tournament Champion",
    balance_score: "Mathematical Balance Score",
    round_of_16_left: "Round of 16 (Left)",
    round_of_16_right: "Round of 16 (Right)",
    quarter_finals: "Quarter Finals",
    semi_final_1: "Semi Final 1",
    semi_final_2: "Semi Final 2",
    grand_final: "GRAND FINAL",

    // Judging & Spreadsheet
    judging_inactive: "Judging access is currently inactive. Please wait for the Tab Director to start the round.",
    judging_title: "Adjudication Workspace",
    judging_desc: "Independent debate evaluation portal",
    current_match: "Current Match",
    room: "Assigned Room",
    motion: "Debate Motion",
    spreadsheet_title: "Adjudication Scorecard",
    spreadsheet_desc: "Live scoring grid. Enter marks per criterion. Totals calculate automatically.",
    add_criterion: "Add Column",
    add_row: "Add Row",
    save_draft: "Save Draft",
    save_changes: "Save Changes",
    review_ballot: "Review Ballot",
    submit_final_ballot: "Submit Official Ballot",
    ballot_submitted: "Official Ballot Submitted",
    independent_notice: "Your ballot is strictly independent and isolated from other adjudicators.",
    tie_vote_label: "Tiebreaker Decision: Select Winner",
    team_total: "Team Total",
    debater_column: "Debater / Speaker",
    total_column: "Total",

    // Timer
    timer_title: "3-Minute Traditional Debate Timer",
    timer_desc: "Configured acoustic warnings at 2:00, 2:30, and final chime at 3:00",
    speaker_indicator: "Active:",
    start: "Start",
    pause: "Pause",
    resume: "Resume",
    reset: "Reset",
    fullscreen: "Fullscreen",
    test_audio: "Test Chime",
    time_remaining: "Time Remaining",

    // Admin & Match Actions
    publish_result: "Publish Result",
    silent_result_badge: "Silent Result",
    published_badge: "Published",
    clash_warning: "Conflict of Interest Warning",
    resolve_tie: "Resolve Tie",
    direct_score_title: "Tab Director Direct Score Entry",
    direct_score_desc: "You can directly type or edit the match scores and winner:",
    team1_score_label: "Team 1 Score",
    team2_score_label: "Team 2 Score",
    decisive_winner_label: "Select Decisive Winner",
    save_direct_score: "Apply Direct Score",
    select_judges_title: "Select Adjudicators for Match",
    max_3_judges_desc: "Select between 1 to 3 adjudicators (maximum 3):",
    save_and_notify_judges: "Save & Notify Judges",
    deadlock_tie_title: "Admin Deadlock Tie Resolution",
    deadlock_tie_desc: "Equal points and votes occurred. As Tab Director, choose the advancing team:",
    audit_reason_label: "Audit Rationale",
    confirm_decision: "Confirm Decision",

    // Modals & General
    confirm_action: "Confirm Action",
    cancel: "Cancel",
    confirm: "Confirm",
    save: "Save Changes",
    edit: "Edit",
    delete: "Delete",
    close: "Close"
  },

  bn: {
    app_title: "ঐতিহ্যবাহী বিতর্ক ট্যাব",
    brand_tagline: "টুর্নামেন্ট অপারেটিং সিস্টেম",
    lang_toggle: "English",
    login: "প্রবেশ করুন",
    register: "নিবন্ধন করুন",
    logout: "প্রস্থান",
    welcome: "স্বাগতম",
    role: "পদবী",
    status: "অবস্থা",
    dashboard: "ড্যাশবোর্ড",
    bracket: "টুর্নামেন্ট ব্র্যাকেট",
    teams: "দল ও সদস্য",
    judges: "বিচারকমণ্ডলী",
    matches: "ম্যাচ পরিচালনা",
    rounds: "রাউন্ড ও বিষয়াবলী",
    timer: "বিতর্ক টাইমার",
    audit_log: "অডিট লগ",
    requests_approvals: "আবেদন ও অনুমোদন",
    my_team: "আমার দল",
    interchange_speakers: "স্পিকার অদলবদল",
    ring_bell: "বেল বাজাতে ট্যাপ করুন",
    tabulation: "ফলাফল সারণী",
    results: "দাপ্তরিক ফলাফল",
    export_csv: "সিএসভি সংরক্ষণ",
    print: "প্রিন্ট ভিউ",
    users_directory: "ইউজার তালিকা",
    control_center: "কন্ট্রোল সেন্টার",
    senior_segment: "সিনিয়র সেগমেন্ট (10ম শ্রেণি)",
    senior_segment_desc: "10ম শ্রেণির 2টি মাস্টার দলের মধ্যে 1টি একক মাস্টার্স ফাইনাল বিতর্ক",
    practice_debate: "প্র্যাকটিস / ডেমো বিতর্ক",
    practice_debate_desc: "টাইমার, বেল এবং সরাসরি স্কোরশিট সম্বলিত সম্পূর্ণ ডেমো বিতর্ক অনুশীলন পরিবেশ",
    handnotes: "হ্যান্ডনোট (ব্যক্তিগত ড্রাফট)",
    handnotes_desc: "বক্তব্য প্রস্তুতি, ড্রয়িং বোর্ড এবং কাস্টম বিতর্ক চার্ট/ম্যাট্রিক্স (সম্পূর্ণ ব্যক্তিগত ও গোপনীয়)",
    judge_messages: "বিচারক সহায়তা ও এসওএস বার্তা",
    judge_messages_desc: "বিচারক ও ট্যাব পরিচালকদের তাৎক্ষণিক বার্তা আদান-প্রদান ব্যবস্থা",
    random_draw_bracket: "লটারি ভিত্তিক র্যান্ডম ড্র (16 দল)",
    random_draw_bracket_desc: "16টি দলকে কোনো রেটিং বা শ্রেণিবিভাগ ছাড়াই সম্পূর্ণ দৈবচয়নভাবে পেয়ারিং করুন",
    manual_bracket_input: "ম্যানুয়ালি ব্র্যাকেট নির্ধারণ",
    manual_bracket_desc: "রাউন্ড অব 16-এর 8টি ম্যাচের দলসমূহ সরাসরি নিজে নির্বাচন করে ব্র্যাকেট সাজান",
    auto_sequential_pairs: "স্বয়ংক্রিয় ক্রমিক পেয়ার (1-2, 3-4...)",
    save_manual_bracket: "ম্যানুয়াল ব্র্যাকেট প্রয়োগ করুন",
    congratulations: "বিজয়ী দলকে প্রাণঢালা অভিনন্দন!",
    sidebar_toggle: "সাইডবার লুকান/দেখান",
    dark_mode: "ডার্ক থিম",
    light_mode: "লাইট থিম",

    // 1-Word Direct Navigation Labels (বাংলা)
    nav_overview: "ওভারভিউ",
    nav_bracket: "ব্র্যাকেট",
    nav_senior: "সিনিয়র",
    nav_practice: "মহড়া",
    nav_notes: "নোটস",
    nav_messages: "বার্তা",
    nav_teams: "দলসমূহ",
    nav_directory: "ডিরেক্টরি",
    nav_motions: "বিষয়াবলি",
    nav_timer: "টাইমার",
    nav_audit: "অডিট",
    nav_judging: "বিচারকার্য",
    nav_profile: "প্রোফাইল",
    nav_roster: "তালিকা",
    system_reset: "সিস্টেম রিসেট",
    rejudge_request: "পুনর্মূল্যায়ন আবেদন",
    delete_ballot: "ব্যালট মুছুন",

    // Auth
    full_name: "পূর্ণ নাম",
    whatsapp_number: "ইউজারনেম / মোবাইল নম্বর",
    pin: "4-সংখ্যার পিন (PIN)",
    applying_for: "আবেদনের পদবী",
    institution: "শিক্ষা প্রতিষ্ঠান / ক্লাবের নাম",
    submit_registration: "নিবন্ধন সম্পন্ন করুন",
    submit_login: "লগইন করুন",
    no_account: "অ্যাকাউন্ট নেই? এখানে নিবন্ধন করুন",
    have_account: "ইতিমধ্যে নিবন্ধিত? পিন দিয়ে লগইন করুন",
    photo_upload_label: "প্রোফাইল ছবি (ডিভাইস থেকে আপলোড)",
    instant_demo_logins: "সহজ এক-ক্লিক ডেমো লগইন (যেকোনো রোলে সরাসরি প্রবেশ করুন):",

    // Roles
    role_admin: "ট্যাব ডিরেক্টর (Admin)",
    role_leader: "দলনেতা (Leader)",
    role_judge: "বিচারক (Judge)",
    role_member: "বিতার্কিক (Member)",
    pending_approval: "অনুমোদনের অপেক্ষায়",
    approved: "অনুমোদিত",
    rejected: "প্রত্যাখ্যাত",

    // Dashboard
    participant_dashboard: "প্রতিযোগী ড্যাশবোর্ড",
    participant_desc: "ব্যক্তিগত তথ্যাবলী ও টুর্নামেন্ট স্ট্যাটাস",
    my_team_info: "দলের তথ্য ও সদস্যবৃন্দ",
    no_team_assigned: "আপনি এখনও কোনো অফিসিয়াল দলে যুক্ত হননি।",
    under_review_title: "আবেদনের ফলাফল অপেক্ষমান",
    under_review_desc: "ট্যাব ডিরেক্টর আপনার আবেদন পর্যালোচনা করছেন।",
    change_photo: "ছবি পরিবর্তন",

    // Control Center
    command_center_title: "টুর্নামেন্ট কন্ট্রোল সেন্টার",
    command_center_desc: "ম্যাচ পরিচালনা, সরাসরি ফলাফল এন্ট্রি এবং রাউন্ড নিয়ন্ত্রণ",
    registered_members: "নিবন্ধিত সদস্য",
    approved_teams: "অনুমোদিত দল",
    official_teams_count: "অফিসিয়াল 16 দল",
    active_matches: "চলমান ম্যাচ",
    pending_ballots: "অপেক্ষারত ব্যালট",
    pending_publication: "নীরব ফলাফল",
    active_motion: "বিতর্কের বিষয় / প্রস্তাব",
    start_round: "রাউন্ড শুরু করুন",
    round_is_live: "রাউন্ড চলমান (Live)",
    matches_and_scores: "ম্যাচসমূহ ও স্কোর নিয়ন্ত্রণ",

    // Table Headers
    th_match: "ম্যাচ",
    th_room: "রুম",
    th_team1: "1ম দল",
    th_team2: "2য় দল",
    th_status: "অবস্থা",
    th_total_score: "মোট স্কোর",
    th_winner: "বিজয়ী",
    th_admin_actions: "অ্যাডমিন নিয়ন্ত্রণ",
    th_photo: "ছবি",
    th_id: "আইডি",
    th_full_name: "পূর্ণ নাম",
    th_username: "ইউজারনেম / নম্বর",
    th_role: "পদবী",
    th_institution: "প্রতিষ্ঠান",
    th_actions: "অ্যাকশন",
    th_team_name: "দলের নাম",
    th_leader: "দলনেতা",
    th_speakers: "স্পিকার রোস্টার (বক্তাগণ)",
    th_rating: "ক্যাটাগরি",
    th_official16: "অফিসিয়াল 16",
    th_assigned_judges: "নির্ধারিত বিচারক",
    th_timestamp: "সময় (UTC)",
    th_actor: "কর্মকর্তা",
    th_action: "অ্যাকশন",
    th_item: "আইটেম",
    th_details: "বিবরণ",
    th_judge: "বিচারক",
    th_tie_choice: "টাই চয়েস",

    // Teams View
    team_form_title: "দল গঠনের ফর্ম",
    team_form_desc: "অনুমোদিত দলনেতা নির্ধারিত অফিসিয়াল দল নির্বাচন করবেন এবং নিবন্ধিত বিতার্কিকদের মধ্য থেকে 3 জন স্পিকার নির্বাচন করবেন।",
    select_team: "অফিসিয়াল দল নির্বাচন করুন",
    speaker_1: "1ম বক্তা (প্রধানমন্ত্রী / বিরোধী দলনেতা)",
    speaker_2: "2য় বক্তা (মন্ত্রী / উপনেতা)",
    speaker_3: "3য় বক্তা (সংসদ সদস্য / হুইপ)",
    submit_team_application: "দল জমা দিন",
    create_new_team: "নতুন দল তৈরি করুন",
    edit_team_title: "দলের তথ্য ও সদস্য সংশোধন",
    create_team_title: "নতুন দল তৈরি",
    team_name_label: "দলের নাম",
    school_inst_label: "প্রতিষ্ঠান বা সংগঠন",
    speaker_selection_desc: "স্পিকার নির্বাচন (তালিকা থেকে বা সরাসরি নাম টাইপ করুন)",
    speaker_1_list: "-- 1ম বক্তা (তালিকা) --",
    speaker_2_list: "-- 2য় বক্তা (তালিকা) --",
    speaker_3_list: "-- 3য় বক্তা (তালিকা) --",
    or_type_custom: "বা সরাসরি নাম লিখুন",
    category_label: "শক্তি ক্যাটাগরি (ABC Rating)",
    status_label: "অবস্থা",
    speaker_duplicate_error: "অনুগ্রহ করে 3 জন ভিন্ন যোগ্য বিতার্কিক নির্বাচন করুন।",

    // Users Directory
    users_dir_title: "নিবন্ধিত ব্যবহারকারী ও সদস্য তালিকা",
    users_dir_desc: "সকল অ্যাডমিন, বিচারক, দলনেতা ও বিতার্কিকদের সম্পূর্ণ তালিকা ও পরিচালনা",
    add_new_user: "নতুন ইউজার যোগ করুন",
    edit_user_title: "ইউজার তথ্য সংশোধন",
    reset_pin_hint: "নতুন পিন (পরিবর্তন না করতে চাইলে খালি রাখুন)",

    // Bracket
    bracket_title: "16 দলের নকআউট ব্র্যাকেট",
    bracket_desc: "সুষম নকআউট পরিক্রমা (রাউন্ড অব 16 -> কোয়ার্টার ফাইনাল -> সেমি ফাইনাল -> গ্র্যান্ড ফাইনাল)",
    generate_balanced_bracket: "স্বয়ংক্রিয় সুষম ব্র্যাকেট তৈরি",
    lock_bracket: "ব্র্যাকেট লক করুন",
    bracket_locked_badge: "ব্র্যাকেট লক করা হয়েছে",
    balance_report: "অ্যালগরিদম ব্যালান্স রিপোর্ট",
    champion: "টুর্নামেন্ট চ্যাম্পিয়ন",
    balance_score: "সামগ্রিক ভারসাম্যের মান",
    round_of_16_left: "রাউন্ড অব 16 (বাম)",
    round_of_16_right: "রাউন্ড অব 16 (ডান)",
    quarter_finals: "কোয়ার্টার ফাইনাল",
    semi_final_1: "সেমি ফাইনাল 1",
    semi_final_2: "সেমি ফাইনাল 2",
    grand_final: "গ্র্যান্ড ফাইনাল",

    // Judging & Spreadsheet
    judging_inactive: "বিচারক প্রবেশাধিকার বর্তমানে নিষ্ক্রিয় রয়েছে। ট্যাব পরিচালক রাউন্ড শুরু করলে এটি সচল হবে।",
    judging_title: "বিচারক মূল্যায়ন পত্র",
    judging_desc: "স্বতন্ত্র ও গোপন বিতর্ক মূল্যায়ন ব্যবস্থা",
    current_match: "বর্তমান ম্যাচ",
    room: "নির্ধারিত কক্ষ",
    motion: "বিতর্কের বিষয় / প্রস্তাব",
    spreadsheet_title: "বিচারক মূল্যায়ন সারণী",
    spreadsheet_desc: "লাইভ স্কোরিং গ্রিড। মানদণ্ড অনুযায়ী নম্বর দিন, মোট নম্বর স্বয়ংক্রিয়ভাবে হিসাব হবে।",
    add_criterion: "কলাম যোগ করুন",
    add_row: "রো যোগ করুন",
    save_draft: "খসড়া সংরক্ষণ",
    save_changes: "পরিবর্তন সংরক্ষণ করুন",
    review_ballot: "ব্যালট পর্যালোচনা",
    submit_final_ballot: "চূড়ান্ত ব্যালট জমা দিন",
    ballot_submitted: "চূড়ান্ত ব্যালট জমা হয়েছে",
    independent_notice: "আপনার মূল্যায়ন সম্পূর্ণ স্বাধীন এবং অন্য কোনো বিচারক দেখতে পারবেন না।",
    tie_vote_label: "টাইব্রেকার সিদ্ধান্ত: বিজয়ী নির্বাচন করুন",
    team_total: "দলের মোট",
    debater_column: "বিতার্কিক / স্পিকার",
    total_column: "মোট",

    // Timer
    timer_title: "3-মিনিট ঐতিহ্যবাহী বিতর্ক টাইমার",
    timer_desc: "2:00 মিনিট, 2:30 মিনিটে সতর্কবার্তা এবং 3:00 মিনিটে চূড়ান্ত ঘণ্টা",
    speaker_indicator: "বক্তা:",
    start: "শুরু",
    pause: "বিরতি",
    resume: "পুনরায় শুরু",
    reset: "রিসেট",
    fullscreen: "ফুলস্ক্রিন",
    test_audio: "ঘণ্টা পরীক্ষা",
    time_remaining: "অবশিষ্ট সময়",

    // Admin & Match Actions
    publish_result: "প্রকাশ করুন",
    silent_result_badge: "নীরব",
    published_badge: "প্রকাশিত",
    clash_warning: "স্বার্থের দ্বন্দ্ব সতর্কতা (Clash)",
    resolve_tie: "টাই ভাঙুন",
    direct_score_title: "অ্যাডমিন সরাসরি স্কোর এন্ট্রি ও বিজয়ী নির্ধারণ",
    direct_score_desc: "কোনো জাজ না থাকলেও আপনি সরাসরি নম্বর টাইপ করে ম্যাচ নিষ্পত্তি করতে পারবেন:",
    team1_score_label: "1ম দলের নম্বর",
    team2_score_label: "2য় দলের নম্বর",
    decisive_winner_label: "বিজয়ী দল বেছে নিন",
    save_direct_score: "সরাসরি স্কোর সংরক্ষণ করুন",
    select_judges_title: "ম্যাচের বিচারক নির্বাচন",
    max_3_judges_desc: "সর্বোচ্চ 3 জন বিচারক নির্বাচন করুন:",
    save_and_notify_judges: "সংরক্ষণ ও বিচারককে জানান",
    deadlock_tie_title: "টাই ভাঙার সিদ্ধান্ত (Admin Tiebreak)",
    deadlock_tie_desc: "উভয় দলের পয়েন্ট ও ভোট সমান হয়েছে। ট্যাব ডিরেক্টর হিসেবে চূড়ান্ত বিজয়ী নির্ধারণ করুন:",
    audit_reason_label: "সিদ্ধান্তের কারণ / বিবরণ",
    confirm_decision: "বিজয়ী নিশ্চিত করুন",

    // Modals & General
    confirm_action: "নিশ্চিতকরণ",
    cancel: "বাতিল",
    confirm: "নিশ্চিত করুন",
    save: "সংরক্ষণ করুন",
    edit: "এডিট",
    delete: "মুছুন",
    close: "বন্ধ করুন"
  }
};

class I18nManager {
  constructor() {
    this.currentLang = "en";
    try {
      const saved = localStorage.getItem("debate_tab_lang");
      if (saved === "en" || saved === "bn") {
        this.currentLang = saved;
      }
    } catch (e) {}
  }

  get lang() {
    return this.currentLang;
  }

  setLanguage(lang) {
    if (lang === "en" || lang === "bn") {
      this.currentLang = lang;
      try {
        localStorage.setItem("debate_tab_lang", lang);
      } catch (e) {}
      document.documentElement.lang = lang;
      this.applyTranslations();
    }
  }

  toggleLanguage() {
    this.setLanguage(this.currentLang === "en" ? "bn" : "en");
  }

  t(key, fallback = "") {
    const dict = TRANSLATIONS[this.currentLang] || TRANSLATIONS.en;
    return dict[key] || TRANSLATIONS.en[key] || fallback || key;
  }

  applyTranslations() {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      const text = this.t(key);
      if (text) {
        if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
          el.placeholder = text;
        } else {
          el.textContent = text;
        }
      }
    });

    const toggleBtn = document.getElementById("lang-toggle-btn");
    if (toggleBtn) {
      toggleBtn.textContent = this.t("lang_toggle");
    }
  }
}

window.i18n = new I18nManager();
