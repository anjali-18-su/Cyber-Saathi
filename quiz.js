/**
 * quiz.js — Cyber Safety Quiz for Cyber Saathi
 * 10 questions, 4 options each, EN / HI / MR
 * No external dependencies. Works with i18n.js for UI labels.
 */

/* ── Quiz data ─────────────────────────────────────────────── */
const QUIZ_DATA = {

  /* =========================================================
     ENGLISH
     ========================================================= */
  en: [
    {
      q: "Someone calls claiming to be from your bank and asks for your OTP to \"verify your account\". What should you do?",
      options: [
        "Share the OTP quickly so they can help you",
        "Ask them to call back later",
        "End the call and contact your bank using the official number on their website or app",
        "Give them only the last 4 digits of the OTP"
      ],
      correct: 2,
      explanation: "Your bank will NEVER ask for your OTP over a call. End the call immediately and verify using only the official bank number."
    },
    {
      q: "You receive an unexpected video call from someone claiming to be a government officer. They demand immediate payment or threaten arrest. What is the safest action?",
      options: [
        "Pay immediately to avoid trouble",
        "End the call, do not pay, and verify through official government channels",
        "Stay on the call and negotiate",
        "Share your Aadhaar details to prove your identity"
      ],
      correct: 1,
      explanation: "No government officer will demand payment or threaten arrest over a video call. End the call and report it to cybercrime.gov.in or call 1930."
    },
    {
      q: "You receive an email saying your bank account will be blocked unless you click a link and 'verify' your details within 24 hours. What should you do?",
      options: [
        "Click the link quickly to save your account",
        "Ignore the email and directly log in to your bank through the official app or website",
        "Reply to the email with your details",
        "Forward the email to friends to warn them"
      ],
      correct: 1,
      explanation: "Legitimate banks do not send urgent emails with links asking for credentials. Always access your bank directly through the official app or website."
    },
    {
      q: "A friend sends you a WhatsApp message with a link saying 'Win a free phone! Click now'. What should you do?",
      options: [
        "Click it — your friend sent it so it must be safe",
        "Do not click. Call your friend to check if they really sent it",
        "Forward it to others to share the offer",
        "Click it but do not enter any details"
      ],
      correct: 1,
      explanation: "Friends' accounts can be hacked. Always verify before clicking unexpected links, even from known contacts."
    },
    {
      q: "Someone tells you they will 'send' you money and asks you to scan their QR code or enter your UPI PIN. What should you know?",
      options: [
        "Scanning a QR code and entering your UPI PIN is how you receive money",
        "You never need your UPI PIN to receive money — entering it authorises a payment FROM your account",
        "This is the standard way to receive UPI transfers",
        "A UPI PIN is needed only the first time you receive money"
      ],
      correct: 1,
      explanation: "Your UPI PIN is used to SEND or authorise payments — never to receive them. If someone asks you to enter your PIN to receive money, it is a scam."
    },
    {
      q: "You get a call saying your parcel is held at customs and you must pay a fine immediately or face legal action. What is the right response?",
      options: [
        "Pay immediately to release the parcel",
        "Hang up, do not pay, and check the courier status only through the official courier website or app",
        "Share your Aadhaar and bank details to verify your identity",
        "Install the app they send you a link for"
      ],
      correct: 1,
      explanation: "Courier and customs agencies do not demand immediate payment over unsolicited calls. Verify parcel status only through official channels."
    },
    {
      q: "A social media account with your manager's name and photo asks you to urgently transfer money for an emergency. What should you do?",
      options: [
        "Transfer money because it looks like your manager",
        "Call your manager directly on their known phone number to verify before doing anything",
        "Send a small amount first to test if it is real",
        "Message back on social media to verify"
      ],
      correct: 1,
      explanation: "Scammers create fake profiles to impersonate people. Always verify using a trusted contact method — phone call — not the social media message itself."
    },
    {
      q: "You receive a voice message that sounds exactly like a family member, asking you to send money urgently. What should you do?",
      options: [
        "Send money immediately because you recognise the voice",
        "Call the family member directly on their known number before sending any money",
        "Send money and inform other family members",
        "Trust the voice — AI cannot fake voices perfectly"
      ],
      correct: 1,
      explanation: "AI can now clone voices convincingly. Always verify an urgent money request by calling the person directly on a known, trusted number."
    },
    {
      q: "Which of the following is the SAFEST practice for protecting your online accounts?",
      options: [
        "Share your password with a trusted family member so they can help in emergencies",
        "Use the same password for all accounts so it is easy to remember",
        "Never share your OTP or password with anyone, including people who claim to be from your bank or government",
        "Write your password in a note on your phone"
      ],
      correct: 2,
      explanation: "OTPs and passwords are secret codes meant only for you. No legitimate organisation — bank, government or company — will ever ask you to share them."
    },
    {
      q: "You have lost money to an online scam in India. Which is the MOST immediate step you should take?",
      options: [
        "Wait to see if the money comes back on its own",
        "Call 1930 and inform your bank or payment provider immediately",
        "Post about it on social media",
        "File a complaint only with the police station nearest to you"
      ],
      correct: 1,
      explanation: "1930 is India's national helpline for immediate financial cyber fraud. Call it quickly — along with your bank — as early reporting improves the chance of recovery."
    }
  ],

  /* =========================================================
     HINDI
     ========================================================= */
  hi: [
    {
      q: "कोई आपके बैंक से होने का दावा करके \"खाता सत्यापित\" करने के लिए OTP मांगता है। आपको क्या करना चाहिए?",
      options: [
        "मदद के लिए जल्दी OTP दें",
        "उन्हें बाद में कॉल करने को कहें",
        "कॉल काट दें और बैंक की आधिकारिक वेबसाइट या ऐप से नंबर लेकर संपर्क करें",
        "OTP के केवल अंतिम 4 अंक दें"
      ],
      correct: 2,
      explanation: "आपका बैंक कभी भी कॉल पर OTP नहीं मांगेगा। तुरंत कॉल काट दें और केवल आधिकारिक बैंक नंबर से संपर्क करें।"
    },
    {
      q: "आपको किसी अनजान व्यक्ति से अचानक वीडियो कॉल आती है जो खुद को सरकारी अधिकारी बताता है और तत्काल भुगतान की मांग करता है या गिरफ्तारी की धमकी देता है। सबसे सुरक्षित कदम क्या है?",
      options: [
        "परेशानी से बचने के लिए तुरंत भुगतान करें",
        "कॉल काट दें, भुगतान न करें और आधिकारिक सरकारी चैनलों से जाँच करें",
        "कॉल पर बने रहें और बातचीत करें",
        "अपनी पहचान साबित करने के लिए आधार विवरण साझा करें"
      ],
      correct: 1,
      explanation: "कोई भी सरकारी अधिकारी वीडियो कॉल पर भुगतान की मांग नहीं करेगा या गिरफ्तारी की धमकी नहीं देगा। कॉल काटें और cybercrime.gov.in पर रिपोर्ट करें या 1930 पर कॉल करें।"
    },
    {
      q: "आपको एक ईमेल मिलता है जिसमें कहा गया है कि 24 घंटे में लिंक पर क्लिक करके 'सत्यापन' न करने पर आपका बैंक खाता बंद हो जाएगा। आपको क्या करना चाहिए?",
      options: [
        "खाता बचाने के लिए जल्दी से लिंक पर क्लिक करें",
        "ईमेल को नज़रअंदाज़ करें और सीधे आधिकारिक ऐप या वेबसाइट के ज़रिए बैंक में लॉगिन करें",
        "ईमेल का जवाब अपना विवरण देकर दें",
        "दूसरों को सतर्क करने के लिए ईमेल आगे भेजें"
      ],
      correct: 1,
      explanation: "असली बैंक कभी भी लिंक के साथ अर्जेंट ईमेल नहीं भेजते जिसमें लॉगिन विवरण मांगा जाए। हमेशा सीधे आधिकारिक ऐप या वेबसाइट से बैंक एक्सेस करें।"
    },
    {
      q: "एक दोस्त आपको WhatsApp पर एक लिंक भेजता है जिसमें लिखा है 'मुफ्त फोन जीतें! अभी क्लिक करें'। आपको क्या करना चाहिए?",
      options: [
        "क्लिक करें — दोस्त ने भेजा है तो सुरक्षित होगा",
        "क्लिक न करें। दोस्त को कॉल करके पूछें कि क्या उसने सच में यह भेजा",
        "ऑफर शेयर करने के लिए दूसरों को फॉरवर्ड करें",
        "क्लिक करें लेकिन कोई जानकारी न भरें"
      ],
      correct: 1,
      explanation: "दोस्तों के अकाउंट हैक हो सकते हैं। परिचित नंबर से भी अनजान लिंक पर क्लिक करने से पहले हमेशा सत्यापित करें।"
    },
    {
      q: "कोई कहता है कि वह आपको पैसे 'भेजेगा' और आपसे QR कोड स्कैन करने या UPI PIN डालने को कहता है। आपको क्या पता होना चाहिए?",
      options: [
        "QR कोड स्कैन करके UPI PIN डालना पैसे प्राप्त करने का तरीका है",
        "पैसे प्राप्त करने के लिए कभी UPI PIN की ज़रूरत नहीं — PIN डालने से आपके खाते से भुगतान होता है",
        "यह UPI ट्रांसफर प्राप्त करने का सामान्य तरीका है",
        "UPI PIN केवल पहली बार पैसे प्राप्त करते समय चाहिए"
      ],
      correct: 1,
      explanation: "UPI PIN का उपयोग भुगतान भेजने या अधिकृत करने के लिए होता है — प्राप्त करने के लिए कभी नहीं। अगर कोई पैसे पाने के लिए PIN डालने को कहे, यह ठगी है।"
    },
    {
      q: "आपको कॉल आती है कि आपका पार्सल कस्टम में रोका गया है और तुरंत जुर्माना न देने पर कानूनी कार्रवाई होगी। सही जवाब क्या है?",
      options: [
        "पार्सल छुड़ाने के लिए तुरंत भुगतान करें",
        "फोन काट दें, भुगतान न करें और केवल आधिकारिक कोरियर वेबसाइट या ऐप से स्थिति जांचें",
        "पहचान सत्यापित करने के लिए आधार और बैंक विवरण साझा करें",
        "उनके भेजे लिंक से ऐप इंस्टॉल करें"
      ],
      correct: 1,
      explanation: "कोरियर या कस्टम एजेंसियां अनचाही कॉल पर तत्काल भुगतान की मांग नहीं करतीं। पार्सल की स्थिति केवल आधिकारिक माध्यमों से जांचें।"
    },
    {
      q: "आपके मैनेजर के नाम और फोटो वाला एक सोशल मीडिया अकाउंट आपसे किसी आपात स्थिति के लिए तुरंत पैसे ट्रांसफर करने को कहता है। आपको क्या करना चाहिए?",
      options: [
        "पैसे ट्रांसफर करें क्योंकि यह आपके मैनेजर जैसा दिखता है",
        "कुछ भी करने से पहले मैनेजर को उनके जाने-पहचाने फोन नंबर पर सीधे कॉल करके सत्यापित करें",
        "पहले थोड़ी राशि भेजें यह जाँचने के लिए कि यह असली है",
        "सोशल मीडिया पर ही मैसेज करके सत्यापित करें"
      ],
      correct: 1,
      explanation: "ठग लोगों की नकल करने के लिए फर्जी प्रोफाइल बनाते हैं। हमेशा भरोसेमंद तरीके — फोन कॉल — से सत्यापित करें, न कि सोशल मीडिया मैसेज से।"
    },
    {
      q: "आपको एक वॉयस मैसेज मिलता है जो बिल्कुल किसी परिवार के सदस्य जैसा लगता है और वे तुरंत पैसे भेजने को कह रहे हैं। आपको क्या करना चाहिए?",
      options: [
        "तुरंत पैसे भेजें क्योंकि आप आवाज़ पहचानते हैं",
        "कोई पैसा भेजने से पहले परिवार के उस सदस्य को उनके जाने-पहचाने नंबर पर सीधे कॉल करें",
        "पैसे भेजें और अन्य परिवार के सदस्यों को सूचित करें",
        "आवाज़ पर भरोसा करें — AI आवाज़ें पूरी तरह नकल नहीं कर सकता"
      ],
      correct: 1,
      explanation: "AI अब आवाज़ों की विश्वसनीय नकल कर सकता है। किसी भी आपातकालीन पैसे की मांग की जाँच उस व्यक्ति को सीधे जाने-पहचाने, भरोसेमंद नंबर पर कॉल करके करें।"
    },
    {
      q: "अपने ऑनलाइन खातों की सुरक्षा के लिए निम्नलिखित में से कौन सा सबसे सुरक्षित तरीका है?",
      options: [
        "आपातकाल में मदद के लिए किसी विश्वसनीय परिवार के सदस्य के साथ पासवर्ड साझा करें",
        "सभी खातों के लिए एक ही पासवर्ड रखें ताकि याद रहे",
        "अपना OTP या पासवर्ड किसी के साथ भी साझा न करें — बैंक या सरकार के प्रतिनिधि होने का दावा करने वालों के साथ भी नहीं",
        "फोन में नोट में पासवर्ड लिखकर रखें"
      ],
      correct: 2,
      explanation: "OTP और पासवर्ड केवल आपके लिए गुप्त कोड हैं। कोई भी वैध संगठन — बैंक, सरकार या कंपनी — कभी भी इन्हें साझा करने को नहीं कहेगा।"
    },
    {
      q: "आप भारत में ऑनलाइन ठगी में पैसा खो चुके हैं। सबसे पहला और तत्काल कदम क्या होना चाहिए?",
      options: [
        "प्रतीक्षा करें कि पैसे खुद वापस आ जाएंगे",
        "1930 पर कॉल करें और तुरंत अपने बैंक या भुगतान प्रदाता को सूचित करें",
        "इसके बारे में सोशल मीडिया पर पोस्ट करें",
        "केवल नजदीकी पुलिस थाने में शिकायत दर्ज करें"
      ],
      correct: 1,
      explanation: "1930 तत्काल वित्तीय साइबर धोखाधड़ी के लिए भारत का राष्ट्रीय हेल्पलाइन नंबर है। इसे जल्दी कॉल करें — बैंक के साथ — क्योंकि जल्दी रिपोर्ट करने से पैसे वापस मिलने की संभावना बढ़ती है।"
    }
  ],

  /* =========================================================
     MARATHI
     ========================================================= */
  mr: [
    {
      q: "कोणी तुमच्या बँकेतून असल्याचे सांगून 'खाते सत्यापित' करण्यासाठी OTP मागतो. तुम्ही काय करावे?",
      options: [
        "मदतीसाठी लवकर OTP द्या",
        "त्यांना नंतर कॉल करायला सांगा",
        "कॉल बंद करा आणि बँकेच्या अधिकृत वेबसाइट किंवा अ‍ॅपवरून नंबर घेऊन संपर्क करा",
        "OTP चे फक्त शेवटचे 4 अंक द्या"
      ],
      correct: 2,
      explanation: "तुमची बँक कॉलवर कधीही OTP विचारणार नाही. लगेच कॉल बंद करा आणि केवळ अधिकृत बँक नंबरवर संपर्क करा."
    },
    {
      q: "एखाद्या अनोळखी व्यक्तीचा व्हिडिओ कॉल येतो जो स्वतःला सरकारी अधिकारी सांगतो आणि ताबडतोब पैसे देण्याची मागणी करतो किंवा अटकेची धमकी देतो. सर्वात सुरक्षित पाऊल कोणते?",
      options: [
        "त्रास टाळण्यासाठी लगेच पैसे द्या",
        "कॉल बंद करा, पैसे देऊ नका आणि अधिकृत सरकारी माध्यमांद्वारे खातरजमा करा",
        "कॉलवर राहा आणि वाटाघाटी करा",
        "ओळख सिद्ध करण्यासाठी आधार तपशील शेअर करा"
      ],
      correct: 1,
      explanation: "कोणताही सरकारी अधिकारी व्हिडिओ कॉलवर पैसे मागणार नाही किंवा अटकेची धमकी देणार नाही. कॉल बंद करा आणि cybercrime.gov.in वर तक्रार नोंदवा किंवा 1930 वर कॉल करा."
    },
    {
      q: "एक ईमेल येतो ज्यात म्हटले आहे की 24 तासांत लिंकवर क्लिक करून 'सत्यापन' न केल्यास बँक खाते बंद होईल. तुम्ही काय करावे?",
      options: [
        "खाते वाचवण्यासाठी लवकर लिंकवर क्लिक करा",
        "ईमेल दुर्लक्षित करा आणि थेट अधिकृत अ‍ॅप किंवा वेबसाइटद्वारे बँकेत लॉगिन करा",
        "तपशील देऊन ईमेलला उत्तर द्या",
        "इतरांना सावध करण्यासाठी ईमेल फॉरवर्ड करा"
      ],
      correct: 1,
      explanation: "खऱ्या बँका लिंकसह लॉगिन तपशील मागणारे तातडीचे ईमेल कधीच पाठवत नाहीत. नेहमी थेट अधिकृत अ‍ॅप किंवा वेबसाइटद्वारे बँक अ‍ॅक्सेस करा."
    },
    {
      q: "एका मित्राने WhatsApp वर एक लिंक पाठवली: 'मोफत फोन जिंका! आत्ता क्लिक करा'. तुम्ही काय करावे?",
      options: [
        "क्लिक करा — मित्राने पाठवले म्हणजे सुरक्षित असेल",
        "क्लिक करू नका. मित्राला फोन करून विचारा त्याने खरंच हे पाठवलं का",
        "ऑफर शेअर करण्यासाठी इतरांना फॉरवर्ड करा",
        "क्लिक करा पण कोणतेही तपशील भरू नका"
      ],
      correct: 1,
      explanation: "मित्रांची खाती हॅक होऊ शकतात. ओळखीच्या व्यक्तीकडूनही अनपेक्षित लिंकवर क्लिक करण्यापूर्वी नेहमी खातरजमा करा."
    },
    {
      q: "कोणी सांगतो की ते तुम्हाला पैसे 'पाठवणार' आहेत आणि QR कोड स्कॅन करायला किंवा UPI PIN टाकायला सांगतो. तुम्हाला काय माहीत असणे गरजेचे आहे?",
      options: [
        "QR कोड स्कॅन करून UPI PIN टाकणे हेच पैसे मिळवण्याचा मार्ग आहे",
        "पैसे मिळवण्यासाठी UPI PIN कधीच लागत नाही — PIN टाकल्यास तुमच्या खात्यातून पैसे जातात",
        "UPI ट्रान्सफर मिळवण्याचा हा नेहमीचा मार्ग आहे",
        "UPI PIN फक्त पहिल्यांदाच पैसे मिळवताना लागतो"
      ],
      correct: 1,
      explanation: "UPI PIN पैसे पाठवण्यासाठी किंवा व्यवहार मंजूर करण्यासाठी वापरतात — मिळवण्यासाठी कधीच नाही. कोणी पैसे मिळवण्यासाठी PIN मागत असल्यास ती फसवणूक आहे."
    },
    {
      q: "कस्टममध्ये पार्सल अडकले असून लगेच दंड न भरल्यास कायदेशीर कारवाई होईल असा कॉल येतो. योग्य प्रतिसाद काय आहे?",
      options: [
        "पार्सल सोडवण्यासाठी लगेच पैसे भरा",
        "फोन बंद करा, पैसे देऊ नका आणि फक्त अधिकृत कुरियर वेबसाइट किंवा अ‍ॅपवरून स्थिती तपासा",
        "ओळख सत्यापित करण्यासाठी आधार आणि बँक तपशील शेअर करा",
        "त्यांनी पाठवलेल्या लिंकवरून अ‍ॅप इन्स्टॉल करा"
      ],
      correct: 1,
      explanation: "कुरियर किंवा कस्टम एजन्सी अनाहूत कॉलवर तातडीने पैसे मागत नाहीत. पार्सलची स्थिती फक्त अधिकृत माध्यमांद्वारेच तपासा."
    },
    {
      q: "तुमच्या मॅनेजरच्या नाव आणि फोटोसह एक सोशल मीडिया खाते आणीबाणीसाठी तातडीने पैसे ट्रान्सफर करण्यास सांगते. तुम्ही काय करावे?",
      options: [
        "पैसे ट्रान्सफर करा कारण ते मॅनेजरसारखे दिसते",
        "काहीही करण्यापूर्वी मॅनेजरला त्यांच्या माहितीच्या फोन नंबरवर थेट कॉल करून खातरजमा करा",
        "ते खरे आहे का हे तपासण्यासाठी आधी थोडी रक्कम पाठवा",
        "सोशल मीडियावरच मेसेज करून खातरजमा करा"
      ],
      correct: 1,
      explanation: "फसवणूकदार लोकांची बतावणी करण्यासाठी बनावट प्रोफाइल बनवतात. नेहमी विश्वासार्ह मार्गाने — फोन कॉल — खातरजमा करा, सोशल मीडिया मेसेजने नाही."
    },
    {
      q: "एक व्हॉइस मेसेज येतो जो अगदी कुटुंबातील सदस्यासारखा वाटतो आणि तातडीने पैसे पाठवायला सांगतो. तुम्ही काय करावे?",
      options: [
        "आवाज ओळखीचा वाटतो म्हणून लगेच पैसे पाठवा",
        "कोणतेही पैसे पाठवण्यापूर्वी त्या कुटुंबातील सदस्याला त्यांच्या माहितीच्या नंबरवर थेट कॉल करा",
        "पैसे पाठवा आणि इतर कुटुंब सदस्यांना सांगा",
        "आवाजावर विश्वास ठेवा — AI आवाज पूर्णपणे नक्कल करू शकत नाही"
      ],
      correct: 1,
      explanation: "AI आता आवाजांची खात्रीशीर नक्कल करू शकते. तातडीच्या पैसे पाठवण्याच्या विनंतीची खातरजमा नेहमी त्या व्यक्तीला माहितीच्या, विश्वासार्ह नंबरवर थेट कॉल करून करा."
    },
    {
      q: "ऑनलाइन खाती सुरक्षित ठेवण्यासाठी खालीलपैकी कोणती सर्वात सुरक्षित पद्धत आहे?",
      options: [
        "आणीबाणीत मदतीसाठी विश्वासू कुटुंब सदस्यासोबत पासवर्ड शेअर करा",
        "लक्षात ठेवणे सोपे व्हावे म्हणून सर्व खात्यांसाठी एकच पासवर्ड वापरा",
        "OTP किंवा पासवर्ड कोणाशीही शेअर करू नका — बँक किंवा सरकारचे प्रतिनिधी असल्याचे सांगणाऱ्यांशीही नाही",
        "फोनवरील नोटमध्ये पासवर्ड लिहून ठेवा"
      ],
      correct: 2,
      explanation: "OTP आणि पासवर्ड केवळ तुमच्यासाठीच असलेले गुप्त कोड आहेत. कोणतीही वैध संस्था — बँक, सरकार किंवा कंपनी — ते कधीही मागणार नाही."
    },
    {
      q: "तुम्ही भारतात ऑनलाइन फसवणुकीत पैसे गमावले आहेत. सर्वात तातडीचे पाऊल कोणते असावे?",
      options: [
        "थांबा — पैसे आपोआप परत येतील",
        "1930 वर कॉल करा आणि लगेच तुमच्या बँकेला किंवा पेमेंट प्रदात्याला कळवा",
        "सोशल मीडियावर याबद्दल पोस्ट करा",
        "फक्त जवळच्या पोलीस स्टेशनमध्ये तक्रार नोंदवा"
      ],
      correct: 1,
      explanation: "1930 हा आर्थिक सायबर फसवणुकीसाठी भारताचा राष्ट्रीय हेल्पलाइन नंबर आहे. लवकर कॉल करा — बँकेसोबत — कारण लवकर तक्रार केल्यास पैसे परत मिळण्याची शक्यता वाढते."
    }
  ]

};

