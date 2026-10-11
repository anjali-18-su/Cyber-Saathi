/**
 * scenarios.js — Scenario content for all Cyber Saathi detail pages.
 * Cyber Saathi
 *
 * Structure per scenario:
 *   id           — matches data-category on index.html cards and URL ?id=
 *   icon         — emoji used as the visual icon
 *   category     — same as id; used for CSS --card-accent colour
 *   title        — { en, hi, mr }
 *   what_happened  — { en, hi, mr }  plain paragraph describing the situation
 *   red_flags    — { en: [], hi: [], mr: [] }  bullet list of warning signs
 *   what_to_do   — { en: [], hi: [], mr: [] }  ordered steps to take
 *   what_not_to_do — { en: [], hi: [], mr: [] }  things to avoid
 *   already_clicked — { en, hi, mr }  paragraph for people who already interacted
 *   report_links — array of { label: {en,hi,mr}, url, pending_verification }
 *
 * Language notes:
 *   - All content written in plain, non-technical language.
 *   - No invented helpline numbers. Links marked pending_verification: true
 *     must be confirmed before removing the warning.
 *   - To add a new scenario, add a new key to window.SCENARIOS following
 *     this exact same structure.
 */

window.SCENARIOS = {

  /* ============================================================
     SUSPICIOUS MESSAGE
     id: "message"
     Covers: WhatsApp, SMS, Telegram, any chat platform
     ============================================================ */
  "message": {
    id:       "message",
    icon:     "💬",
    category: "message",

    title: {
      en: "Suspicious Message",
      hi: "संदिग्ध संदेश",
      mr: "संशयास्पद संदेश"
    },

    /* ----------------------------------------------------------
       Quick Help — shown first, above everything else.
       Goal: a worried user can act within 20–30 seconds.
       Keep to 4 steps maximum. Plain verbs. No jargon.
    ---------------------------------------------------------- */
    quick_help: {
      intro: {
        en: "You received a suspicious message. Do these 4 things right now:",
        hi: "आपको एक संदिग्ध संदेश मिला है। अभी ये 4 काम करें:",
        mr: "तुम्हाला एक संशयास्पद संदेश आला आहे. आत्ता हे 4 गोष्टी करा:"
      },
      steps: {
        en: [
          "Stop — do not click any link, do not call any number, do not reply.",
          "Take a screenshot of the message so you have a record.",
          "Block and report the sender from WhatsApp or your SMS app.",
          "If you already clicked or shared anything, scroll down to the 'Already clicked?' section."
        ],
        hi: [
          "रुकें — किसी लिंक पर क्लिक न करें, कोई नंबर डायल न करें, जवाब न दें।",
          "संदेश का स्क्रीनशॉट लें ताकि आपके पास सबूत रहे।",
          "WhatsApp या SMS ऐप से भेजने वाले को ब्लॉक और रिपोर्ट करें।",
          "अगर आपने पहले ही कुछ क्लिक किया या शेयर किया है, तो नीचे 'क्या मैंने पहले ही क्लिक किया?' वाला भाग देखें।"
        ],
        mr: [
          "थांबा — कोणत्याही लिंकवर क्लिक करू नका, कोणताही नंबर डायल करू नका, उत्तर देऊ नका.",
          "संदेशाचा स्क्रीनशॉट घ्या म्हणजे तुमच्याकडे पुरावा राहील.",
          "WhatsApp किंवा SMS अ‍ॅपमधून पाठवणाऱ्याला ब्लॉक करा आणि रिपोर्ट करा.",
          "तुम्ही आधीच काही क्लिक केले किंवा शेअर केले असेल तर खाली 'मी आधीच क्लिक केले का?' हा भाग पाहा."
        ]
      }
    },

    /* ----------------------------------------------------------
       Section 1 — What happened?
       2–3 sentences only. Plain language. No jargon.
    ---------------------------------------------------------- */
    what_happened: {
      en: "You received a message on WhatsApp, SMS, or another chat app from an unknown number — or even from a saved contact whose account may have been hacked. The message is asking you to click a link, share a code, call a number, or send money. Scammers create a sense of urgency or fear to stop you from thinking clearly.",
      hi: "आपको WhatsApp, SMS या किसी अन्य चैट ऐप पर किसी अज्ञात नंबर से — या किसी ऐसे परिचित के नंबर से जिसका अकाउंट हैक हो गया हो — एक संदेश मिला। इसमें आपसे लिंक पर क्लिक करने, कोड शेयर करने, नंबर पर कॉल करने या पैसे भेजने को कहा जा रहा है। ठग जानबूझकर डर या जल्दी का माहौल बनाते हैं ताकि आप सोच न सकें।",
      mr: "तुम्हाला WhatsApp, SMS किंवा दुसऱ्या चॅट अ‍ॅपवर एखाद्या अनोळखी नंबरवरून — किंवा एखाद्या परिचिताच्या हॅक झालेल्या खात्यातून — संदेश आला आहे. त्यात तुम्हाला लिंकवर क्लिक करण्यास, कोड शेअर करण्यास, नंबरवर कॉल करण्यास किंवा पैसे पाठवण्यास सांगितले जात आहे. फसवणूक करणारे घाई किंवा भीती निर्माण करतात जेणेकरून तुम्ही नीट विचार करू शकणार नाही."
    },

    /* ----------------------------------------------------------
       FAQ — expandable Q&A accordion items.
       Reorganises the detailed guidance into user-question format.
       Content drawn from what_to_do, what_not_to_do,
       already_clicked, and report_links — nothing is removed.
       Each item: { q: {en,hi,mr}, a: {en,hi,mr}, type }
         type "steps"  → rendered as numbered list
         type "avoid"  → rendered as do-not list
         type "para"   → rendered as a paragraph
         type "report" → rendered as report-link cards
    ---------------------------------------------------------- */
    faq: [
      {
        id: "faq-verify",
        q: {
          en: "How can I tell if the message is genuine?",
          hi: "मैं कैसे जानूं कि संदेश असली है या नकली?",
          mr: "संदेश खरा आहे की नाही हे मला कसे कळेल?"
        },
        type: "steps",
        a: {
          en: [
            "Stop — do not click any link, call any number, or reply yet.",
            "Take a breath — scammers deliberately create panic so you act without thinking.",
            "Check the sender — do you recognise this number? If the message claims to be from a company or government body, look up their official number separately and call them directly.",
            "If the message came from a saved contact, call that person on a voice call to check — their account may have been hacked.",
            "If there is a link, look at the URL carefully — check for misspellings or unusual domain names before opening anything.",
            "When in doubt, ask a trusted family member or friend to help you before taking any action."
          ],
          hi: [
            "रुकें — अभी किसी लिंक पर क्लिक न करें, कोई नंबर डायल न करें, और जवाब न दें।",
            "शांत रहें — ठग जानबूझकर घबराहट बनाते हैं ताकि आप बिना सोचे कार्रवाई करें।",
            "भेजने वाले की जांच करें — क्या आप इस नंबर को पहचानते हैं? अगर यह किसी कंपनी या सरकारी संस्था का दावा करता है, तो उनका आधिकारिक नंबर अलग से खोजें और सीधे कॉल करें।",
            "अगर संदेश किसी सेव किए गए संपर्क से आया है, तो उस व्यक्ति को वॉयस कॉल करें — उनका अकाउंट हैक हो सकता है।",
            "अगर कोई लिंक है, तो URL को ध्यान से देखें — गलत वर्तनी या असामान्य डोमेन नाम की जांच करें।",
            "अनिश्चित होने पर, कोई भी कदम उठाने से पहले किसी विश्वसनीय परिवार के सदस्य या मित्र से सलाह लें।"
          ],
          mr: [
            "थांबा — आत्ता कोणत्याही लिंकवर क्लिक करू नका, कोणताही नंबर डायल करू नका किंवा उत्तर देऊ नका.",
            "शांत राहा — फसवणूक करणारे जाणूनबुजून घाई निर्माण करतात जेणेकरून तुम्ही विचार न करता कृती कराल.",
            "पाठवणाऱ्याची तपासणी करा — हा नंबर तुम्हाला ओळखीचा आहे का? एखाद्या कंपनी किंवा सरकारी संस्थेचा दावा असेल तर त्यांचा अधिकृत नंबर वेगळ्या ठिकाणाहून शोधा.",
            "जर संदेश एखाद्या सेव्ह केलेल्या संपर्काकडून आला असेल, तर त्या व्यक्तीला व्हॉइस कॉल करा — त्यांचे खाते हॅक झाले असू शकते.",
            "लिंक असेल तर URL काळजीपूर्वक पाहा — चुकीचे स्पेलिंग किंवा असामान्य डोमेन नावे तपासा.",
            "खात्री नसेल तर कोणतीही कृती करण्यापूर्वी एखाद्या विश्वासू कुटुंब सदस्याची किंवा मित्राची मदत घ्या."
          ]
        }
      },
      {
        id: "faq-avoid",
        q: {
          en: "What should I avoid doing?",
          hi: "मुझे क्या नहीं करना चाहिए?",
          mr: "मी काय करणे टाळावे?"
        },
        type: "avoid",
        a: {
          en: [
            "Do not click any link in the message, even out of curiosity.",
            "Do not share any OTP, password, PIN, Aadhaar number, or bank details — no legitimate organisation ever asks for these over a message.",
            "Do not call back any number given in the message — it may connect you to the scammer.",
            "Do not transfer or send any money, even small amounts.",
            "Do not forward the message to friends or family — this spreads the scam further.",
            "Do not feel embarrassed or panic — this happens to many people and it is not your fault.",
            "Do not delete the message immediately if you think you may have already been scammed — it is evidence."
          ],
          hi: [
            "संदेश में कोई भी लिंक पर क्लिक न करें, भले ही जिज्ञासावश हो।",
            "कोई OTP, पासवर्ड, PIN, आधार नंबर, या बैंक विवरण शेयर न करें — कोई भी वैध संगठन ये संदेश पर नहीं मांगता।",
            "संदेश में दिए गए किसी भी नंबर पर कॉल बैक न करें — यह आपको ठग से जोड़ सकता है।",
            "कोई भी राशि ट्रांसफर या भेजें नहीं, चाहे वह छोटी ही क्यों न हो।",
            "संदेश को दोस्तों या परिवार को फॉरवर्ड न करें — इससे स्कैम और फैलता है।",
            "शर्मिंदगी या घबराहट न महसूस करें — यह बहुत से लोगों के साथ होता है और इसमें आपकी गलती नहीं है।",
            "अगर आपको लगता है कि आप पहले से ही ठगे गए हैं तो संदेश को तुरंत डिलीट न करें — यह सबूत है।"
          ],
          mr: [
            "संदेशातील कोणत्याही लिंकवर क्लिक करू नका, जरी कुतूहलापोटी असले तरी.",
            "कोणताही OTP, पासवर्ड, PIN, आधार नंबर किंवा बँक माहिती शेअर करू नका — कोणतीही वैध संस्था हे संदेशावर विचारत नाही.",
            "संदेशात दिलेल्या कोणत्याही नंबरवर परत कॉल करू नका — हे तुम्हाला फसवणाऱ्याशी जोडू शकते.",
            "कोणतेही पैसे ट्रान्सफर किंवा पाठवू नका, अगदी छोटी रक्कम असली तरी.",
            "संदेश मित्र किंवा कुटुंबाला फॉरवर्ड करू नका — यामुळे फसवणूक अधिक पसरते.",
            "लाज वाटू नका किंवा घाबरू नका — हे अनेक लोकांसोबत होते आणि यात तुमची चूक नाही.",
            "तुम्हाला वाटत असेल की तुम्ही आधीच फसवले गेलात तर संदेश लगेच हटवू नका — तो पुरावा आहे."
          ]
        }
      },
      {
        id: "faq-already-clicked",
        q: {
          en: "What if I already clicked the link or shared my details?",
          hi: "अगर मैंने पहले ही लिंक पर क्लिक किया या जानकारी शेयर की — तो अब क्या करूं?",
          mr: "मी आधीच लिंकवर क्लिक केले किंवा माहिती शेअर केली — आता काय करावे?"
        },
        type: "para",
        a: {
          en: "Do not panic — you are not alone and it is not too late to act. If you clicked a link, close the page immediately and do not enter any information on it. If you shared an OTP or bank details, contact your bank right away and ask them to freeze or secure your account. Change your passwords on any accounts that may be affected, especially banking apps, email, and WhatsApp. Take screenshots of all messages and save the sender's number. Report the incident as soon as possible — the sooner you report, the better the chance of recovery.",
          hi: "घबराएं नहीं — आप अकेले नहीं हैं और अभी भी कार्रवाई करना देर नहीं हुई है। अगर आपने किसी लिंक पर क्लिक किया है, तो उस पेज को तुरंत बंद करें और उस पर कोई जानकारी दर्ज न करें। अगर आपने OTP या बैंक विवरण शेयर किया है, तो तुरंत अपने बैंक से संपर्क करें और खाता फ्रीज करने को कहें। किसी भी प्रभावित खाते का पासवर्ड बदलें — खासकर बैंकिंग ऐप, ईमेल और WhatsApp। सभी संदेशों के स्क्रीनशॉट लें। जितनी जल्दी रिपोर्ट करेंगे, धन वापसी की उतनी अधिक संभावना होगी।",
          mr: "घाबरू नका — तुम्ही एकटे नाही आणि अजूनही वेळ आहे. लिंकवर क्लिक केले असेल तर ती पेज तात्काळ बंद करा आणि त्यावर काहीही भरू नका. OTP किंवा बँक माहिती शेअर केली असेल तर ताबडतोब बँकेशी संपर्क साधा आणि खाते फ्रीज करण्यास सांगा. सर्व प्रभावित खात्यांचे पासवर्ड बदला — विशेषतः बँकिंग अ‍ॅप, ईमेल आणि WhatsApp. सर्व संदेशांचे स्क्रीनशॉट घ्या. जितक्या लवकर तक्रार कराल, पैसे परत मिळण्याची शक्यता अधिक."
        }
      },
      {
        id: "faq-report",
        q: {
          en: "How do I report this message?",
          hi: "मैं इस संदेश की रिपोर्ट कहाँ करूं?",
          mr: "या संदेशाची तक्रार मी कुठे करावी?"
        },
        type: "report"
        /* answer rendered from scenario.report_links — no separate 'a' field needed */
      }
    ],
    red_flags: {
      en: [
        "The message creates urgency — \"Act now!\", \"Your account will be blocked!\", \"Limited time offer!\"",
        "It asks you to click a link to claim a prize, verify your account, or avoid a penalty",
        "It asks you to share an OTP, PIN, password, or Aadhaar number",
        "It promises unexpected money — a lottery win, cashback, or government scheme you never applied for",
        "It comes from a number you don't recognise, or a number that looks slightly different from a known organisation",
        "The link looks unusual — long, misspelled, or uses a shortened URL (bit.ly, tinyurl, etc.)",
        "A friend or family member's account sent it, but the tone or language doesn't feel like them",
        "It asks you to forward the message to others",
        "It threatens arrest, account suspension, or legal action if you don't respond immediately"
      ],
      hi: [
        "संदेश में जल्दी करने का दबाव है — \"अभी कार्रवाई करें!\", \"आपका खाता बंद हो जाएगा!\", \"सीमित समय का ऑफर!\"",
        "इसमें किसी पुरस्कार का दावा करने, खाता सत्यापित करने, या जुर्माने से बचने के लिए लिंक पर क्लिक करने को कहा गया है",
        "इसमें OTP, PIN, पासवर्ड, या आधार नंबर शेयर करने को कहा गया है",
        "यह अप्रत्याशित धन का वादा करता है — लॉटरी जीत, कैशबैक, या कोई सरकारी योजना जिसके लिए आपने आवेदन नहीं किया",
        "यह किसी अज्ञात नंबर से आया है, या किसी ऐसे नंबर से जो किसी जानी-मानी संस्था से थोड़ा अलग दिखता है",
        "लिंक असामान्य लगता है — लंबा, गलत वर्तनी वाला, या छोटा URL (bit.ly, tinyurl आदि) का उपयोग करता है",
        "किसी मित्र या परिवार के सदस्य के खाते से आया, लेकिन लहजा या भाषा उनके जैसी नहीं लगती",
        "यह संदेश को दूसरों को फॉरवर्ड करने को कहता है",
        "यह तुरंत जवाब न देने पर गिरफ्तारी, खाता निलंबन, या कानूनी कार्रवाई की धमकी देता है"
      ],
      mr: [
        "संदेशात घाई करण्याचा दबाव आहे — \"आत्ताच कृती करा!\", \"तुमचे खाते बंद होईल!\", \"मर्यादित वेळाची ऑफर!\"",
        "त्यात बक्षीस मिळवण्यासाठी, खाते सत्यापित करण्यासाठी किंवा दंड टाळण्यासाठी लिंकवर क्लिक करण्यास सांगितले आहे",
        "त्यात OTP, PIN, पासवर्ड किंवा आधार नंबर शेअर करण्यास सांगितले आहे",
        "हे अनपेक्षित पैशांचे आश्वासन देते — लॉटरी जिंकणे, कॅशबॅक किंवा अशी सरकारी योजना ज्यासाठी तुम्ही अर्ज केला नाही",
        "हे एखाद्या अनोळखी नंबरवरून आले आहे, किंवा असा नंबर जो एखाद्या प्रसिद्ध संस्थेच्या नंबरपेक्षा थोडासा वेगळा आहे",
        "लिंक असामान्य वाटते — लांब, चुकीचे स्पेलिंग, किंवा छोटी URL (bit.ly, tinyurl इ.) वापरते",
        "एखाद्या मित्र किंवा कुटुंब सदस्याच्या खात्यातून आले, पण भाषा किंवा शैली त्यांच्यासारखी वाटत नाही",
        "हे संदेश इतरांना फॉरवर्ड करण्यास सांगते",
        "तात्काळ उत्तर न दिल्यास अटक, खाते निलंबन किंवा कायदेशीर कारवाईची धमकी देते"
      ]
    },

    /* ----------------------------------------------------------
       Section 3 — What to do
       Ordered, numbered steps. Start each with an action verb.
    ---------------------------------------------------------- */
    what_to_do: {
      en: [
        "Stop — do not click any link, call any number, or reply to the message yet.",
        "Take a breath — scammers deliberately create panic and urgency to stop you from thinking clearly.",
        "Check the sender — is this a number you recognise? If it claims to be a company or government body, look up their official number separately and call them directly.",
        "If the message came from a saved contact, call that person directly on a voice call to check if they really sent it — their account may have been hacked.",
        "If there is a link, do not open it. Look at the URL carefully — check for misspellings or unusual domain names.",
        "Take a screenshot of the message before deleting it — you may need it if you report the scam.",
        "Block and report the sender number on WhatsApp or your SMS app.",
        "If you are unsure, ask a trusted family member or friend to help you decide before taking any action."
      ],
      hi: [
        "रुकें — अभी किसी लिंक पर क्लिक न करें, कोई नंबर डायल न करें, और संदेश का जवाब न दें।",
        "शांत रहें — ठग जानबूझकर घबराहट और जल्दी का माहौल बनाते हैं ताकि आप सोच न सकें।",
        "भेजने वाले की जांच करें — क्या यह कोई नंबर है जिसे आप पहचानते हैं? अगर यह कोई कंपनी या सरकारी संस्था होने का दावा करता है, तो उनका आधिकारिक नंबर अलग से खोजें और सीधे कॉल करें।",
        "अगर संदेश किसी सेव किए गए संपर्क से आया है, तो उस व्यक्ति को सीधे वॉयस कॉल करें — उनका अकाउंट हैक हो सकता है।",
        "अगर कोई लिंक है, तो उसे न खोलें। URL को ध्यान से देखें — गलत वर्तनी या असामान्य डोमेन नाम की जांच करें।",
        "संदेश डिलीट करने से पहले उसका स्क्रीनशॉट लें — अगर आप स्कैम की रिपोर्ट करते हैं तो आपको इसकी जरूरत हो सकती है।",
        "WhatsApp या अपने SMS ऐप पर भेजने वाले नंबर को ब्लॉक और रिपोर्ट करें।",
        "अगर आप अनिश्चित हैं, तो कोई भी कदम उठाने से पहले किसी विश्वसनीय परिवार के सदस्य या मित्र से सलाह लें।"
      ],
      mr: [
        "थांबा — आत्ता कोणत्याही लिंकवर क्लिक करू नका, कोणताही नंबर डायल करू नका किंवा संदेशाला उत्तर देऊ नका.",
        "शांत राहा — फसवणूक करणारे जाणूनबुजून घाई आणि भीतीचे वातावरण निर्माण करतात जेणेकरून तुम्ही नीट विचार करू शकणार नाही.",
        "पाठवणाऱ्याची तपासणी करा — हा नंबर तुम्हाला ओळखीचा आहे का? जर तो एखाद्या कंपनी किंवा सरकारी संस्थेचा असल्याचा दावा करत असेल, तर त्यांचा अधिकृत नंबर वेगळ्या ठिकाणाहून शोधा आणि थेट कॉल करा.",
        "जर संदेश एखाद्या सेव्ह केलेल्या संपर्काकडून आला असेल, तर त्या व्यक्तीला थेट व्हॉइस कॉल करा — त्यांचे खाते हॅक झाले असेल.",
        "जर लिंक असेल तर ती उघडू नका. URL काळजीपूर्वक पाहा — चुकीचे स्पेलिंग किंवा असामान्य डोमेन नावांची तपासणी करा.",
        "संदेश हटवण्यापूर्वी त्याचा स्क्रीनशॉट घ्या — फसवणूक तक्रार केल्यास तुम्हाला त्याची गरज लागू शकते.",
        "WhatsApp किंवा तुमच्या SMS अ‍ॅपवर पाठवणाऱ्याचा नंबर ब्लॉक आणि रिपोर्ट करा.",
        "जर तुम्हाला खात्री नसेल, तर कोणताही निर्णय घेण्यापूर्वी एखाद्या विश्वासू कुटुंब सदस्याची किंवा मित्राची मदत घ्या."
      ]
    },

    /* ----------------------------------------------------------
       Section 4 — What NOT to do
       Common mistakes that make the situation worse.
    ---------------------------------------------------------- */
    what_not_to_do: {
      en: [
        "Do not click any link in the message, even out of curiosity.",
        "Do not share any OTP, password, PIN, Aadhaar number, or bank details — no legitimate organisation ever asks for these over a message.",
        "Do not call back any number given in the message — it may connect you to the scammer.",
        "Do not transfer or send any money, even small amounts.",
        "Do not forward the message to friends or family — this spreads the scam further.",
        "Do not feel embarrassed or panic — this happens to many people and it is not your fault.",
        "Do not delete the message immediately if you think you may have already been scammed — it is evidence."
      ],
      hi: [
        "संदेश में कोई भी लिंक पर क्लिक न करें, भले ही जिज्ञासावश हो।",
        "कोई OTP, पासवर्ड, PIN, आधार नंबर, या बैंक विवरण शेयर न करें — कोई भी वैध संगठन इन्हें संदेश पर नहीं मांगता।",
        "संदेश में दिए गए किसी भी नंबर पर कॉल बैक न करें — यह आपको ठग से जोड़ सकता है।",
        "कोई भी राशि ट्रांसफर या भेजें नहीं, चाहे वह छोटी ही क्यों न हो।",
        "संदेश को दोस्तों या परिवार को फॉरवर्ड न करें — इससे स्कैम और फैलता है।",
        "शर्मिंदगी या घबराहट न महसूस करें — यह बहुत से लोगों के साथ होता है और इसमें आपकी गलती नहीं है।",
        "अगर आपको लगता है कि आप पहले से ही ठगे जा चुके हैं तो संदेश को तुरंत डिलीट न करें — यह सबूत है।"
      ],
      mr: [
        "संदेशातील कोणत्याही लिंकवर क्लिक करू नका, जरी कुतूहलापोटी असले तरी.",
        "कोणताही OTP, पासवर्ड, PIN, आधार नंबर किंवा बँक माहिती शेअर करू नका — कोणतीही वैध संस्था हे संदेशावर विचारत नाही.",
        "संदेशात दिलेल्या कोणत्याही नंबरवर परत कॉल करू नका — हे तुम्हाला फसवणाऱ्याशी जोडू शकते.",
        "कोणतेही पैसे ट्रान्सफर किंवा पाठवू नका, अगदी छोटी रक्कम असली तरी.",
        "संदेश मित्र किंवा कुटुंबाला फॉरवर्ड करू नका — यामुळे फसवणूक अधिक पसरते.",
        "लाज वाटू नका किंवा घाबरू नका — हे अनेक लोकांसोबत होते आणि यात तुमची चूक नाही.",
        "तुम्हाला वाटत असेल की तुम्ही आधीच फसवले गेलात तर संदेश लगेच हटवू नका — तो पुरावा आहे."
      ]
    },

    /* ----------------------------------------------------------
       Section 5 — Already clicked / shared?
       Calm, reassuring paragraph — no blame, clear next steps.
    ---------------------------------------------------------- */
    already_clicked: {
      en: "Do not panic — you are not alone and it is not too late to act. If you clicked a link, close the page immediately and do not enter any information on it. If you shared an OTP or bank details, contact your bank right away and ask them to freeze or secure your account. Change your passwords on any accounts that may be affected, especially banking apps, email, and WhatsApp. Take screenshots of all messages and save the sender's number. Report the incident as soon as possible — the sooner you report, the better the chance of recovery. You can find reporting links in the section below.",
      hi: "घबराएं नहीं — आप अकेले नहीं हैं और अभी भी कार्रवाई करना देर नहीं हुई है। अगर आपने किसी लिंक पर क्लिक किया है, तो उस पेज को तुरंत बंद करें और उस पर कोई जानकारी दर्ज न करें। अगर आपने OTP या बैंक विवरण शेयर किया है, तो तुरंत अपने बैंक से संपर्क करें और उनसे अपना खाता फ्रीज या सुरक्षित करने को कहें। किसी भी प्रभावित हो सकने वाले खाते का पासवर्ड बदलें, खासकर बैंकिंग ऐप, ईमेल, और WhatsApp। सभी संदेशों के स्क्रीनशॉट लें और भेजने वाले का नंबर सेव करें। जितनी जल्दी हो सके घटना की रिपोर्ट करें — जितनी जल्दी रिपोर्ट करेंगे, धन वापसी की उतनी अधिक संभावना होगी। रिपोर्टिंग लिंक नीचे दिए गए अनुभाग में मिलेंगे।",
      mr: "घाबरू नका — तुम्ही एकटे नाही आहात आणि अजूनही वेळ आहे. जर तुम्ही एखाद्या लिंकवर क्लिक केले असेल, तर ती पेज तात्काळ बंद करा आणि त्यावर कोणतीही माहिती भरू नका. जर तुम्ही OTP किंवा बँक माहिती शेअर केली असेल, तर ताबडतोब तुमच्या बँकेशी संपर्क साधा आणि त्यांना तुमचे खाते फ्रीज किंवा सुरक्षित करण्यास सांगा. कोणत्याही प्रभावित होऊ शकणाऱ्या खात्यांचे पासवर्ड बदला, विशेषतः बँकिंग अ‍ॅप, ईमेल आणि WhatsApp. सर्व संदेशांचे स्क्रीनशॉट घ्या आणि पाठवणाऱ्याचा नंबर सेव्ह करा. शक्य तितक्या लवकर घटना तक्रार करा — जितक्या लवकर तक्रार करता, पैसे परत मिळण्याची शक्यता अधिक. तक्रार लिंक्स खाली दिलेल्या विभागात मिळतील."
    },

    /* ----------------------------------------------------------
       Section 6 — Report links
       IMPORTANT: All entries marked pending_verification: true
       must be confirmed by the project team before going live.
       Do NOT remove the pending_verification flag without checking.
    ---------------------------------------------------------- */
    report_links: [
      {
        label: {
          en: "National Cyber Crime Reporting Portal",
          hi: "राष्ट्रीय साइबर अपराध रिपोर्टिंग पोर्टल",
          mr: "राष्ट्रीय सायबर गुन्हे तक्रार पोर्टल"
        },
        description: {
          en: "File an online complaint for cybercrime including fraud messages.",
          hi: "धोखाधड़ी संदेशों सहित साइबर अपराध के लिए ऑनलाइन शिकायत दर्ज करें।",
          mr: "फसवणुकीच्या संदेशांसह सायबर गुन्ह्यांसाठी ऑनलाइन तक्रार दाखल करा."
        },
        url:                  "https://cybercrime.gov.in",
        pending_verification: false
      },
      {
        label: {
          en: "Cyber Crime Helpline — 1930",
          hi: "साइबर क्राइम हेल्पलाइन — 1930",
          mr: "सायबर क्राइम हेल्पलाइन — 1930"
        },
        description: {
          en: "Call the national cyber crime helpline. Available in India.",
          hi: "राष्ट्रीय साइबर क्राइम हेल्पलाइन पर कॉल करें। भारत में उपलब्ध।",
          mr: "राष्ट्रीय सायबर क्राइम हेल्पलाइनवर कॉल करा. भारतात उपलब्ध."
        },
        url:                  "tel:1930",
        pending_verification: false
      },
      {
        label: {
          en: "Report Spam on WhatsApp",
          hi: "WhatsApp पर स्पैम रिपोर्ट करें",
          mr: "WhatsApp वर स्पॅम रिपोर्ट करा"
        },
        description: {
          en: "Open the chat → tap the contact name → scroll down → Report.",
          hi: "चैट खोलें → संपर्क नाम पर टैप करें → नीचे स्क्रॉल करें → रिपोर्ट करें।",
          mr: "चॅट उघडा → संपर्काच्या नावावर टॅप करा → खाली स्क्रोल करा → रिपोर्ट करा."
        },
        url:                  null,
        pending_verification: false,
        is_instruction:       true    /* no link — this is an in-app instruction */
      }
    ]
  },

  "call": {
    id: "call",
    icon: "📞",
    category: "call",

    title: {
      en: "Fake / Scam Phone Call",
      hi: "फर्जी / ठगी वाली फोन कॉल",
      mr: "बनावट / फसवी फोन कॉल"
    },

    quick_help: {
      intro: {
        en: "You got a suspicious call. Do these 5 things right now:",
        hi: "आपको संदिग्ध कॉल आया है। अभी ये 5 काम करें:",
        mr: "तुम्हाला संशयास्पद कॉल आला आहे. आत्ता या 5 गोष्टी करा:"
      },
      steps: {
        en: [
          "End the call immediately — do not stay on the line.",
          "Do not share OTP, UPI PIN, ATM PIN, CVV, password or any login code.",
          "Do not install any app or share your screen because the caller asks you to.",
          "Verify on your own using the official website, app or customer-care number.",
          "If money is lost, call 1930 immediately and inform your bank."
        ],
        hi: [
          "कॉल तुरंत काट दें — लाइन पर बने न रहें।",
          "OTP, UPI PIN, ATM PIN, CVV, पासवर्ड या कोई लॉगिन कोड साझा न करें।",
          "कॉलर के कहने पर कोई ऐप इंस्टॉल न करें और स्क्रीन शेयर न करें।",
          "आधिकारिक वेबसाइट, ऐप या कस्टमर-केयर नंबर से खुद जांच करें।",
          "अगर पैसे गए हैं, तो तुरंत 1930 पर कॉल करें और बैंक को बताएं।"
        ],
        mr: [
          "कॉल लगेच बंद करा — लाइनवर राहू नका.",
          "OTP, UPI PIN, ATM PIN, CVV, पासवर्ड किंवा कोणताही लॉगिन कोड देऊ नका.",
          "कॉलर सांगतो म्हणून कोणतेही अ‍ॅप इंस्टॉल करू नका किंवा स्क्रीन शेअर करू नका.",
          "अधिकृत वेबसाइट, अ‍ॅप किंवा कस्टमर-केअर नंबरवरून स्वतः तपासा.",
          "पैसे गेले असतील तर लगेच 1930 वर कॉल करा आणि बँकेला कळवा."
        ]
      }
    },

    what_happened: {
      en: "Someone called claiming to be from your bank, police, KYC team or customer care. They create fear or urgency about your account to get your OTP, PIN or money.",
      hi: "किसी ने बैंक, पुलिस, KYC टीम या कस्टमर केयर बनकर कॉल किया। वे खाते का डर या जल्दी दिखाकर आपका OTP, PIN या पैसा लेना चाहते हैं।",
      mr: "कोणीतरी बँक, पोलीस, KYC टीम किंवा कस्टमर केअर असल्याचे सांगून कॉल केला. ते खात्याची भीती किंवा घाई दाखवून तुमचा OTP, PIN किंवा पैसे घेऊ इच्छितात."
    },

    red_flags: {
      en: [
        "The caller claims to be bank, police, KYC or customer-care staff.",
        "They ask for OTP, UPI PIN, ATM PIN, CVV, password or login code.",
        "They pressure you to act fast or threaten account block or arrest.",
        "They ask you to install an app or share your screen.",
        "They ask you to transfer money or share card and bank details.",
        "They refuse to wait while you verify through official channels."
      ],
      hi: [
        "कॉलर खुद को बैंक, पुलिस, KYC या कस्टमर-केयर स्टाफ बताता है।",
        "वे OTP, UPI PIN, ATM PIN, CVV, पासवर्ड या लॉगिन कोड मांगते हैं।",
        "वे जल्दी करने का दबाव डालते हैं या खाता बंद / गिरफ्तारी की धमकी देते हैं।",
        "वे ऐप इंस्टॉल करने या स्क्रीन शेयर करने को कहते हैं।",
        "वे पैसे ट्रांसफर करने या कार्ड व बैंक जानकारी देने को कहते हैं।",
        "वे आधिकारिक जांच का इंतजार करने से मना करते हैं।"
      ],
      mr: [
        "कॉलर स्वतःला बँक, पोलीस, KYC किंवा कस्टमर-केअर कर्मचारी म्हणवतो.",
        "ते OTP, UPI PIN, ATM PIN, CVV, पासवर्ड किंवा लॉगिन कोड मागतात.",
        "ते घाई करायला लावतात किंवा खाते बंद / अटकेची धमकी देतात.",
        "ते अ‍ॅप इंस्टॉल करायला किंवा स्क्रीन शेअर करायला सांगतात.",
        "ते पैसे पाठवायला किंवा कार्ड व बँक माहिती द्यायला सांगतात.",
        "ते अधिकृत तपासणीची वाट पाहायला नकार देतात."
      ]
    },

    what_to_do: {
      en: [
        "End the call calmly and do not share any code or detail.",
        "Note the number, time and what the caller said.",
        "Verify on your own using the official app, website or customer-care number.",
        "Block and report the number as spam in your phone app.",
        "If money was lost, call 1930 immediately and inform your bank."
      ],
      hi: [
        "शांति से कॉल काट दें और कोई कोड या जानकारी न दें।",
        "नंबर, समय और कॉलर ने क्या कहा, यह नोट करें।",
        "आधिकारिक ऐप, वेबसाइट या कस्टमर-केयर नंबर से खुद जांच करें।",
        "फोन ऐप में नंबर को स्पैम बताकर ब्लॉक और रिपोर्ट करें।",
        "अगर पैसे गए हैं, तो तुरंत 1930 पर कॉल करें और बैंक को बताएं।"
      ],
      mr: [
        "शांतपणे कॉल बंद करा आणि कोणताही कोड किंवा माहिती देऊ नका.",
        "नंबर, वेळ आणि कॉलर काय म्हणाला हे लिहून ठेवा.",
        "अधिकृत अ‍ॅप, वेबसाइट किंवा कस्टमर-केअर नंबरवरून स्वतः तपासा.",
        "फोन अ‍ॅपमध्ये नंबर स्पॅम म्हणून ब्लॉक आणि रिपोर्ट करा.",
        "पैसे गेले असतील तर लगेच 1930 वर कॉल करा आणि बँकेला कळवा."
      ]
    },

    what_not_to_do: {
      en: [
        "Do not share OTP, PIN, CVV, password or login codes.",
        "Do not install any remote-access or screen-sharing app.",
        "Do not call back a number given by the caller.",
        "Do not transfer money while feeling scared or rushed.",
        "Do not trust the caller ID or voice alone."
      ],
      hi: [
        "OTP, PIN, CVV, पासवर्ड या लॉगिन कोड साझा न करें।",
        "कोई रिमोट-एक्सेस या स्क्रीन-शेयरिंग ऐप इंस्टॉल न करें।",
        "कॉलर के दिए नंबर पर वापस कॉल न करें।",
        "डर या जल्दी में पैसे ट्रांसफर न करें।",
        "केवल कॉलर ID या आवाज पर भरोसा न करें।"
      ],
      mr: [
        "OTP, PIN, CVV, पासवर्ड किंवा लॉगिन कोड देऊ नका.",
        "कोणतेही रिमोट-एक्सेस किंवा स्क्रीन-शेअरिंग अ‍ॅप इंस्टॉल करू नका.",
        "कॉलरने दिलेल्या नंबरवर परत कॉल करू नका.",
        "घाबरून किंवा घाईत पैसे पाठवू नका.",
        "फक्त कॉलर ID किंवा आवाजावर विश्वास ठेवू नका."
      ]
    },

    already_clicked: {
      en: "Do not feel ashamed — act fast now. Disconnect the call and uninstall any app you installed. Call your bank, freeze the account if needed, and change passwords from the official app. Save call details and screenshots, then call 1930 and report on cybercrime.gov.in.",
      hi: "शर्मिंदा न हों — अब जल्दी काम करें। कॉल काटें और जो ऐप इंस्टॉल किया है उसे हटाएं। बैंक को कॉल करें, जरूरत हो तो खाता फ्रीज कराएं, और आधिकारिक ऐप से पासवर्ड बदलें। कॉल की जानकारी और स्क्रीनशॉट रखें, फिर 1930 पर कॉल करें और cybercrime.gov.in पर रिपोर्ट करें।",
      mr: "लाज वाटून घेऊ नका — आता लगेच कृती करा. कॉल बंद करा आणि इंस्टॉल केलेले अ‍ॅप काढून टाका. बँकेला कॉल करा, गरज असल्यास खाते फ्रीझ करा आणि अधिकृत अ‍ॅपमधून पासवर्ड बदला. कॉलची माहिती आणि स्क्रीनशॉट ठेवा, मग 1930 वर कॉल करा आणि cybercrime.gov.in वर तक्रार करा."
    },

    faq: [
      {
        id: "faq-check",
        q: { en: "How can I verify a call is genuine?", hi: "कॉल असली है या नहीं, यह कैसे जांचूं?", mr: "कॉल खरी आहे का हे कसे तपासावे?" },
        type: "steps",
        a: {
          en: [
            "End the call and do not share any OTP or PIN.",
            "Find the official number yourself from the bank app or website.",
            "Call that official number and ask if they really called you."
          ],
          hi: [
            "कॉल काट दें और कोई OTP या PIN न दें।",
            "बैंक ऐप या वेबसाइट से खुद आधिकारिक नंबर निकालें।",
            "उस आधिकारिक नंबर पर कॉल करके पूछें कि क्या उन्होंने सच में कॉल किया था।"
          ],
          mr: [
            "कॉल बंद करा आणि OTP किंवा PIN देऊ नका.",
            "बँक अ‍ॅप किंवा वेबसाइटवरून स्वतः अधिकृत नंबर काढा.",
            "त्या अधिकृत नंबरवर कॉल करून विचारा की त्यांनी खरंच कॉल केला होता का."
          ]
        }
      },
      {
        id: "faq-avoid",
        q: { en: "What should I avoid on such calls?", hi: "ऐसी कॉल पर मुझे क्या नहीं करना चाहिए?", mr: "अशा कॉलवर मी काय टाळावे?" },
        type: "avoid",
        a: {
          en: [
            "Do not share OTP, UPI PIN, ATM PIN, CVV or passwords.",
            "Do not install apps or share your screen.",
            "Do not pay or transfer money under pressure."
          ],
          hi: [
            "OTP, UPI PIN, ATM PIN, CVV या पासवर्ड साझा न करें।",
            "ऐप इंस्टॉल न करें और स्क्रीन शेयर न करें।",
            "दबाव में पैसे न दें और ट्रांसफर न करें।"
          ],
          mr: [
            "OTP, UPI PIN, ATM PIN, CVV किंवा पासवर्ड देऊ नका.",
            "अ‍ॅप इंस्टॉल करू नका किंवा स्क्रीन शेअर करू नका.",
            "दबावाखाली पैसे देऊ नका किंवा पाठवू नका."
          ]
        }
      },
      {
        id: "faq-already-clicked",
        q: { en: "What if I already shared a code or installed an app?", hi: "अगर मैंने कोड दे दिया या ऐप इंस्टॉल कर लिया तो क्या करूं?", mr: "मी कोड दिला किंवा अ‍ॅप इंस्टॉल केले तर काय करावे?" },
        type: "para",
        a: {
          en: "Disconnect immediately, uninstall the app, call your bank, and change passwords from the official app. Then call 1930 and report on cybercrime.gov.in.",
          hi: "तुरंत कनेक्शन काटें, ऐप हटाएं, बैंक को कॉल करें, और आधिकारिक ऐप से पासवर्ड बदलें। फिर 1930 पर कॉल करें और cybercrime.gov.in पर रिपोर्ट करें।",
          mr: "लगेच कनेक्शन तोडा, अ‍ॅप काढा, बँकेला कॉल करा आणि अधिकृत अ‍ॅपमधून पासवर्ड बदला. मग 1930 वर कॉल करा आणि cybercrime.gov.in वर तक्रार करा."
        }
      },
      {
        id: "faq-report",
        q: { en: "Where do I report a scam call?", hi: "ठगी वाली कॉल की रिपोर्ट कहां करूं?", mr: "फसव्या कॉलची तक्रार कुठे करावी?" },
        type: "report",
        a: { en: [], hi: [], mr: [] }
      }
    ],

    report_links: [
      {
        label: { en: "National Cyber Crime Reporting Portal", hi: "राष्ट्रीय साइबर अपराध रिपोर्टिंग पोर्टल", mr: "राष्ट्रीय सायबर गुन्हे तक्रार पोर्टल" },
        description: { en: "Report fraudulent calls and online scam attempts.", hi: "फर्जी कॉल और ऑनलाइन धोखाधड़ी की रिपोर्ट करें।", mr: "फसवी कॉल आणि ऑनलाइन फसवणूकची तक्रार करा." },
        url: "https://cybercrime.gov.in",
        pending_verification: false
      },
      {
        label: { en: "Cyber Crime Helpline — 1930", hi: "साइबर क्राइम हेल्पलाइन — 1930", mr: "सायबर क्राइम हेल्पलाइन — 1930" },
        description: { en: "Call the national cyber crime helpline for immediate help.", hi: "तत्काल मदद के लिए राष्ट्रीय साइबर क्राइम हेल्पलाइन पर कॉल करें।", mr: "तात्काळ मदतीसाठी राष्ट्रीय सायबर क्राइम हेल्पलाइनवर कॉल करा." },
        url: "tel:1930",
        pending_verification: false
      },
      {
        label: { en: "Report the number in your phone app", hi: "अपने फोन ऐप में नंबर रिपोर्ट करें", mr: "तुमच्या फोन अ‍ॅपमध्ये नंबर रिपोर्ट करा" },
        description: { en: "Open your call log and mark the number as spam or block it.", hi: "कॉल लॉग खोलें और नंबर को स्पैम के रूप में रिपोर्ट करें या ब्लॉक करें।", mr: "कॉल लॉग उघडा आणि नंबर स्पॅम म्हणून रिपोर्ट करा किंवा ब्लॉक करा." },
        url: null,
        pending_verification: false,
        is_instruction: true
      }
    ]
  },

  "video": {
    id: "video",
    icon: "📹",
    category: "video",

    title: {
      en: "Fake Video Call",
      hi: "फर्जी वीडियो कॉल",
      mr: "बनावट व्हिडिओ कॉल"
    },

    quick_help: {
      intro: {
        en: "You got a strange video call. Do these 5 things now:",
        hi: "आपको अजीब वीडियो कॉल आई है। अभी ये 5 काम करें:",
        mr: "तुम्हाला विचित्र व्हिडिओ कॉल आला आहे. आत्ता या 5 गोष्टी करा:"
      },
      steps: {
        en: [
          "End the video call immediately — do not continue talking.",
          "Do not send money or share OTP, PIN, passwords or login codes.",
          "Do not share personal photos, videos or sensitive information.",
          "Save screenshots, number and chat as evidence, then block the account.",
          "If threatened, tell a trusted person and report to cybercrime.gov.in; call 1930 if money is involved."
        ],
        hi: [
          "वीडियो कॉल तुरंत काट दें — बात जारी न रखें।",
          "पैसे न भेजें और OTP, PIN, पासवर्ड या लॉगिन कोड साझा न करें।",
          "निजी फोटो, वीडियो या संवेदनशील जानकारी साझा न करें।",
          "स्क्रीनशॉट, नंबर और चैट सबूत के तौर पर रखें, फिर अकाउंट ब्लॉक करें।",
          "धमकी मिले तो किसी भरोसेमंद व्यक्ति को बताएं और cybercrime.gov.in पर रिपोर्ट करें; पैसे गए हों तो 1930 पर कॉल करें।"
        ],
        mr: [
          "व्हिडिओ कॉल लगेच बंद करा — बोलणे सुरू ठेवू नका.",
          "पैसे पाठवू नका आणि OTP, PIN, पासवर्ड किंवा लॉगिन कोड देऊ नका.",
          "वैयक्तिक फोटो, व्हिडिओ किंवा संवेदनशील माहिती देऊ नका.",
          "स्क्रीनशॉट, नंबर आणि चॅट पुरावा म्हणून ठेवा, मग अकाउंट ब्लॉक करा.",
          "धमकी आली तर विश्वासू व्यक्तीला सांगा आणि cybercrime.gov.in वर तक्रार करा; पैसे गेले असतील तर 1930 वर कॉल करा."
        ]
      }
    },

    what_happened: {
      en: "You got an unexpected video call from a stranger, fake official or fake friend. They may record you, threaten you, or demand money or codes.",
      hi: "आपको किसी अजनबी, नकली अधिकारी या नकली दोस्त से अचानक वीडियो कॉल आया। वे आपको रिकॉर्ड कर सकते हैं, धमका सकते हैं, या पैसे या कोड मांग सकते हैं।",
      mr: "तुम्हाला अनोळखी व्यक्ती, बनावट अधिकारी किंवा बनावट मित्राकडून अचानक व्हिडिओ कॉल आला. ते तुम्हाला रेकॉर्ड करू शकतात, धमकावू शकतात किंवा पैसे वा कोड मागू शकतात."
    },

    red_flags: {
      en: [
        "The video call comes from an unknown number or new account.",
        "The caller claims to be police, bank staff or a friend in trouble.",
        "They ask you to turn on camera, undress, or share private photos or videos.",
        "They record you and then threaten to share the recording.",
        "They demand money, gift cards, UPI payment or OTP and passwords.",
        "They tell you not to tell family or police and to act secretly."
      ],
      hi: [
        "वीडियो कॉल अनजान नंबर या नए अकाउंट से आता है।",
        "कॉलर खुद को पुलिस, बैंक स्टाफ या मुसीबत में फंसा दोस्त बताता है।",
        "वे कैमरा चालू करने, निजी फोटो या वीडियो साझा करने को कहते हैं।",
        "वे आपको रिकॉर्ड करके रिकॉर्डिंग फैलाने की धमकी देते हैं।",
        "वे पैसे, गिफ्ट कार्ड, UPI पेमेंट या OTP और पासवर्ड मांगते हैं।",
        "वे परिवार या पुलिस को न बताने और चुपचाप काम करने को कहते हैं।"
      ],
      mr: [
        "व्हिडिओ कॉल अनोळखी नंबर किंवा नवीन अकाउंटवरून येतो.",
        "कॉलर स्वतःला पोलीस, बँक कर्मचारी किंवा अडचणीतील मित्र म्हणवतो.",
        "ते कॅमेरा चालू करायला किंवा खाजगी फोटो-व्हिडिओ द्यायला सांगतात.",
        "ते तुम्हाला रेकॉर्ड करून रेकॉर्डिंग पसरवण्याची धमकी देतात.",
        "ते पैसे, गिफ्ट कार्ड, UPI पेमेंट किंवा OTP व पासवर्ड मागतात.",
        "ते कुटुंब किंवा पोलिसांना न सांगता गुपचूप कृती करायला सांगतात."
      ]
    },

    what_to_do: {
      en: [
        "End the call at once and turn off camera and mic.",
        "Do not delete evidence — save screenshots, number and chats.",
        "Block and report the account in the app.",
        "Tell a trusted family member or friend what happened.",
        "Report on cybercrime.gov.in; call 1930 if money is involved."
      ],
      hi: [
        "तुरंत कॉल काटें और कैमरा व माइक बंद करें।",
        "सबूत न मिटाएं — स्क्रीनशॉट, नंबर और चैट संभालकर रखें।",
        "ऐप में अकाउंट को ब्लॉक और रिपोर्ट करें।",
        "किसी भरोसेमंद परिवारजन या दोस्त को बताएं।",
        "cybercrime.gov.in पर रिपोर्ट करें; पैसे गए हों तो 1930 पर कॉल करें।"
      ],
      mr: [
        "लगेच कॉल बंद करा आणि कॅमेरा व माईक बंद करा.",
        "पुरावा पुसू नका — स्क्रीनशॉट, नंबर आणि चॅट जपून ठेवा.",
        "अ‍ॅपमध्ये अकाउंट ब्लॉक आणि रिपोर्ट करा.",
        "विश्वासू कुटुंबीय किंवा मित्राला घडले ते सांगा.",
        "cybercrime.gov.in वर तक्रार करा; पैसे गेले असतील तर 1930 वर कॉल करा."
      ]
    },

    what_not_to_do: {
      en: [
        "Do not continue the video call out of fear or shame.",
        "Do not send money to stop a recording from being shared.",
        "Do not share OTP, PIN, passwords or login codes.",
        "Do not share more photos or videos with the blackmailer.",
        "Do not face threats alone — seek trusted help."
      ],
      hi: [
        "डर या शर्म से वीडियो कॉल जारी न रखें।",
        "रिकॉर्डिंग रोकने के लिए पैसे न भेजें।",
        "OTP, PIN, पासवर्ड या लॉगिन कोड साझा न करें।",
        "ब्लैकमेलर को और फोटो या वीडियो न भेजें।",
        "धमकी अकेले न झेलें — भरोसेमंद मदद लें।"
      ],
      mr: [
        "भीती किंवा लाजेने व्हिडिओ कॉल सुरू ठेवू नका.",
        "रेकॉर्डिंग थांबवण्यासाठी पैसे पाठवू नका.",
        "OTP, PIN, पासवर्ड किंवा लॉगिन कोड देऊ नका.",
        "ब्लॅकमेल करणाऱ्याला आणखी फोटो किंवा व्हिडिओ पाठवू नका.",
        "धमक्या एकट्याने सहन करू नका — विश्वासू मदत घ्या."
      ]
    },

    already_clicked: {
      en: "Do not blame yourself. End all contact, save all evidence, and block the account. Tell a trusted person. Change passwords if you shared any code, inform your bank if money went, and report quickly on cybercrime.gov.in. If there is threat or danger, contact local police with a trusted person.",
      hi: "खुद को दोष न दें। सारा संपर्क बंद करें, सबूत संभालें, और अकाउंट ब्लॉक करें। किसी भरोसेमंद व्यक्ति को बताएं। कोड दिया हो तो पासवर्ड बदलें, पैसे गए हों तो बैंक को बताएं, और जल्दी cybercrime.gov.in पर रिपोर्ट करें। धमकी या खतरा हो तो भरोसेमंद व्यक्ति के साथ स्थानीय पुलिस से संपर्क करें।",
      mr: "स्वतःला दोष देऊ नका. सर्व संपर्क थांबवा, पुरावे जपा आणि अकाउंट ब्लॉक करा. विश्वासू व्यक्तीला सांगा. कोड दिला असेल तर पासवर्ड बदला, पैसे गेले असतील तर बँकेला कळवा आणि लवकर cybercrime.gov.in वर तक्रार करा. धमकी किंवा धोका असेल तर विश्वासू व्यक्तीसह स्थानिक पोलिसांशी संपर्क साधा."
    },

    faq: [
      {
        id: "faq-fake-video",
        q: { en: "How do I handle a threatening video call?", hi: "धमकी वाली वीडियो कॉल को कैसे संभालूं?", mr: "धमकी देणारा व्हिडिओ कॉल कसा हाताळावा?" },
        type: "steps",
        a: {
          en: [
            "End the call and do not pay or share codes.",
            "Save screenshots, number and chats as evidence.",
            "Block and report the account in the app."
          ],
          hi: [
            "कॉल काट दें और पैसे न दें व कोड न दें।",
            "स्क्रीनशॉट, नंबर और चैट सबूत के तौर पर रखें।",
            "ऐप में अकाउंट ब्लॉक और रिपोर्ट करें।"
          ],
          mr: [
            "कॉल बंद करा आणि पैसे देऊ नका व कोड देऊ नका.",
            "स्क्रीनशॉट, नंबर आणि चॅट पुरावा म्हणून ठेवा.",
            "अ‍ॅपमध्ये अकाउंट ब्लॉक आणि रिपोर्ट करा."
          ]
        }
      },
      {
        id: "faq-avoid",
        q: { en: "What should I avoid?", hi: "मुझे क्या नहीं करना चाहिए?", mr: "मी काय टाळावे?" },
        type: "avoid",
        a: {
          en: [
            "Do not send money or share OTP, PIN or passwords.",
            "Do not share more photos or videos.",
            "Do not hide the threat — tell a trusted person."
          ],
          hi: [
            "पैसे न भेजें और OTP, PIN या पासवर्ड न दें।",
            "और फोटो या वीडियो न भेजें।",
            "धमकी न छिपाएं — भरोसेमंद व्यक्ति को बताएं।"
          ],
          mr: [
            "पैसे पाठवू नका आणि OTP, PIN किंवा पासवर्ड देऊ नका.",
            "आणखी फोटो किंवा व्हिडिओ पाठवू नका.",
            "धमकी लपवू नका — विश्वासू व्यक्तीला सांगा."
          ]
        }
      },
      {
        id: "faq-already-clicked",
        q: { en: "What if I was recorded or already paid?", hi: "अगर मुझे रिकॉर्ड किया गया या मैंने पैसे दे दिए तो क्या करूं?", mr: "मला रेकॉर्ड केले किंवा मी पैसे दिले तर काय करावे?" },
        type: "para",
        a: {
          en: "Stop all contact, save evidence, tell a trusted person, and report on cybercrime.gov.in. If money went, call 1930 and inform your bank.",
          hi: "सारा संपर्क बंद करें, सबूत रखें, भरोसेमंद व्यक्ति को बताएं, और cybercrime.gov.in पर रिपोर्ट करें। पैसे गए हों तो 1930 पर कॉल करें और बैंक को बताएं।",
          mr: "सर्व संपर्क थांबवा, पुरावे ठेवा, विश्वासू व्यक्तीला सांगा आणि cybercrime.gov.in वर तक्रार करा. पैसे गेले असतील तर 1930 वर कॉल करा आणि बँकेला कळवा."
        }
      },
      {
        id: "faq-report",
        q: { en: "Where do I report it?", hi: "इसकी रिपोर्ट कहां करूं?", mr: "याची तक्रार कुठे करावी?" },
        type: "report",
        a: { en: [], hi: [], mr: [] }
      }
    ],

    report_links: [
      {
        label: { en: "National Cyber Crime Reporting Portal", hi: "राष्ट्रीय साइबर अपराध रिपोर्टिंग पोर्टल", mr: "राष्ट्रीय सायबर गुन्हे तक्रार पोर्टल" },
        description: { en: "Report blackmail, extortion, or fake video scams.", hi: "ब्लैकमेल, रंगदारी या नकली वीडियो घोटालों की रिपोर्ट करें।", mr: "ब्लॅकमेल, वसुली किंवा बनावट व्हिडिओ घोटाळ्यांची तक्रार करा." },
        url: "https://cybercrime.gov.in",
        pending_verification: false
      },
      {
        label: { en: "Cyber Crime Helpline — 1930", hi: "साइबर क्राइम हेल्पलाइन — 1930", mr: "सायबर क्राइम हेल्पलाइन — 1930" },
        description: { en: "Call for urgent guidance and reporting support.", hi: "तत्काल मार्गदर्शन और रिपोर्टिंग सहायता के लिए कॉल करें।", mr: "तात्काळ मार्गदर्शन आणि तक्रार मदतीसाठी कॉल करा." },
        url: "tel:1930",
        pending_verification: false
      },
      {
        label: { en: "Report on the social app or platform", hi: "सोशल ऐप या प्लेटफॉर्म पर रिपोर्ट करें", mr: "सोशल अ‍ॅप किंवा प्लॅटफॉर्मवर रिपोर्ट करा" },
        description: { en: "Use the app's report, block, and safety tools.", hi: "ऐप के रिपोर्ट, ब्लॉक और सुरक्षा टूल का उपयोग करें।", mr: "अ‍ॅपमधील रिपोर्ट, ब्लॉक आणि सुरक्षा टूल वापरा." },
        url: null,
        pending_verification: false,
        is_instruction: true
      }
    ]
  },

  "email": {
    id: "email",
    icon: "📧",
    category: "email",

    title: {
      en: "Phishing / Scam Email",
      hi: "फिशिंग / ठगी वाली ईमेल",
      mr: "फिशिंग / फसवी ईमेल"
    },

    quick_help: {
      intro: {
        en: "You got a suspicious email. Do these 5 things now:",
        hi: "आपको एक संदिग्ध ईमेल मिला है। अभी ये 4 काम करें:",
        mr: "तुम्हाला संशयास्पद ईमेल आला आहे. आत्ता हे 4 काम करा:"
      },
      steps: {
        en: [
          "Do not click any link or open unexpected attachments.",
          "Check the sender address carefully for spelling tricks.",
          "Do not enter password, OTP, PIN or card details from this email.",
          "Open the official website or app yourself to verify.",
          "Mark the email as spam or phishing and delete it."
        ],
        hi: [
          "किसी लिंक पर क्लिक न करें और अनजान अटैचमेंट न खोलें।",
          "भेजने वाले का पता ध्यान से देखें — स्पेलिंग की चाल हो सकती है।",
          "इस ईमेल से पासवर्ड, OTP, PIN या कार्ड जानकारी न भरें।",
          "खुद आधिकारिक वेबसाइट या ऐप खोलकर जांच करें।",
          "ईमेल को स्पैम या फिशिंग बताकर हटाएं।"
        ],
        mr: [
          "कोणत्याही लिंकवर क्लिक करू नका आणि अनोळखी अटॅचमेंट उघडू नका.",
          "पाठवणाऱ्याचा पत्ता काळजीपूर्वक तपासा — स्पेलिंगमध्ये फसवणूक असू शकते.",
          "या ईमेलमधून पासवर्ड, OTP, PIN किंवा कार्ड माहिती भरू नका.",
          "स्वतः अधिकृत वेबसाइट किंवा अ‍ॅप उघडून तपासा.",
          "ईमेल स्पॅम किंवा फिशिंग म्हणून नोंदवून हटवा."
        ]
      }
    },

    what_happened: {
      en: "An email arrived asking you to verify an account, pay a fee, unlock a service, or click an urgent link. Scammers commonly use fake urgency, official-looking branding, and a sense of fear to push people into acting quickly without checking.",
      hi: "एक ईमेल आया जिसमें आपको अकाउंट सत्यापित करने, शुल्क भरने, सेवा खोलने, या तुरंत लिंक पर क्लिक करने के लिए कहा गया। ठग अक्सर नकली दबाव, आधिकारिक जैसी ब्रांडिंग और डर का माहौल बनाकर लोगों को बिना जांच किए तुरंत कार्रवाई करने के लिए प्रेरित करते हैं।",
      mr: "एक ईमेल आला ज्यामध्ये तुम्हाला खाते सत्यापित करायला, फी भरण्यास, सेवा अनलॉक करायला किंवा तातडीच्या लिंकवर क्लिक करायला सांगितले आहे. फसवणूक करणारे बहुतेकदा बनावट तातडी, अधिकृत दिसणारा ब्रँडिंग आणि भीतीचा माहौल निर्माण करतात जेणेकरून लोक तपासणी न करता ताबडतोब कृती करतील."
    },

    red_flags: {
      en: [
        "The sender address looks strange or has small spelling changes.",
        "The email creates urgency — account blocked, refund or penalty.",
        "It asks you to click a login link or open an attachment.",
        "It asks for password, OTP, PIN or full card details.",
        "The greeting is generic and the design looks copied.",
        "The reply address is different from the company name shown."
      ],
      hi: [
        "भेजने वाले का पता अजीब है या स्पेलिंग थोड़ी बदली हुई है।",
        "ईमेल में जल्दी दिखाई जाती है — खाता बंद, रिफंड या जुर्माना।",
        "यह लॉगिन लिंक पर क्लिक करने या अटैचमेंट खोलने को कहती है।",
        "यह पासवर्ड, OTP, PIN या पूरा कार्ड विवरण मांगती है।",
        "संबोधन सामान्य है और डिजाइन नकल जैसा लगता है।",
        "जवाब वाला पता दिख रही कंपनी के नाम से अलग है।"
      ],
      mr: [
        "पाठवणाऱ्याचा पत्ता विचित्र आहे किंवा स्पेलिंग थोड़े बदललेले आहे.",
        "ईमेलमध्ये घाई दाखवली जाते — खाते बंद, रिफंड किंवा दंड.",
        "ती लॉगिन लिंकवर क्लिक करायला किंवा अटॅचमेंट उघडायला सांगते.",
        "ती पासवर्ड, OTP, PIN किंवा पूर्ण कार्ड माहिती मागते.",
        "सुरुवात सर्वसाधारण असते आणि डिझाइन नक्कल केल्यासारखे वाटते.",
        "उत्तराचा पत्ता दाखवलेल्या कंपनीच्या नावापेक्षा वेगळा असतो."
      ]
    },

    what_to_do: {
      en: [
        "Do not click links or open unexpected attachments.",
        "Check the real sender address and read it slowly.",
        "Open the official website or app yourself to verify.",
        "Mark the email as phishing or spam in your email app.",
        "If you entered details, change the password from the official site."
      ],
      hi: [
        "लिंक पर क्लिक न करें और अनजान अटैचमेंट न खोलें।",
        "असली भेजने वाले का पता धीरे-धीरे पढ़कर जांचें।",
        "खुद आधिकारिक वेबसाइट या ऐप खोलकर जांच करें।",
        "ईमेल ऐप में इसे फिशिंग या स्पैम बताएं।",
        "जानकारी भर दी हो तो आधिकारिक साइट से पासवर्ड बदलें।"
      ],
      mr: [
        "लिंकवर क्लिक करू नका आणि अनोळखी अटॅचमेंट उघडू नका.",
        "खरा पाठवणारा पत्ता हळूहळू वाचून तपासा.",
        "स्वतः अधिकृत वेबसाइट किंवा अ‍ॅप उघडून तपासा.",
        "ईमेल अ‍ॅपमध्ये फिशिंग किंवा स्पॅम म्हणून नोंदवा.",
        "माहिती भरली असेल तर अधिकृत साइटवरून पासवर्ड बदला."
      ]
    },

    what_not_to_do: {
      en: [
        "Do not reply to the suspicious email.",
        "Do not call any number given inside the email.",
        "Do not download unexpected bills, receipts or software files.",
        "Do not enter OTP, password or card details from the email link.",
        "Do not forward the scam email to others."
      ],
      hi: [
        "संदिग्ध ईमेल का जवाब न दें।",
        "ईमेल में दिए किसी नंबर पर कॉल न करें।",
        "अनजान बिल, रसीद या सॉफ्टवेयर फाइल डाउनलोड न करें।",
        "ईमेल लिंक से OTP, पासवर्ड या कार्ड जानकारी न भरें।",
        "ठगी वाली ईमेल दूसरों को न भेजें।"
      ],
      mr: [
        "संशयास्पद ईमेलला उत्तर देऊ नका.",
        "ईमेलमध्ये दिलेल्या कोणत्याही नंबरवर कॉल करू नका.",
        "अनोळखी बिले, पावत्या किंवा सॉफ्टवेअर फाइल्स डाउनलोड करू नका.",
        "ईमेल लिंकमधून OTP, पासवर्ड किंवा कार्ड माहिती भरू नका.",
        "फसवी ईमेल दुसऱ्यांना पाठवू नका."
      ]
    },

    already_clicked: {
      en: "If you already clicked a link or entered details, close the page, turn off the device if needed, and change your passwords immediately. Check the bank, email, and social accounts you use most often. If you entered payment or login details, contact the relevant service at once and report the incident.",
      hi: "अगर आपने पहले ही किसी लिंक पर क्लिक किया है या जानकारी दर्ज की है, तो पेज बंद करें, आवश्यक हो तो डिवाइस बंद करें, और तुरंत पासवर्ड बदलें। अपने प्रमुख बैंक, ईमेल और सोशल अकाउंट की जाँच करें। अगर आपने भुगतान या लॉगिन जानकारी दर्ज की है, तो तुरंत संबंधित सेवा से संपर्क करें और घटना की रिपोर्ट करें।",
      mr: "जर तुम्ही आधीच लिंकवर क्लिक केले असेल किंवा माहिती भरली असेल, तर पेज बंद करा, गरज असल्यास डिव्हाइस बंद करा आणि ताबडतोब पासवर्ड बदला. तुमचे मुख्य बँक, ईमेल आणि सोशल अकाउंट तपासा. जर तुम्ही पेमेंट किंवा लॉगिन माहिती भरली असेल, तर ताबडतोब संबंधित सेवा यांच्याशी संपर्क साधा आणि घटनेची तक्रार करा."
    },

    faq: [
      {
        id: "faq-spot",
        q: { en: "How can I spot a fake email?", hi: "मैं नकली ईमेल कैसे पहचान सकता हूँ?", mr: "नकली ईमेल कसे ओळखावे?" },
        type: "steps",
        a: {
          en: [
            "Check the sender address and the domain name carefully.",
            "Look for urgent words like 'immediately', 'freeze', or 'verification required'.",
            "Open the official website yourself instead of using the email link."
          ],
          hi: [
            "भेजने वाले के पते और डोमेन नाम को ध्यान से देखें।",
            "'तुरंत', 'फ्रीज', 'सत्यापन आवश्यक' जैसी urgent शब्दों पर ध्यान दें।",
            "ईमेल लिंक के बजाय खुद से आधिकारिक वेबसाइट खोलें।"
          ],
          mr: [
            "प्रेषक पत्ता आणि डोमेन नाव काळजीपूर्वक तपासा.",
            "'तात्काळ', 'फ्रीज', 'सत्यापन आवश्यक' अशा तातडीच्या शब्दांकडे लक्ष द्या.",
            "ईमेलमधील लिंकऐवजी स्वतः अधिकृत वेबसाइट उघडा."
          ]
        }
      },
      {
        id: "faq-avoid",
        q: { en: "What should I not do?", hi: "मुझे क्या नहीं करना चाहिए?", mr: "मी काय करू नये?" },
        type: "avoid",
        a: {
          en: [
            "Do not click links or open unexpected attachments.",
            "Do not call numbers given in the email.",
            "Do not enter OTP, password or card details from the link."
          ],
          hi: [
            "लिंक पर क्लिक न करें और अनजान अटैचमेंट न खोलें।",
            "ईमेल में दिए नंबर पर कॉल न करें।",
            "लिंक से OTP, पासवर्ड या कार्ड जानकारी न भरें।"
          ],
          mr: [
            "लिंकवर क्लिक करू नका आणि अनोळखी अटॅचमेंट उघडू नका.",
            "ईमेलमध्ये दिलेल्या नंबरवर कॉल करू नका.",
            "लिंकमधून OTP, पासवर्ड किंवा कार्ड माहिती भरू नका."
          ]
        }
      },
      {
        id: "faq-already-clicked",
        q: { en: "What if I already clicked or entered details?", hi: "अगर मैंने क्लिक किया या जानकारी भर दी तो क्या करूं?", mr: "मी क्लिक केले किंवा माहिती भरली तर काय करावे?" },
        type: "para",
        a: {
          en: "Close the page, change the password from the official site, and check bank and email accounts. Save the email and report it as phishing.",
          hi: "पेज बंद करें, आधिकारिक साइट से पासवर्ड बदलें, और बैंक व ईमेल खाते जांचें। ईमेल संभालें और फिशिंग बताकर रिपोर्ट करें।",
          mr: "पेज बंद करा, अधिकृत साइटवरून पासवर्ड बदला आणि बँक व ईमेल खाती तपासा. ईमेल जपा आणि फिशिंग म्हणून तक्रार करा."
        }
      },
      {
        id: "faq-report",
        q: { en: "Where do I report it?", hi: "मैं इसे कहाँ रिपोर्ट करूँ?", mr: "मला ते कुठे तक्रार करावी?" },
        type: "report",
        a: { en: [], hi: [], mr: [] }
      }
    ],

    report_links: [
      {
        label: { en: "National Cyber Crime Reporting Portal", hi: "राष्ट्रीय साइबर अपराध रिपोर्टिंग पोर्टल", mr: "राष्ट्रीय सायबर गुन्हे तक्रार पोर्टल" },
        description: { en: "Report phishing, fake emails, and account theft attempts.", hi: "फिशिंग, नकली ईमेल और अकाउंट चोरी के प्रयासों की रिपोर्ट करें।", mr: "फिशिंग, बनावट ईमेल आणि खाते चोरीचे प्रयत्न तक्रार करा." },
        url: "https://cybercrime.gov.in",
        pending_verification: false
      },
      {
        label: { en: "Cyber Crime Helpline — 1930", hi: "साइबर क्राइम हेल्पलाइन — 1930", mr: "सायबर क्राइम हेल्पलाइन — 1930" },
        description: { en: "Get guidance on phishing or account abuse complaints.", hi: "फिशिंग या खाते के दुरुपयोग की शिकायतों पर मार्गदर्शन लें।", mr: "फिशिंग किंवा खाते misuse प्रकरणांवर मार्गदर्शन मिळवा." },
        url: "tel:1930",
        pending_verification: false
      },
      {
        label: { en: "Report email as phishing in your mail app", hi: "अपने मेल ऐप में ईमेल को फिशिंग के रूप में रिपोर्ट करें", mr: "तुमच्या मेल अ‍ॅपमध्ये ईमेल फिशिंग म्हणून रिपोर्ट करा" },
        description: { en: "Use the mail app's phishing/report link tool now.", hi: "मेल ऐप के फिशिंग/रिपोर्ट टूल का उपयोग करें।", mr: "मेल अ‍ॅपमधील फिशिंग/रिपोर्ट टूल वापरा." },
        url: null,
        pending_verification: false,
        is_instruction: true
      }
    ]
  },

  "link": {
    id: "link",
    icon: "🔗",
    category: "link",

    title: {
      en: "Malicious Link / Fake Website",
      hi: "खतरनाक लिंक / नकली वेबसाइट",
      mr: "धोकादायक लिंक / बनावट वेबसाइट"
    },

    quick_help: {
      intro: {
        en: "You got a suspicious link. Do these 5 things now:",
        hi: "आपको संदिग्ध लिंक मिली है। अभी ये 5 काम करें:",
        mr: "तुम्हाला संशयास्पद लिंक आली आहे. आत्ता या 5 गोष्टी करा:"
      },
      steps: {
        en: [
          "Do not open the suspicious link.",
          "Check the real domain carefully — look for spelling tricks.",
          "Never enter OTP, password, UPI PIN or card details on an unexpected page.",
          "Open the official website or app yourself if you need to verify.",
          "Delete the message and block or report the sender."
        ],
        hi: [
          "संदिग्ध लिंक न खोलें।",
          "असली डोमेन ध्यान से देखें — स्पेलिंग की चाल पहचानें।",
          "अनजान पेज पर OTP, पासवर्ड, UPI PIN या कार्ड जानकारी कभी न भरें।",
          "जांच करनी हो तो खुद आधिकारिक वेबसाइट या ऐप खोलें।",
          "संदेश हटाएं और भेजने वाले को ब्लॉक या रिपोर्ट करें।"
        ],
        mr: [
          "संशयास्पद लिंक उघडू नका.",
          "खरा डोमेन काळजीपूर्वक तपासा — स्पेलिंगची फसवणूक ओळखा.",
          "अनोळखी पेजवर OTP, पासवर्ड, UPI PIN किंवा कार्ड माहिती कधीही भरू नका.",
          "तपासायचे असेल तर स्वतः अधिकृत वेबसाइट किंवा अ‍ॅप उघडा.",
          "मेसेज हटवा आणि पाठवणाऱ्याला ब्लॉक किंवा रिपोर्ट करा."
        ]
      }
    },

    what_happened: {
      en: "You got a link through SMS, WhatsApp, email or social media. It may promise a reward, warning or urgent update. The page behind it can look real but steal your login and payment details.",
      hi: "आपको SMS, WhatsApp, ईमेल या सोशल मीडिया से एक लिंक मिली। यह इनाम, चेतावनी या जरूरी अपडेट का वादा कर सकती है। इसके पीछे का पेज असली जैसा लग सकता है पर लॉगिन व पेमेंट जानकारी चुरा सकता है।",
      mr: "तुम्हाला SMS, WhatsApp, ईमेल किंवा सोशल मीडियातून एक लिंक आली. ती बक्षीस, इशारा किंवा महत्त्वाच्या अपडेटचे आश्वासन देऊ शकते. त्यामागील पेज खरे वाटू शकते पण लॉगिन व पेमेंट माहिती चोरू शकते."
    },

    red_flags: {
      en: [
        "The link comes from an unknown number, email or new account.",
        "It uses a short link or a domain that almost matches a real brand.",
        "The message creates urgency — verify now, account locked, reward ending.",
        "The page asks for OTP, password, UPI PIN or card details.",
        "The page design looks copied, with spelling or logo mistakes.",
        "You did not expect this link from this sender."
      ],
      hi: [
        "लिंक अनजान नंबर, ईमेल या नए अकाउंट से आई है।",
        "यह शॉर्ट लिंक है या असली ब्रांड जैसा डोमेन है।",
        "संदेश में जल्दी है — अभी जांचें, खाता बंद, इनाम खत्म।",
        "पेज OTP, पासवर्ड, UPI PIN या कार्ड जानकारी मांगता है।",
        "पेज का डिजाइन नकल जैसा है, स्पेलिंग या लोगो में गलती है।",
        "इस भेजने वाले से आपने यह लिंक उम्मीद नहीं की थी।"
      ],
      mr: [
        "लिंक अनोळखी नंबर, ईमेल किंवा नवीन अकाउंटवरून आली आहे.",
        "ती शॉर्ट लिंक आहे किंवा खऱ्या ब्रँडसारखा डोमेन आहे.",
        "मेसेजमध्ये घाई आहे — आत्ता तपासा, खाते बंद, बक्षीस संपत आहे.",
        "पेज OTP, पासवर्ड, UPI PIN किंवा कार्ड माहिती मागते.",
        "पेजचे डिझाइन नक्कल केल्यासारखे आहे, स्पेलिंग किंवा लोगोमध्ये चूक आहे.",
        "या पाठवणाऱ्याकडून तुम्ही ही लिंक अपेक्षित केली नव्हती."
      ]
    },

    what_to_do: {
      en: [
        "Do not open the link, even if it looks official.",
        "Check the domain slowly for spelling tricks and extra words.",
        "Type the official address yourself instead of tapping the link.",
        "If you opened it, close the page and change passwords from the official app.",
        "Save the message screenshot and block or report the sender."
      ],
      hi: [
        "लिंक न खोलें, भले ही वह आधिकारिक लगे।",
        "डोमेन को धीरे-धीरे देखें — स्पेलिंग की चाल और अतिरिक्त शब्द पहचानें।",
        "लिंक दबाने के बजाय आधिकारिक पता खुद टाइप करें।",
        "खोल लिया हो तो पेज बंद करें और आधिकारिक ऐप से पासवर्ड बदलें।",
        "संदेश का स्क्रीनशॉट रखें और भेजने वाले को ब्लॉक या रिपोर्ट करें।"
      ],
      mr: [
        "लिंक उघडू नका, जरी ती अधिकृत वाटत असली तरी.",
        "डोमेन हळूहळू तपासा — स्पेलिंगची फसवणूक आणि जादा शब्द ओळखा.",
        "लिंक दाबण्याऐवजी अधिकृत पत्ता स्वतः टाइप करा.",
        "उघडली असेल तर पेज बंद करा आणि अधिकृत अ‍ॅपमधून पासवर्ड बदला.",
        "मेसेजचा स्क्रीनशॉट ठेवा आणि पाठवणाऱ्याला ब्लॉक किंवा रिपोर्ट करा."
      ]
    },

    what_not_to_do: {
      en: [
        "Do not enter password, OTP, UPI PIN or card details on the linked page.",
        "Do not trust a short link only because it looks harmless.",
        "Do not download files from the suspicious link.",
        "Do not forward the link to others out of curiosity.",
        "Do not log in using the message link."
      ],
      hi: [
        "लिंक वाले पेज पर पासवर्ड, OTP, UPI PIN या कार्ड जानकारी न भरें।",
        "शॉर्ट लिंक को केवल इसलिए सुरक्षित न मानें कि वह साधारण लगता है।",
        "संदिग्ध लिंक से फाइल डाउनलोड न करें।",
        "जिज्ञासा में लिंक दूसरों को न भेजें।",
        "संदेश लिंक से लॉगिन न करें।"
      ],
      mr: [
        "लिंक असलेल्या पेजवर पासवर्ड, OTP, UPI PIN किंवा कार्ड माहिती भरू नका.",
        "शॉर्ट लिंक फक्त साधी दिसते म्हणून सुरक्षित मानू नका.",
        "संशयास्पद लिंकमधून फाइल डाउनलोड करू नका.",
        "कुतूहलाने लिंक दुसऱ्यांना पाठवू नका.",
        "मेसेज लिंकमधून लॉगिन करू नका."
      ]
    },

    already_clicked: {
      en: "Stay calm. Close the page at once and do not enter more details. Change the password from the official website or app, and check bank, email and important accounts. Save the message and screenshots, then report the link as phishing.",
      hi: "शांत रहें। पेज तुरंत बंद करें और और जानकारी न भरें। आधिकारिक वेबसाइट या ऐप से पासवर्ड बदलें, और बैंक, ईमेल व जरूरी खाते जांचें। संदेश और स्क्रीनशॉट रखें, फिर लिंक को फिशिंग बताकर रिपोर्ट करें।",
      mr: "शांत राहा. पेज लगेच बंद करा आणि अधिक माहिती भरू नका. अधिकृत वेबसाइट किंवा अ‍ॅपवरून पासवर्ड बदला आणि बँक, ईमेल व महत्त्वाची खाती तपासा. मेसेज आणि स्क्रीनशॉट ठेवा, मग लिंक फिशिंग म्हणून तक्रार करा."
    },

    faq: [
      {
        id: "faq-url",
        q: { en: "How can I check whether a link is safe?", hi: "लिंक सुरक्षित है या नहीं, यह कैसे जांचूं?", mr: "लिंक सुरक्षित आहे का हे कसे तपासावे?" },
        type: "steps",
        a: {
          en: [
            "Look slowly at the domain for spelling tricks or extra words.",
            "Be careful with short links and almost-right brand names.",
            "Open the official app or website yourself instead of tapping the link."
          ],
          hi: [
            "डोमेन को धीरे-धीरे देखें — स्पेलिंग की चाल या अतिरिक्त शब्द पहचानें।",
            "शॉर्ट लिंक और लगभग सही ब्रांड नामों से सावधान रहें।",
            "लिंक दबाने के बजाय खुद आधिकारिक ऐप या वेबसाइट खोलें।"
          ],
          mr: [
            "डोमेन हळूहळू तपासा — स्पेलिंगची फसवणूक किंवा जादा शब्द ओळखा.",
            "शॉर्ट लिंक आणि जवळपास बरोबर वाटणाऱ्या ब्रँड नावांपासून सावध राहा.",
            "लिंक दाबण्याऐवजी स्वतः अधिकृत अ‍ॅप किंवा वेबसाइट उघडा."
          ]
        }
      },
      {
        id: "faq-avoid",
        q: { en: "What should I avoid?", hi: "मुझे क्या नहीं करना चाहिए?", mr: "मी काय टाळावे?" },
        type: "avoid",
        a: {
          en: [
            "Do not enter OTP, password, UPI PIN or card details on the linked page.",
            "Do not download files from the suspicious link.",
            "Do not forward the link to others."
          ],
          hi: [
            "लिंक वाले पेज पर OTP, पासवर्ड, UPI PIN या कार्ड जानकारी न भरें।",
            "संदिग्ध लिंक से फाइल डाउनलोड न करें।",
            "लिंक दूसरों को न भेजें।"
          ],
          mr: [
            "लिंक असलेल्या पेजवर OTP, पासवर्ड, UPI PIN किंवा कार्ड माहिती भरू नका.",
            "संशयास्पद लिंकमधून फाइल डाउनलोड करू नका.",
            "लिंक दुसऱ्यांना पाठवू नका."
          ]
        }
      },
      {
        id: "faq-already-clicked",
        q: { en: "What if I already opened the link or entered details?", hi: "अगर मैंने लिंक खोल ली या जानकारी भर दी तो क्या करूं?", mr: "मी लिंक उघडली किंवा माहिती भरली तर काय करावे?" },
        type: "para",
        a: {
          en: "Close the page, change the password from the official site, and check bank and email accounts. Save the message and report the link as phishing.",
          hi: "पेज बंद करें, आधिकारिक साइट से पासवर्ड बदलें, और बैंक व ईमेल खाते जांचें। संदेश रखें और लिंक को फिशिंग बताकर रिपोर्ट करें।",
          mr: "पेज बंद करा, अधिकृत साइटवरून पासवर्ड बदला आणि बँक व ईमेल खाती तपासा. मेसेज ठेवा आणि लिंक फिशिंग म्हणून तक्रार करा."
        }
      },
      {
        id: "faq-report",
        q: { en: "Where do I report it?", hi: "मैं इसे कहाँ रिपोर्ट करूँ?", mr: "मला ते कुठे तक्रार करावी?" },
        type: "report",
        a: { en: [], hi: [], mr: [] }
      }
    ],

    report_links: [
      {
        label: { en: "National Cyber Crime Reporting Portal", hi: "राष्ट्रीय साइबर अपराध रिपोर्टिंग पोर्टल", mr: "राष्ट्रीय सायबर गुन्हे तक्रार पोर्टल" },
        description: { en: "Report phishing and fake links that aim to steal information.", hi: "फिशिंग और नकली लिंक की रिपोर्ट करें जो डेटा चोरी का प्रयास करते हैं।", mr: "माहिती चोरीचे प्रयत्न करणारे फिशिंग आणि बनावट लिंक तक्रार करा." },
        url: "https://cybercrime.gov.in",
        pending_verification: false
      },
      {
        label: { en: "Cyber Crime Helpline — 1930", hi: "साइबर क्राइम हेल्पलाइन — 1930", mr: "सायबर क्राइम हेल्पलाइन — 1930" },
        description: { en: "Call for help if you entered a suspicious page or shared credentials.", hi: "अगर आपने संदिग्ध पेज पर जानकारी दर्ज की है तो मदद के लिए कॉल करें।", mr: "जर तुम्ही संशयास्पद पेजवर माहिती भरली असेल, तर मदतीसाठी कॉल करा." },
        url: "tel:1930",
        pending_verification: false
      },
      {
        label: { en: "Check and report the message in your app", hi: "अपने ऐप में संदेश की जाँच करें और रिपोर्ट करें", mr: "तुमच्या अ‍ॅपमध्ये मेसेज तपासा आणि रिपोर्ट करा" },
        description: { en: "Use your platform's block/report option for the sender or link.", hi: "अपने ऐप के ब्लॉक/रिपोर्ट विकल्प का उपयोग करें।", mr: "तुमच्या अ‍ॅपमधील ब्लॉक/रिपोर्ट पर्याय वापरा." },
        url: null,
        pending_verification: false,
        is_instruction: true
      }
    ]
  },

  "upi": {
    id: "upi",
    icon: "💸",
    category: "upi",

    title: {
      en: "UPI / Payment Fraud",
      hi: "UPI / भुगतान धोखाधड़ी",
      mr: "UPI / पेमेंट फसवणूक"
    },

    quick_help: {
      intro: {
        en: "You got a suspicious UPI or payment request. Do these 5 things now:",
        hi: "आपको संदिग्ध UPI या भुगतान अनुरोध मिला है। अभी ये 5 काम करें:",
        mr: "तुम्हाला संशयास्पद UPI किंवा पेमेंट विनंती आली आहे. आत्ता या 5 गोष्टी करा:"
      },
      steps: {
        en: [
          "Stop — do not approve the payment or scan the QR code.",
          "Remember: UPI PIN is needed to send money, not to receive money.",
          "Never share UPI PIN or OTP with anyone.",
          "Verify the person and request on your own through a trusted number or app.",
          "If money is lost, call your bank and 1930 immediately."
        ],
        hi: [
          "रुकें — पेमेंट अप्रूव न करें और QR कोड स्कैन न करें।",
          "याद रखें: UPI PIN पैसे भेजने के लिए होता है, पाने के लिए नहीं।",
          "UPI PIN या OTP किसी से साझा न करें।",
          "भरोसेमंद नंबर या ऐप से खुद व्यक्ति और अनुरोध की जांच करें।",
          "पैसे गए हों तो बैंक और 1930 पर तुरंत कॉल करें।"
        ],
        mr: [
          "थांबा — पेमेंट मंजूर करू नका आणि QR कोड स्कॅन करू नका.",
          "लक्षात ठेवा: UPI PIN पैसे पाठवण्यासाठी लागतो, मिळवण्यासाठी नाही.",
          "UPI PIN किंवा OTP कोणालाही देऊ नका.",
          "विश्वासार्ह नंबर किंवा अ‍ॅपवरून स्वतः व्यक्ती व विनंती तपासा.",
          "पैसे गेले असतील तर बँक आणि 1930 वर लगेच कॉल करा."
        ]
      }
    },

    what_happened: {
      en: "You got a QR code, collect request or payment link for a refund, prize or purchase. You are asked to enter UPI PIN to receive money. Remember, PIN is for sending money, not receiving it.",
      hi: "आपको रिफंड, इनाम या खरीद के लिए QR कोड, कलेक्ट रिक्वेस्ट या पेमेंट लिंक मिली। पैसे पाने के लिए UPI PIN डालने को कहा जाता है। याद रखें, PIN पैसे भेजने के लिए है, पाने के लिए नहीं।",
      mr: "तुम्हाला रिफंड, बक्षीस किंवा खरेदीसाठी QR कोड, कलेक्ट रिक्वेस्ट किंवा पेमेंट लिंक आली. पैसे मिळवण्यासाठी UPI PIN टाकायला सांगितले जाते. लक्षात ठेवा, PIN पैसे पाठवण्यासाठी आहे, मिळवण्यासाठी नाही."
    },

    red_flags: {
      en: [
        "You are asked to scan a QR code just to receive money.",
        "You get a collect request or pay link for a refund or prize.",
        "The caller asks for UPI PIN or OTP to complete the process.",
        "They create urgency — offer ending, account problem, quick refund.",
        "They pretend to be buyer, bank staff, support or relative.",
        "They refuse to meet, verify, or use a normal trusted payment way."
      ],
      hi: [
        "पैसे पाने के लिए QR कोड स्कैन करने को कहा जाता है।",
        "रिफंड या इनाम के लिए कलेक्ट रिक्वेस्ट या पे लिंक आती है।",
        "कॉलर प्रक्रिया पूरी करने के लिए UPI PIN या OTP मांगता है।",
        "वे जल्दी बनाते हैं — ऑफर खत्म, खाते में दिक्कत, तुरंत रिफंड।",
        "वे खरीदार, बैंक स्टाफ, सपोर्ट या रिश्तेदार बनते हैं।",
        "वे मिलने, जांचने या सामान्य भरोसेमंद पेमेंट तरीके से मना करते हैं।"
      ],
      mr: [
        "पैसे मिळवण्यासाठी QR कोड स्कॅन करायला सांगितले जाते.",
        "रिफंड किंवा बक्षीसासाठी कलेक्ट रिक्वेस्ट किंवा पे लिंक येते.",
        "कॉलर प्रक्रिया पूर्ण करण्यासाठी UPI PIN किंवा OTP मागतो.",
        "ते घाई निर्माण करतात — ऑफर संपत आहे, खात्यात अडचण, लगेच रिफंड.",
        "ते खरेदीदार, बँक कर्मचारी, सपोर्ट किंवा नातेवाईक असल्याचे भासवतात.",
        "ते भेटायला, तपासायला किंवा नेहमीच्या विश्वासार्ह पेमेंट पद्धतीला नकार देतात."
      ]
    },

    what_to_do: {
      en: [
        "Reject the request and do not enter UPI PIN.",
        "Check the request details — name, amount and reason — very carefully.",
        "Call the person on a trusted number or check the official app.",
        "Block and report the fake ID or number in your UPI app.",
        "If money is lost, call your bank and 1930 immediately."
      ],
      hi: [
        "अनुरोध अस्वीकार करें और UPI PIN न डालें।",
        "अनुरोध की जानकारी — नाम, राशि और कारण — ध्यान से देखें।",
        "भरोसेमंद नंबर पर कॉल करें या आधिकारिक ऐप में जांचें।",
        "UPI ऐप में नकली ID या नंबर ब्लॉक और रिपोर्ट करें।",
        "पैसे गए हों तो बैंक और 1930 पर तुरंत कॉल करें।"
      ],
      mr: [
        "विनंती नाकारा आणि UPI PIN टाकू नका.",
        "विनंतीची माहिती — नाव, रक्कम आणि कारण — काळजीपूर्वक तपासा.",
        "विश्वासार्ह नंबरवर कॉल करा किंवा अधिकृत अ‍ॅपमध्ये तपासा.",
        "UPI अ‍ॅपमध्ये बनावट ID किंवा नंबर ब्लॉक आणि रिपोर्ट करा.",
        "पैसे गेले असतील तर बँक आणि 1930 वर लगेच कॉल करा."
      ]
    },

    what_not_to_do: {
      en: [
        "Do not scan an unknown QR code to receive money.",
        "Do not approve a collect request without full verification.",
        "Do not share UPI PIN or OTP with anyone.",
        "Do not pay because the caller sounds convincing or urgent.",
        "Do not share screen or install apps for a payment."
      ],
      hi: [
        "पैसे पाने के लिए अनजान QR कोड स्कैन न करें।",
        "पूरी जांच के बिना कलेक्ट रिक्वेस्ट अप्रूव न करें।",
        "UPI PIN या OTP किसी से साझा न करें।",
        "कॉलर के भरोसेमंद या जल्दी वाले अंदाज पर पैसे न दें।",
        "पेमेंट के लिए स्क्रीन शेयर न करें और ऐप इंस्टॉल न करें।"
      ],
      mr: [
        "पैसे मिळवण्यासाठी अनोळखी QR कोड स्कॅन करू नका.",
        "पूर्ण तपासणीशिवाय कलेक्ट रिक्वेस्ट मंजूर करू नका.",
        "UPI PIN किंवा OTP कोणालाही देऊ नका.",
        "कॉलर विश्वासार्ह किंवा घाईत वाटतो म्हणून पैसे देऊ नका.",
        "पेमेंटसाठी स्क्रीन शेअर करू नका आणि अ‍ॅप इंस्टॉल करू नका."
      ]
    },

    already_clicked: {
      en: "Act immediately. Call your bank and UPI app support, and report to 1930. Save transaction ID, screenshots and the scammer number. Do not approve more requests. Change UPI PIN and passwords from the official app.",
      hi: "तुरंत काम करें। बैंक और UPI ऐप सपोर्ट को कॉल करें, और 1930 पर रिपोर्ट करें। ट्रांजेक्शन ID, स्क्रीनशॉट और ठग का नंबर रखें। और अनुरोध अप्रूव न करें। आधिकारिक ऐप से UPI PIN और पासवर्ड बदलें।",
      mr: "लगेच कृती करा. बँक आणि UPI अ‍ॅप सपोर्टला कॉल करा आणि 1930 वर तक्रार करा. ट्रान्झॅक्शन ID, स्क्रीनशॉट आणि फसवणूक करणाऱ्याचा नंबर ठेवा. आणखी विनंत्या मंजूर करू नका. अधिकृत अ‍ॅपमधून UPI PIN आणि पासवर्ड बदला."
    },

    faq: [
      {
        id: "faq-verify",
        q: { en: "How do I check if a UPI request is real?", hi: "UPI रिक्वेस्ट असली है या नहीं, यह कैसे जांचूं?", mr: "UPI विनंती खरी आहे का हे कसे तपासावे?" },
        type: "steps",
        a: {
          en: [
            "Remember: you do not need PIN to receive money.",
            "Check name, amount and reason, and call the person on a trusted number.",
            "Reject unknown requests and block or report the sender."
          ],
          hi: [
            "याद रखें: पैसे पाने के लिए PIN की जरूरत नहीं होती।",
            "नाम, राशि और कारण देखें, और भरोसेमंद नंबर पर कॉल करें।",
            "अनजान अनुरोध अस्वीकार करें और भेजने वाले को ब्लॉक या रिपोर्ट करें।"
          ],
          mr: [
            "लक्षात ठेवा: पैसे मिळवण्यासाठी PIN लागत नाही.",
            "नाव, रक्कम आणि कारण तपासा आणि विश्वासार्ह नंबरवर कॉल करा.",
            "अनोळखी विनंती नाकारा आणि पाठवणाऱ्याला ब्लॉक किंवा रिपोर्ट करा."
          ]
        }
      },
      {
        id: "faq-avoid",
        q: { en: "What should I avoid?", hi: "मुझे क्या नहीं करना चाहिए?", mr: "मी काय टाळावे?" },
        type: "avoid",
        a: {
          en: [
            "Do not scan unknown QR codes to receive money.",
            "Do not share UPI PIN or OTP.",
            "Do not approve collect requests without verification."
          ],
          hi: [
            "पैसे पाने के लिए अनजान QR कोड स्कैन न करें।",
            "UPI PIN या OTP साझा न करें।",
            "बिना जांच कलेक्ट रिक्वेस्ट अप्रूव न करें।"
          ],
          mr: [
            "पैसे मिळवण्यासाठी अनोळखी QR कोड स्कॅन करू नका.",
            "UPI PIN किंवा OTP देऊ नका.",
            "तपासणीशिवाय कलेक्ट रिक्वेस्ट मंजूर करू नका."
          ]
        }
      },
      {
        id: "faq-already-clicked",
        q: { en: "What if I already paid or shared my PIN?", hi: "अगर मैंने पैसे दे दिए या PIN बता दिया तो क्या करूं?", mr: "मी पैसे दिले किंवा PIN सांगितला तर काय करावे?" },
        type: "para",
        a: {
          en: "Call your bank and report to 1930 immediately. Save transaction ID and screenshots. Change UPI PIN from the official app.",
          hi: "बैंक को कॉल करें और तुरंत 1930 पर रिपोर्ट करें। ट्रांजेक्शन ID और स्क्रीनशॉट रखें। आधिकारिक ऐप से UPI PIN बदलें।",
          mr: "बँकेला कॉल करा आणि लगेच 1930 वर तक्रार करा. ट्रान्झॅक्शन ID आणि स्क्रीनशॉट ठेवा. अधिकृत अ‍ॅपमधून UPI PIN बदला."
        }
      },
      {
        id: "faq-report",
        q: { en: "Where do I report UPI fraud?", hi: "UPI धोखाधड़ी की रिपोर्ट कहां करूं?", mr: "UPI फसवणुकीची तक्रार कुठे करावी?" },
        type: "report",
        a: { en: [], hi: [], mr: [] }
      }
    ],

    report_links: [
      {
        label: { en: "National Cyber Crime Reporting Portal", hi: "राष्ट्रीय साइबर अपराध रिपोर्टिंग पोर्टल", mr: "राष्ट्रीय सायबर गुन्हे तक्रार पोर्टल" },
        description: { en: "Report payment fraud or digital payment scams.", hi: "पेमेंट धोखाधड़ी या डिजिटल पेमेंट घोटालों की रिपोर्ट करें।", mr: "पेमेंट फसवणूक किंवा डिजिटल पेमेंट घोटाळ्यांची तक्रार करा." },
        url: "https://cybercrime.gov.in",
        pending_verification: false
      },
      {
        label: { en: "Cyber Crime Helpline — 1930", hi: "साइबर क्राइम हेल्पलाइन — 1930", mr: "सायबर क्राइम हेल्पलाइन — 1930" },
        description: { en: "Call the national helpline for urgent payment scam support.", hi: "पेमेंट स्कैम के लिए राष्ट्रीय हेल्पलाइन पर तुरंत कॉल करें।", mr: "पेमेंट स्कॅमसाठी राष्ट्रीय हेल्पलाइनवर ताबडतोब कॉल करा." },
        url: "tel:1930",
        pending_verification: false
      },
      {
        label: { en: "Check your bank app and UPI app for block/report options", hi: "अपने बैंक ऐप और UPI ऐप में ब्लॉक/रिपोर्ट विकल्प देखें", mr: "तुमच्या बँक अ‍ॅप आणि UPI अ‍ॅपमध्ये ब्लॉक/रिपोर्ट पर्याय तपासा" },
        description: { en: "Use the official app tools to block the scammer and secure your account.", hi: "अधिकृत ऐप टूल का उपयोग करके फसवणूककर्ता को ब्लॉक करें और खाते को सुरक्षित करें।", mr: "अधिकृत अ‍ॅप टूल वापरून फसवणूक करणाऱ्याला ब्लॉक करा आणि खाते सुरक्षित करा." },
        url: null,
        pending_verification: false,
        is_instruction: true
      }
    ]
  },

  "courier": {
    id: "courier",
    icon: "📦",
    category: "courier",

    title: {
      en: "Courier / Parcel Scam",
      hi: "कूरियर / पार्सल घोटाला",
      mr: "कुरिअर / पार्सल घोटाळा"
    },

    quick_help: {
      intro: {
        en: "You got a suspicious parcel message. Do these 5 things now:",
        hi: "आपको संदिग्ध पार्सल संदेश मिला है। अभी ये 5 काम करें:",
        mr: "तुम्हाला संशयास्पद पार्सल मेसेज आला आहे. आत्ता या 5 गोष्टी करा:"
      },
      steps: {
        en: [
          "Stop — do not click tracking or payment links in the message.",
          "Do not panic or pay because of threats.",
          "Do not share OTP, Aadhaar, bank or other sensitive details.",
          "Verify the parcel only through the courier official website, app or contact.",
          "Save the message and block or report the sender."
        ],
        hi: [
          "रुकें — संदेश में ट्रैकिंग या पेमेंट लिंक पर क्लिक न करें।",
          "धमकी से घबराकर पैसे न दें।",
          "OTP, आधार, बैंक या अन्य संवेदनशील जानकारी न दें।",
          "पार्सल की जांच केवल कूरियर की आधिकारिक वेबसाइट, ऐप या संपर्क से करें।",
          "संदेश संभालें और भेजने वाले को ब्लॉक या रिपोर्ट करें।"
        ],
        mr: [
          "थांबा — मेसेजमधील ट्रॅकिंग किंवा पेमेंट लिंकवर क्लिक करू नका.",
          "धमकीमुळे घाबरून पैसे देऊ नका.",
          "OTP, आधार, बँक किंवा इतर संवेदनशील माहिती देऊ नका.",
          "पार्सलची तपासणी फक्त कुरिअरच्या अधिकृत वेबसाइट, अ‍ॅप किंवा संपर्कावरून करा.",
          "मेसेज जपा आणि पाठवणाऱ्याला ब्लॉक किंवा रिपोर्ट करा."
        ]
      }
    },

    what_happened: {
      en: "You got a message or call saying your parcel is held, needs a fee, or has illegal items. The caller may act like courier, customs or police to scare you into paying fast.",
      hi: "आपको संदेश या कॉल आया कि आपका पार्सल रोका गया है, फीस चाहिए, या उसमें गैरकानूनी सामान है। कॉलर कूरियर, कस्टम या पुलिस बनकर जल्दी पैसे देने के लिए डरा सकता है।",
      mr: "तुम्हाला मेसेज किंवा कॉल आला की तुमचे पार्सल अडवले आहे, फी हवी आहे किंवा त्यात बेकायदेशीर वस्तू आहेत. कॉलर कुरिअर, कस्टम किंवा पोलीस असल्याचे भासवून लवकर पैसे देण्यासाठी घाबरवू शकतो."
    },

    red_flags: {
      en: [
        "The message says pay now or the parcel will be blocked or destroyed.",
        "It asks you to click a payment link or share OTP.",
        "The caller claims courier, customs, police or legal action.",
        "They threaten arrest, fine or case if you do not pay.",
        "They ask for Aadhaar, bank details or remote-access apps.",
        "The tracking number or brand cannot be verified on the official site."
      ],
      hi: [
        "संदेश कहता है अभी पैसे दो वरना पार्सल ब्लॉक या नष्ट हो जाएगा।",
        "यह पेमेंट लिंक पर क्लिक करने या OTP देने को कहता है।",
        "कॉलर कूरियर, कस्टम, पुलिस या कानूनी कार्रवाई की बात करता है।",
        "वे पैसे न देने पर गिरफ्तारी, जुर्माना या केस की धमकी देते हैं।",
        "वे आधार, बैंक जानकारी या रिमोट-एक्सेस ऐप मांगते हैं।",
        "ट्रैकिंग नंबर या ब्रांड आधिकारिक साइट पर नहीं मिलता।"
      ],
      mr: [
        "मेसेज सांगतो आत्ता पैसे द्या नाहीतर पार्सल ब्लॉक किंवा नष्ट होईल.",
        "ते पेमेंट लिंकवर क्लिक करायला किंवा OTP द्यायला सांगते.",
        "कॉलर कुरिअर, कस्टम, पोलीस किंवा कायदेशीर कारवाईबद्दल बोलतो.",
        "पैसे न दिल्यास अटक, दंड किंवा केसची धमकी देतात.",
        "ते आधार, बँक माहिती किंवा रिमोट-एक्सेस अ‍ॅप मागतात.",
        "ट्रॅकिंग नंबर किंवा ब्रँड अधिकृत साइटवर सापडत नाही."
      ]
    },

    what_to_do: {
      en: [
        "Do not click links or pay before checking the parcel on the official site.",
        "Enter the tracking number yourself in the official app or website.",
        "Call the official courier contact taken from the app or website.",
        "Save the message, block the sender and report the scam.",
        "If you paid, call your bank and report immediately."
      ],
      hi: [
        "आधिकारिक साइट पर पार्सल देखे बिना लिंक न खोलें और पैसे न दें।",
        "ट्रैकिंग नंबर खुद आधिकारिक ऐप या वेबसाइट में डालें।",
        "ऐप या वेबसाइट से लिए आधिकारिक नंबर पर कॉल करें।",
        "संदेश संभालें, भेजने वाले को ब्लॉक करें और ठगी रिपोर्ट करें।",
        "पैसे दिए हों तो बैंक को कॉल करें और तुरंत रिपोर्ट करें।"
      ],
      mr: [
        "अधिकृत साइटवर पार्सल तपासल्याशिवाय लिंक उघडू नका आणि पैसे देऊ नका.",
        "ट्रॅकिंग नंबर स्वतः अधिकृत अ‍ॅप किंवा वेबसाइटमध्ये टाका.",
        "अ‍ॅप किंवा वेबसाइटवरून घेतलेल्या अधिकृत नंबरवर कॉल करा.",
        "मेसेज जपा, पाठवणाऱ्याला ब्लॉक करा आणि फसवणूक तक्रार करा.",
        "पैसे दिले असतील तर बँकेला कॉल करा आणि लगेच तक्रार करा."
      ]
    },

    what_not_to_do: {
      en: [
        "Do not panic or pay because of threats or legal words.",
        "Do not share OTP, Aadhaar, bank details or sensitive information.",
        "Do not install remote-access apps because the caller asks.",
        "Do not click unknown tracking or payment links.",
        "Do not continue chatting with the scammer."
      ],
      hi: [
        "धमकी या कानूनी शब्दों से घबराकर पैसे न दें।",
        "OTP, आधार, बैंक जानकारी या संवेदनशील जानकारी न दें।",
        "कॉलर के कहने पर रिमोट-एक्सेस ऐप इंस्टॉल न करें।",
        "अनजान ट्रैकिंग या पेमेंट लिंक पर क्लिक न करें।",
        "ठग से चैट जारी न रखें।"
      ],
      mr: [
        "धमकी किंवा कायदेशीर शब्दांमुळे घाबरून पैसे देऊ नका.",
        "OTP, आधार, बँक माहिती किंवा संवेदनशील माहिती देऊ नका.",
        "कॉलर सांगतो म्हणून रिमोट-एक्सेस अ‍ॅप इंस्टॉल करू नका.",
        "अनोळखी ट्रॅकिंग किंवा पेमेंट लिंकवर क्लिक करू नका.",
        "फसवणूक करणाऱ्याशी चॅट सुरू ठेवू नका."
      ]
    },

    already_clicked: {
      en: "If you clicked or paid, immediately contact the courier company's official number and your bank. Freeze your card if needed, save the message and screenshots, and report the case. Do not continue the chat or send more details.",
      hi: "अगर आपने क्लिक किया या भुगतान किया है, तो तुरंत कूरियर कंपनी के आधिकारिक नंबर और बैंक से संपर्क करें। आवश्यक हो तो कार्ड फ्रीज करें, संदेश और स्क्रीनशॉट सेव करें, और केस रिपोर्ट करें। चैट जारी न रखें या और जानकारी न भेजें।",
      mr: "जर तुम्ही क्लिक केले किंवा पैसे दिले असतील, तर ताबडतोब कुरिअर कंपनीच्या अधिकृत क्रमांकावर आणि बँकेशी संपर्क साधा. गरज असल्यास कार्ड फ्रीज करा, मेसेज आणि स्क्रीनशॉट सुरक्षित ठेवा आणि प्रकरण तक्रार करा. चॅट सुरू ठेवू नका किंवा आणखी माहिती पाठवू नका."
    },

    faq: [
      {
        id: "faq-verify",
        q: { en: "How do I verify a parcel message?", hi: "मैं पार्सल संदेश को कैसे सत्यापित करूँ?", mr: "पार्सल मेसेज कसे तपासावे?" },
        type: "steps",
        a: {
          en: [
            "Check the tracking number against the official courier app or website.",
            "Call the official courier helpline only from the app or website.",
            "Ignore any message that asks for immediate cash or OTP."
          ],
          hi: [
            "ट्रैकिंग नंबर की पुष्टि आधिकारिक कूरियर ऐप या वेबसाइट से करें।",
            "केवल ऐप या वेबसाइट से दिए गए आधिकारिक हेल्पलाइन नंबर पर कॉल करें।",
            "किसी भी ऐसे संदेश को न देखें जो तुरंत नकदी या OTP माँगे।"
          ],
          mr: [
            "ट्रॅकिंग नंबरची पडताळणी अधिकृत कुरिअर अ‍ॅप किंवा वेबसाइटवरून करा.",
            "फक्त अ‍ॅप किंवा वेबसाइटवरून दिलेल्या अधिकृत हेल्पलाइन क्रमांकावर कॉल करा.",
            "कोणताही मेसेज दुर्लक्षित करा जो ताबडतोब रोख किंवा OTP मागतो."
          ]
        }
      },
      {
        id: "faq-avoid",
        q: { en: "What should I avoid?", hi: "मुझे क्या नहीं करना चाहिए?", mr: "मी काय टाळावे?" },
        type: "avoid",
        a: {
          en: [
            "Do not pay because of threats or urgent legal words.",
            "Do not share OTP, Aadhaar or bank details.",
            "Do not install apps or click unknown links."
          ],
          hi: [
            "धमकी या जल्दी वाले कानूनी शब्दों पर पैसे न दें।",
            "OTP, आधार या बैंक जानकारी न दें।",
            "ऐप इंस्टॉल न करें और अनजान लिंक न खोलें।"
          ],
          mr: [
            "धमकी किंवा घाईच्या कायदेशीर शब्दांमुळे पैसे देऊ नका.",
            "OTP, आधार किंवा बँक माहिती देऊ नका.",
            "अ‍ॅप इंस्टॉल करू नका आणि अनोळखी लिंक उघडू नका."
          ]
        }
      },
      {
        id: "faq-already-clicked",
        q: { en: "What if I already clicked or paid?", hi: "अगर मैंने क्लिक किया या पैसे दे दिए तो क्या करूं?", mr: "मी क्लिक केले किंवा पैसे दिले तर काय करावे?" },
        type: "para",
        a: {
          en: "Stop chatting, save the message and screenshots, call your bank, and report on cybercrime.gov.in. Call 1930 if money was lost.",
          hi: "चैट बंद करें, संदेश और स्क्रीनशॉट रखें, बैंक को कॉल करें, और cybercrime.gov.in पर रिपोर्ट करें। पैसे गए हों तो 1930 पर कॉल करें।",
          mr: "चॅट थांबवा, मेसेज आणि स्क्रीनशॉट ठेवा, बँकेला कॉल करा आणि cybercrime.gov.in वर तक्रार करा. पैसे गेले असतील तर 1930 वर कॉल करा."
        }
      },
      {
        id: "faq-report",
        q: { en: "Where do I report it?", hi: "मैं इसे कहाँ रिपोर्ट करूँ?", mr: "मला ते कुठे तक्रार करावी?" },
        type: "report",
        a: { en: [], hi: [], mr: [] }
      }
    ],

    report_links: [
      {
        label: { en: "National Cyber Crime Reporting Portal", hi: "राष्ट्रीय साइबर अपराध रिपोर्टिंग पोर्टल", mr: "राष्ट्रीय सायबर गुन्हे तक्रार पोर्टल" },
        description: { en: "Report parcel, courier, and fake delivery scams.", hi: "पार्सल, कूरियर और नकली डिलीवरी घोटालों की रिपोर्ट करें।", mr: "पार्सल, कुरिअर आणि बनावट डिलिव्हरी घोटाळ्यांची तक्रार करा." },
        url: "https://cybercrime.gov.in",
        pending_verification: false
      },
      {
        label: { en: "Cyber Crime Helpline — 1930", hi: "साइबर क्राइम हेल्पलाइन — 1930", mr: "सायबर क्राइम हेल्पलाइन — 1930" },
        description: { en: "Call the helpline for payment and parcel scam complaints.", hi: "पेमेंट और पार्सल स्कैम की शिकायतों के लिए हेल्पलाइन पर कॉल करें।", mr: "पेमेंट आणि पार्सल स्कॅमची तक्रारसाठी हेल्पलाइनवर कॉल करा." },
        url: "tel:1930",
        pending_verification: false
      },
      {
        label: { en: "Use the courier app's official support page", hi: "कूरियर ऐप की आधिकारिक सहायता पेज का उपयोग करें", mr: "कुरिअर अ‍ॅपची अधिकृत सपोर्ट पेज वापरा" },
        description: { en: "Use the official support section to verify your parcel.", hi: "अपने पार्सल की पुष्टि के लिए आधिकारिक सहायता सेक्शन का उपयोग करें।", mr: "तुमच्या पार्सलची पुष्टीसाठी अधिकृत सपोर्ट सेक्शन वापरा." },
        url: null,
        pending_verification: false,
        is_instruction: true
      }
    ]
  },

  "social": {
    id: "social",
    icon: "📱",
    category: "social",

    title: {
      en: "Social Media Scam / Fake Profile",
      hi: "सोशल मीडिया ठगी / नकली प्रोफाइल",
      mr: "सोशल मीडिया फसवणूक / बनावट प्रोफाइल"
    },

    quick_help: {
      intro: {
        en: "You got a suspicious social media message. Do these 5 things now:",
        hi: "आपको संदिग्ध सोशल मीडिया संदेश मिला है। अभी ये 5 काम करें:",
        mr: "तुम्हाला संशयास्पद सोशल मीडिया मेसेज आला आहे. आत्ता या 5 गोष्टी करा:"
      },
      steps: {
        en: [
          "Stop — do not reply, accept the request, or click links.",
          "Verify the identity through another trusted channel.",
          "Do not send money or sensitive information.",
          "Never share OTP or login codes.",
          "Block and report the suspicious account in the app."
        ],
        hi: [
          "रुकें — जवाब न दें, रिक्वेस्ट स्वीकार न करें, लिंक न खोलें।",
          "दूसरे भरोसेमंद माध्यम से पहचान की जांच करें।",
          "पैसे या संवेदनशील जानकारी न भेजें।",
          "OTP या लॉगिन कोड कभी साझा न करें।",
          "ऐप में संदिग्ध अकाउंट ब्लॉक और रिपोर्ट करें।"
        ],
        mr: [
          "थांबा — उत्तर देऊ नका, रिक्वेस्ट स्वीकार करू नका, लिंक उघडू नका.",
          "दुसऱ्या विश्वासार्ह माध्यमातून ओळख तपासा.",
          "पैसे किंवा संवेदनशील माहिती पाठवू नका.",
          "OTP किंवा लॉगिन कोड कधीही देऊ नका.",
          "अ‍ॅपमध्ये संशयास्पद अकाउंट ब्लॉक आणि रिपोर्ट करा."
        ]
      }
    },

    what_happened: {
      en: "Someone reached out through social media with a fake friend request, job offer, investment tip, or threatening message. They may promise quick money, ask for personal details, or push you to click a link or send payment. These scams often look convincing because the account may look like a real person or brand.",
      hi: "किसी ने सोशल मीडिया पर नकली फ्रेंड रिक्वेस्ट, नौकरी का ऑफर, निवेश टिप्स, या धमकी भरा संदेश भेजा। वे जल्दी पैसे का वादा कर सकते हैं, निजी जानकारी मांग सकते हैं, या आपको लिंक पर क्लिक या भुगतान करने के लिए मजबूर कर सकते हैं। ये घोटाले अक्सर तभी भरोसेमंद लगते हैं जब अकाउंट किसी वास्तविक व्यक्ति या ब्रांड जैसा दिखता है।",
      mr: "कोणीतरी सोशल मीडियावर बनावट फ्रेंड रिक्वेस्ट, नोकरीची ऑफर, गुंतवणूकीचा सल्ला किंवा धमकी देणारा मेसेज पाठवतो. ते लगेच पैसे देण्याचे वचन देऊ शकतात, वैयक्तिक माहिती मागू शकतात किंवा तुम्हाला लिंकवर क्लिक करण्यास किंवा पैसे पाठवण्यास दबाव देऊ शकतात. हे घोटाळे बहुतेकदा विश्वासार्ह वाटतात कारण खाते वास्तविक व्यक्ती किंवा ब्रँडसारखे दिसते."
    },

    red_flags: {
      en: [
        "The profile is new, has few posts or followers, or copies a known person.",
        "They offer quick jobs, investments, prizes or urgent support.",
        "They ask for money, OTP, login codes or personal photos and details.",
        "They pressure you to act fast and keep it secret.",
        "They send links or ask you to move to another app quickly.",
        "The support account is not listed on the official website or app."
      ],
      hi: [
        "प्रोफाइल नई है, पोस्ट या फॉलोअर कम हैं, या जानी-पहचानी व्यक्ति की नकल है।",
        "वे जल्दी नौकरी, निवेश, इनाम या तुरंत सपोर्ट का वादा करते हैं।",
        "वे पैसे, OTP, लॉगिन कोड या निजी फोटो व जानकारी मांगते हैं।",
        "वे जल्दी करने और बात छिपाने का दबाव बनाते हैं।",
        "वे लिंक भेजते हैं या जल्दी दूसरे ऐप पर जाने को कहते हैं।",
        "सपोर्ट अकाउंट आधिकारिक वेबसाइट या ऐप में नहीं मिलता।"
      ],
      mr: [
        "प्रोफाइल नवीन आहे, पोस्ट किंवा फॉलोअर कमी आहेत किंवा ओळखीच्या व्यक्तीची नक्कल आहे।",
        "ते लगेच नोकरी, गुंतवणूक, बक्षीस किंवा तात्काळ सपोर्टचे आश्वासन देतात।",
        "ते पैसे, OTP, लॉगिन कोड किंवा खाजगी फोटो व माहिती मागतात।",
        "ते घाई करायला व गोष्ट लपवायला दबाव टाकतात।",
        "ते लिंक पाठवतात किंवा लवकर दुसऱ्या अ‍ॅपवर जायला सांगतात।",
        "सपोर्ट अकाउंट अधिकृत वेबसाइट किंवा अ‍ॅपमध्ये सापडत नाही।"
      ]
    },

    what_to_do: {
      en: [
        "Verify the person through another trusted channel first.",
        "Do not send money or share sensitive information.",
        "Never share OTP or login codes.",
        "Block and report the suspicious account in the app.",
        "If needed, make your account private and secure login."
      ],
      hi: [
        "पहले दूसरे भरोसेमंद माध्यम से व्यक्ति की जांच करें।",
        "पैसे या संवेदनशील जानकारी न भेजें।",
        "OTP या लॉगिन कोड कभी साझा न करें।",
        "ऐप में संदिग्ध अकाउंट ब्लॉक और रिपोर्ट करें।",
        "जरूरत हो तो अकाउंट प्राइवेट करें और लॉगिन सुरक्षित करें।"
      ],
      mr: [
        "आधी दुसऱ्या विश्वासार्ह माध्यमातून व्यक्तीची खात्री करा.",
        "पैसे किंवा संवेदनशील माहिती पाठवू नका.",
        "OTP किंवा लॉगिन कोड कधीही देऊ नका.",
        "अ‍ॅपमध्ये संशयास्पद अकाउंट ब्लॉक आणि रिपोर्ट करा.",
        "गरज असल्यास अकाउंट प्रायव्हेट करा आणि लॉगिन सुरक्षित करा."
      ]
    },

    what_not_to_do: {
      en: [
        "Do not send money to an unverified job, investment or support contact.",
        "Do not share OTP, login codes or personal details.",
        "Do not click suspicious links in messages or comments.",
        "Do not negotiate with threatening accounts.",
        "Do not share private photos or videos."
      ],
      hi: [
        "बिना जांच नौकरी, निवेश या सपोर्ट संपर्क को पैसे न भेजें।",
        "OTP, लॉगिन कोड या निजी जानकारी साझा न करें।",
        "संदेश या कमेंट में संदिग्ध लिंक न खोलें।",
        "धमकी वाले अकाउंट से बातचीत न करें।",
        "निजी फोटो या वीडियो साझा न करें।"
      ],
      mr: [
        "तपासणीशिवाय नोकरी, गुंतवणूक किंवा सपोर्ट संपर्काला पैसे पाठवू नका.",
        "OTP, लॉगिन कोड किंवा खाजगी माहिती देऊ नका.",
        "मेसेज किंवा कमेंटमधील संशयास्पद लिंक उघडू नका.",
        "धमकी देणाऱ्या अकाउंटशी चर्चा करू नका.",
        "खाजगी फोटो किंवा व्हिडिओ शेअर करू नका."
      ]
    },

    already_clicked: {
      en: "If you already clicked a link, accepted a fake request, or shared details, close the page, change relevant passwords, and check your bank or social accounts for unusual activity. Block and report the account, then save screenshots of the profile and messages.",
      hi: "अगर आपने पहले ही लिंक पर क्लिक किया है, नकली रिक्वेस्ट स्वीकार की है, या जानकारी साझा की है, तो पेज बंद करें, संबंधित पासवर्ड बदलें और अपने बैंक या सोशल अकाउंट में असामान्य गतिविधि देखें। अकाउंट को ब्लॉक और रिपोर्ट करें, फिर प्रोफ़ाइल और संदेशों का स्क्रीनशॉट सेव करें।",
      mr: "जर तुम्ही आधीच लिंकवर क्लिक केले असेल, बनावट रिक्वेस्ट स्वीकार केली असेल किंवा माहिती शेअर केली असेल, तर पेज बंद करा, संबंधित पासवर्ड बदला आणि तुमच्या बँक किंवा सोशल अकाउंटमध्ये असामान्य हालचाली तपासा. अकाउंट ब्लॉक करा आणि रिपोर्ट करा, नंतर प्रोफाइल आणि मेसेजचे स्क्रीनशॉट सेव्ह करा."
    },

    faq: [
      {
        id: "faq-check",
        q: { en: "How can I verify a social media account?", hi: "सोशल मीडिया अकाउंट की जांच कैसे करूं?", mr: "सोशल मीडिया अकाउंट कसे तपासावे?" },
        type: "steps",
        a: {
          en: [
            "Check old posts, followers and official links for the real person or brand.",
            "Contact the person through a known trusted number or official page.",
            "Do not send money or codes before you are fully sure."
          ],
          hi: [
            "असली व्यक्ति या ब्रांड के पुराने पोस्ट, फॉलोअर और आधिकारिक लिंक देखें।",
            "जाने-पहचाने भरोसेमंद नंबर या आधिकारिक पेज से संपर्क करें।",
            "पूरी तरह पक्का होने से पहले पैसे या कोड न भेजें।"
          ],
          mr: [
            "खऱ्या व्यक्ती किंवा ब्रँडचे जुने पोस्ट, फॉलोअर आणि अधिकृत लिंक तपासा.",
            "माहीत असलेल्या विश्वासार्ह नंबर किंवा अधिकृत पेजवरून संपर्क करा.",
            "पूर्ण खात्री होईपर्यंत पैसे किंवा कोड पाठवू नका."
          ]
        }
      },
      {
        id: "faq-avoid",
        q: { en: "What should I avoid?", hi: "मुझे क्या नहीं करना चाहिए?", mr: "मी काय टाळावे?" },
        type: "avoid",
        a: {
          en: [
            "Do not send money or share OTP and login codes.",
            "Do not click suspicious links in messages.",
            "Do not negotiate with threatening accounts."
          ],
          hi: [
            "पैसे न भेजें और OTP व लॉगिन कोड साझा न करें।",
            "संदेश में संदिग्ध लिंक न खोलें।",
            "धमकी वाले अकाउंट से बातचीत न करें।"
          ],
          mr: [
            "पैसे पाठवू नका आणि OTP व लॉगिन कोड देऊ नका.",
            "मेसेजमधील संशयास्पद लिंक उघडू नका.",
            "धमकी देणाऱ्या अकाउंटशी चर्चा करू नका."
          ]
        }
      },
      {
        id: "faq-already-clicked",
        q: { en: "What if I already sent money or shared details?", hi: "अगर मैंने पैसे भेज दिए या जानकारी दे दी तो क्या करूं?", mr: "मी पैसे पाठवले किंवा माहिती दिली तर काय करावे?" },
        type: "para",
        a: {
          en: "Stop contact, save screenshots, secure your account, and report the profile. If money was lost, inform your bank and report to 1930 and cybercrime.gov.in.",
          hi: "संपर्क बंद करें, स्क्रीनशॉट रखें, अकाउंट सुरक्षित करें, और प्रोफाइल रिपोर्ट करें। पैसे गए हों तो बैंक को बताएं और 1930 व cybercrime.gov.in पर रिपोर्ट करें।",
          mr: "संपर्क थांबवा, स्क्रीनशॉट ठेवा, अकाउंट सुरक्षित करा आणि प्रोफाइल रिपोर्ट करा. पैसे गेले असतील तर बँकेला कळवा आणि 1930 व cybercrime.gov.in वर तक्रार करा."
        }
      },
      {
        id: "faq-report",
        q: { en: "Where do I report it?", hi: "मैं इसे कहाँ रिपोर्ट करूँ?", mr: "मला ते कुठे तक्रार करावी?" },
        type: "report",
        a: { en: [], hi: [], mr: [] }
      }
    ],

    report_links: [
      {
        label: { en: "National Cyber Crime Reporting Portal", hi: "राष्ट्रीय साइबर अपराध रिपोर्टिंग पोर्टल", mr: "राष्ट्रीय सायबर गुन्हे तक्रार पोर्टल" },
        description: { en: "Report fake social media accounts, scams, and blackmail attempts.", hi: "नकली सोशल मीडिया अकाउंट, घोटाले और ब्लैकमेल की रिपोर्ट करें।", mr: "बनावट सोशल मीडिया अकाउंट, घोटाळे आणि ब्लॅकमेलची तक्रार करा." },
        url: "https://cybercrime.gov.in",
        pending_verification: false
      },
      {
        label: { en: "Cyber Crime Helpline — 1930", hi: "साइबर क्राइम हेल्पलाइन — 1930", mr: "सायबर क्राइम हेल्पलाइन — 1930" },
        description: { en: "Call for help with online blackmail or fraud messages.", hi: "ऑनलाइन ब्लैकमेल या धोखाधड़ी संदेशों के लिए सहायता लें।", mr: "ऑनलाइन ब्लॅकमेल किंवा फसवणूकी मेसेजसाठी मदत घ्या." },
        url: "tel:1930",
        pending_verification: false
      },
      {
        label: { en: "Use platform report and block tools", hi: "प्लेटफॉर्म के रिपोर्ट और ब्लॉक टूल्स का उपयोग करें", mr: "प्लॅटफॉर्मचे रिपोर्ट आणि ब्लॉक टूल्स वापरा" },
        description: { en: "Block and report fake accounts directly inside the app.", hi: "अकाउंट को ऐप में ही ब्लॉक और रिपोर्ट करें।", mr: "अकाउंट अ‍ॅपमध्येच ब्लॉक आणि रिपोर्ट करा." },
        url: null,
        pending_verification: false,
        is_instruction: true
      }
    ]
  },

  "deepfake": {
    id: "deepfake",
    icon: "🤖",
    category: "deepfake",

    title: {
      en: "AI / Deepfake Scam",
      hi: "AI / डीपफेक ठगी",
      mr: "AI / डीपफेक फसवणूक"
    },

    quick_help: {
      intro: {
        en: "You got a suspicious AI voice, video or photo. Do these 5 things now:",
        hi: "आपको संदिग्ध AI आवाज, वीडियो या फोटो मिला है। अभी ये 5 काम करें:",
        mr: "तुम्हाला संशयास्पद AI आवाज, व्हिडिओ किंवा फोटो आला आहे. आत्ता या 5 गोष्टी करा:"
      },
      steps: {
        en: [
          "Stop — a voice or video alone does not prove identity.",
          "Verify through a trusted channel or known contact number.",
          "Do not send money based only on a voice or video request.",
          "Save the suspicious message as evidence.",
          "Do not forward suspicious content to others."
        ],
        hi: [
          "रुकें — केवल आवाज या वीडियो पहचान साबित नहीं करता।",
          "भरोसेमंद माध्यम या जाने-पहचाने नंबर से जांच करें।",
          "केवल आवाज या वीडियो अनुरोध पर पैसे न भेजें।",
          "संदिग्ध संदेश सबूत के तौर पर संभालें।",
          "संदिग्ध सामग्री दूसरों को न भेजें।"
        ],
        mr: [
          "थांबा — केवळ आवाज किंवा व्हिडिओ ओळख सिद्ध करत नाही.",
          "विश्वासार्ह माध्यम किंवा माहीत असलेल्या नंबरवरून तपासा.",
          "फक्त आवाज किंवा व्हिडिओ विनंतीवर पैसे पाठवू नका.",
          "संशयास्पद मेसेज पुरावा म्हणून जपा.",
          "संशयास्पद मजकूर दुसऱ्यांना पाठवू नका."
        ]
      }
    },

    what_happened: {
      en: "You got a fake voice, video or photo that looks like someone you know. It may ask for money or secret codes and push you to act fast. AI can copy voice and face, so it can feel very real.",
      hi: "आपको नकली आवाज, वीडियो या फोटो मिला जो किसी परिचित जैसा लगता है। यह पैसे या गुप्त कोड मांग सकता है और जल्दी करने का दबाव बना सकता है। AI आवाज और चेहरा नकल कर सकता है, इसलिए यह बहुत असली लग सकता है।",
      mr: "तुम्हाला बनावट आवाज, व्हिडिओ किंवा फोटो आला जो ओळखीच्या व्यक्तीसारखा वाटतो. तो पैसे किंवा गुप्त कोड मागू शकतो आणि घाई करायला लावू शकतो. AI आवाज आणि चेहरा नक्कल करू शकते, त्यामुळे ते खूप खरे वाटू शकते."
    },

    red_flags: {
      en: [
        "The voice or video looks like someone you know but came from a new number.",
        "It asks for money, OTP, passwords or secret codes urgently.",
        "The audio has strange pauses, flat tone, or mismatched lips.",
        "It pressures you to act fast and not call anyone else.",
        "The photo or video looks edited, blurry or unnatural.",
        "The message cannot be confirmed by the real person directly."
      ],
      hi: [
        "आवाज या वीडियो किसी परिचित जैसा है पर नए नंबर से आया है।",
        "यह जल्दी पैसे, OTP, पासवर्ड या गुप्त कोड मांगता है।",
        "ऑडियो में अजीब ठहराव, सपाट आवाज, या होंठ मेल नहीं खाते।",
        "यह जल्दी करने और किसी और को कॉल न करने का दबाव बनाता है।",
        "फोटो या वीडियो एडिटेड, धुंधला या अप्राकृतिक लगता है।",
        "संदेश की पुष्टि असली व्यक्ति से सीधे नहीं हो पाती।"
      ],
      mr: [
        "आवाज किंवा व्हिडिओ ओळखीच्या व्यक्तीसारखा आहे पण नवीन नंबरवरून आला आहे.",
        "तो घाईत पैसे, OTP, पासवर्ड किंवा गुप्त कोड मागतो.",
        "ऑडिओमध्ये विचित्र थांबे, सपाट आवाज किंवा ओठ जुळत नाहीत.",
        "तो घाई करायला व दुसऱ्याला कॉल न करायला दबाव टाकतो.",
        "फोटो किंवा व्हिडिओ एडिटेड, धूसर किंवा अनैसर्गिक वाटतो.",
        "मेसेजची खात्री खऱ्या व्यक्तीकडून थेट होत नाही."
      ]
    },

    what_to_do: {
      en: [
        "Remember: voice or video alone does not prove identity.",
        "Call the real person on a known trusted number.",
        "Save the suspicious message as evidence.",
        "Block and report the fake account or number.",
        "If money or threats are involved, report immediately."
      ],
      hi: [
        "याद रखें: केवल आवाज या वीडियो पहचान साबित नहीं करता।",
        "जाने-पहचाने भरोसेमंद नंबर पर असली व्यक्ति को कॉल करें।",
        "संदिग्ध संदेश सबूत के तौर पर संभालें।",
        "नकली अकाउंट या नंबर ब्लॉक और रिपोर्ट करें।",
        "पैसे या धमकी हो तो तुरंत रिपोर्ट करें।"
      ],
      mr: [
        "लक्षात ठेवा: केवळ आवाज किंवा व्हिडिओ ओळख सिद्ध करत नाही.",
        "माहीत असलेल्या विश्वासार्ह नंबरवर खऱ्या व्यक्तीला कॉल करा.",
        "संशयास्पद मेसेज पुरावा म्हणून जपा.",
        "बनावट अकाउंट किंवा नंबर ब्लॉक आणि रिपोर्ट करा.",
        "पैसे किंवा धमकी असेल तर लगेच तक्रार करा."
      ]
    },

    what_not_to_do: {
      en: [
        "Do not send money based only on a voice or video request.",
        "Do not share OTP, passwords or login codes.",
        "Do not forward suspicious content without checking.",
        "Do not trust edited photos or urgent emotional pressure.",
        "Do not delete the evidence."
      ],
      hi: [
        "केवल आवाज या वीडियो अनुरोध पर पैसे न भेजें।",
        "OTP, पासवर्ड या लॉगिन कोड साझा न करें।",
        "बिना जांच संदिग्ध सामग्री आगे न भेजें।",
        "एडिटेड फोटो या भावनात्मक दबाव पर भरोसा न करें।",
        "सबूत न हटाएं।"
      ],
      mr: [
        "फक्त आवाज किंवा व्हिडिओ विनंतीवर पैसे पाठवू नका.",
        "OTP, पासवर्ड किंवा लॉगिन कोड देऊ नका.",
        "तपासणीशिवाय संशयास्पद मजकूर पुढे पाठवू नका.",
        "एडिटेड फोटो किंवा भावनिक दबावावर विश्वास ठेवू नका.",
        "पुरावा हटवू नका."
      ]
    },

    already_clicked: {
      en: "Do not send anything more. Save the message as evidence and contact the real person through a trusted number. Block and report the fake account, and report quickly on cybercrime.gov.in.",
      hi: "अब कुछ और न भेजें। संदेश सबूत के तौर पर संभालें और भरोसेमंद नंबर से असली व्यक्ति से संपर्क करें। नकली अकाउंट ब्लॉक और रिपोर्ट करें, और जल्दी cybercrime.gov.in पर रिपोर्ट करें।",
      mr: "आता आणखी काही पाठवू नका. मेसेज पुरावा म्हणून जपा आणि विश्वासार्ह नंबरवरून खऱ्या व्यक्तीशी संपर्क साधा. बनावट अकाउंट ब्लॉक आणि रिपोर्ट करा आणि लवकर cybercrime.gov.in वर तक्रार करा."
    },

    faq: [
      {
        id: "faq-check",
        q: { en: "How can I tell if a voice or video is fake?", hi: "आवाज या वीडियो नकली है या नहीं, यह कैसे जांचूं?", mr: "आवाज किंवा व्हिडिओ बनावट आहे का हे कसे तपासावे?" },
        type: "steps",
        a: {
          en: [
            "Remember: voice or video alone does not prove identity.",
            "Call the real person on a known trusted number.",
            "Ask a personal question only the real person would know."
          ],
          hi: [
            "याद रखें: केवल आवाज या वीडियो पहचान साबित नहीं करता।",
            "जाने-पहचाने भरोसेमंद नंबर पर असली व्यक्ति को कॉल करें।",
            "ऐसा निजी सवाल पूछें जो केवल असली व्यक्ति जानता हो।"
          ],
          mr: [
            "लक्षात ठेवा: केवळ आवाज किंवा व्हिडिओ ओळख सिद्ध करत नाही.",
            "माहीत असलेल्या विश्वासार्ह नंबरवर खऱ्या व्यक्तीला कॉल करा.",
            "असा खाजगी प्रश्न विचारा जो फक्त खरी व्यक्ती जाणत असेल."
          ]
        }
      },
      {
        id: "faq-avoid",
        q: { en: "What should I avoid?", hi: "मुझे क्या नहीं करना चाहिए?", mr: "मी काय टाळावे?" },
        type: "avoid",
        a: {
          en: [
            "Do not send money based only on a voice or video request.",
            "Do not share OTP, passwords or login codes.",
            "Do not forward suspicious content without checking."
          ],
          hi: [
            "केवल आवाज या वीडियो अनुरोध पर पैसे न भेजें।",
            "OTP, पासवर्ड या लॉगिन कोड साझा न करें।",
            "बिना जांच संदिग्ध सामग्री आगे न भेजें।"
          ],
          mr: [
            "फक्त आवाज किंवा व्हिडिओ विनंतीवर पैसे पाठवू नका.",
            "OTP, पासवर्ड किंवा लॉगिन कोड देऊ नका.",
            "तपासणीशिवाय संशयास्पद मजकूर पुढे पाठवू नका."
          ]
        }
      },
      {
        id: "faq-already-clicked",
        q: { en: "What if I already reacted or shared something?", hi: "अगर मैंने प्रतिक्रिया दी या कुछ साझा किया तो क्या करूं?", mr: "मी प्रतिक्रिया दिली किंवा काही शेअर केले तर काय करावे?" },
        type: "para",
        a: {
          en: "Stop sending more, save evidence, contact the real person on a trusted number, and report on cybercrime.gov.in.",
          hi: "और कुछ न भेजें, सबूत संभालें, भरोसेमंद नंबर से असली व्यक्ति से संपर्क करें, और cybercrime.gov.in पर रिपोर्ट करें।",
          mr: "आणखी काही पाठवू नका, पुरावा जपा, विश्वासार्ह नंबरवरून खऱ्या व्यक्तीशी संपर्क साधा आणि cybercrime.gov.in वर तक्रार करा."
        }
      },
      {
        id: "faq-report",
        q: { en: "Where do I report a deepfake scam?", hi: "डीपफेक ठगी की रिपोर्ट कहां करूं?", mr: "डीपफेक फसवणुकीची तक्रार कुठे करावी?" },
        type: "report",
        a: { en: [], hi: [], mr: [] }
      }
    ],

    report_links: [
      {
        label: { en: "National Cyber Crime Reporting Portal", hi: "राष्ट्रीय साइबर अपराध रिपोर्टिंग पोर्टल", mr: "राष्ट्रीय सायबर गुन्हे तक्रार पोर्टल" },
        description: { en: "Report deepfake or impersonation scams.", hi: "डीपफेक या नकली पहचान स्कैम की रिपोर्ट करें।", mr: "डीपफेक किंवा बनावट ओळखीच्या स्कॅमची तक्रार करा." },
        url: "https://cybercrime.gov.in",
        pending_verification: false
      },
      {
        label: { en: "Cyber Crime Helpline — 1930", hi: "साइबर क्राइम हेल्पलाइन — 1930", mr: "सायबर क्राइम हेल्पलाइन — 1930" },
        description: { en: "Call for urgent support if you were pressured or blackmailed.", hi: "अगर आप दबाव या ब्लैकमेल में थे तो तुरंत हेल्पलाइन पर कॉल करें।", mr: "जर तुम्हाला दबाव वा ब्लॅकमेल केले गेले असेल, तर ताबडतोब हेल्पलाइनवर कॉल करा." },
        url: "tel:1930",
        pending_verification: false
      },
      {
        label: { en: "Use the platform's report tool", hi: "प्लेटफॉर्म के रिपोर्ट टूल का उपयोग करें", mr: "प्लॅटफॉर्मचे रिपोर्ट टूल वापरा" },
        description: { en: "Block and report fake accounts or impersonation content.", hi: "नकली अकाउंट या पहचान वाले कंटेंट को ब्लॉक और रिपोर्ट करें।", mr: "बनावट अकाउंट किंवा ओळखयुक्त सामग्री ब्लॉक करा आणि रिपोर्ट करा." },
        url: null,
        pending_verification: false,
        is_instruction: true
      }
    ]
  }

};