/* ── State ─────────────────────────────────────────────────── */
let currentLang = 'en';
let questions   = [];
let currentIdx  = 0;
let score       = 0;
let answered    = false;

/* ── DOM refs (populated after DOMContentLoaded) ──────────── */
let startScreen, questionScreen, resultScreen;
let startBtn, nextBtn, retryBtn;
let questionText, optionsContainer, feedbackDiv, feedbackLabel, feedbackExpl;
let qNumOf, progressFill;
let scoreNum, resultMessage;

document.addEventListener('DOMContentLoaded', () => {
  /* Get DOM refs */
  startScreen      = document.getElementById('quiz-start-screen');
  questionScreen   = document.getElementById('quiz-question-screen');
  resultScreen     = document.getElementById('quiz-result-screen');
  startBtn         = document.getElementById('quiz-start-btn');
  nextBtn          = document.getElementById('quiz-next-btn');
  retryBtn         = document.getElementById('quiz-retry-btn');
  questionText     = document.getElementById('quiz-question-text');
  optionsContainer = document.getElementById('quiz-options');
  feedbackDiv      = document.getElementById('quiz-feedback');
  feedbackLabel    = document.getElementById('quiz-feedback-label');
  feedbackExpl     = document.getElementById('quiz-feedback-explanation');
  qNumOf           = document.getElementById('quiz-q-of');
  progressFill     = document.getElementById('quiz-progress-fill');
  scoreNum         = document.getElementById('quiz-score-num');
  resultMessage    = document.getElementById('quiz-result-message');

  if (startBtn) startBtn.addEventListener('click', startQuiz);
  if (nextBtn)  nextBtn.addEventListener('click', nextQuestion);
  if (retryBtn) retryBtn.addEventListener('click', resetQuiz);

  /* Sync with i18n language changes */
  if (window.I18n) {
    I18n.onChange((lang) => {
      currentLang = lang;
      /* If quiz is in progress, UI labels (buttons etc.) update via data-i18n.
         Question content stays in the language it was started in. */
    });
    currentLang = I18n.getLang() || 'en';
  }
});

/* ── Quiz flow ──────────────────────────────────────────────── */
function startQuiz() {
  currentLang = (window.I18n && I18n.getLang()) || 'en';
  questions   = (QUIZ_DATA[currentLang] || QUIZ_DATA['en']).slice();
  currentIdx  = 0;
  score       = 0;
  answered    = false;

  show(questionScreen);
  hide(startScreen);
  hide(resultScreen);
  renderQuestion();
}

function renderQuestion() {
  const q = questions[currentIdx];
  answered = false;

  /* Progress counter */
  const ofLabel = (window.I18n && I18n.t('quiz_of')) || 'of';
  if (qNumOf) qNumOf.textContent = ' ' + (currentIdx + 1) + ' ' + ofLabel + ' 10';

  /* Progress bar */
  const pct = (currentIdx / 10) * 100;
  if (progressFill) {
    progressFill.style.width = pct + '%';
    progressFill.parentElement.setAttribute('aria-valuenow', currentIdx);
  }

  /* Question text */
  if (questionText) questionText.textContent = q.q;

  /* Options */
  if (optionsContainer) {
    optionsContainer.innerHTML = '';
    q.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.type      = 'button';
      btn.className = 'quiz-option';
      btn.setAttribute('role', 'listitem');
      btn.textContent = opt;
      btn.setAttribute('aria-label', opt);
      btn.addEventListener('click', () => selectAnswer(i));
      optionsContainer.appendChild(btn);
    });
  }

  /* Hide feedback and next button */
  hide(feedbackDiv);
  hide(nextBtn);
}

function selectAnswer(selectedIdx) {
  if (answered) return;
  answered = true;

  const q         = questions[currentIdx];
  const isCorrect = selectedIdx === q.correct;
  if (isCorrect) score++;

  /* Mark buttons */
  const buttons = optionsContainer ? optionsContainer.querySelectorAll('.quiz-option') : [];
  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.correct) {
      btn.classList.add('quiz-option--correct');
    } else if (i === selectedIdx && !isCorrect) {
      btn.classList.add('quiz-option--wrong');
    }
  });

  /* Show feedback */
  if (feedbackLabel) {
    feedbackLabel.textContent = isCorrect
      ? ((window.I18n && I18n.t('quiz_correct'))   || '✅ Correct!')
      : ((window.I18n && I18n.t('quiz_incorrect')) || '❌ Not quite.');
    feedbackLabel.className = isCorrect
      ? 'quiz-feedback__label--correct'
      : 'quiz-feedback__label--wrong';
  }
  if (feedbackExpl) feedbackExpl.textContent = q.explanation;
  show(feedbackDiv);

  /* Show next / submit button */
  if (nextBtn) {
    nextBtn.removeAttribute('hidden');
    const isLast = currentIdx >= 9;
    nextBtn.textContent = isLast
      ? ((window.I18n && I18n.t('quiz_submit')) || 'See My Result')
      : ((window.I18n && I18n.t('quiz_next'))   || 'Next Question');
    nextBtn.dataset.isLast = isLast ? 'true' : 'false';
    nextBtn.focus();
  }
}

function nextQuestion() {
  if (nextBtn && nextBtn.dataset.isLast === 'true') {
    showResult();
  } else {
    currentIdx++;
    renderQuestion();
  }
}

function showResult() {
  /* Fill progress to 100% */
  if (progressFill) {
    progressFill.style.width = '100%';
    progressFill.parentElement.setAttribute('aria-valuenow', 10);
  }

  hide(questionScreen);
  show(resultScreen);

  if (scoreNum) scoreNum.textContent = score;

  let msgKey;
  if      (score >= 9) msgKey = 'quiz_result_excellent';
  else if (score >= 7) msgKey = 'quiz_result_good';
  else if (score >= 5) msgKey = 'quiz_result_fair';
  else                 msgKey = 'quiz_result_low';

  if (resultMessage) {
    resultMessage.textContent = (window.I18n && I18n.t(msgKey)) || '';
  }

  const icon = document.getElementById('quiz-result-icon');
  if (icon) icon.textContent = score >= 7 ? '🏆' : score >= 5 ? '🌱' : '📖';
}

function resetQuiz() {
  hide(resultScreen);
  show(startScreen);
}

/* ── Helpers ───────────────────────────────────────────────── */
function show(el) { if (el) el.removeAttribute('hidden'); }
function hide(el) { if (el) el.setAttribute('hidden', ''); }
