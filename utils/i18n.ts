import { Language } from '@/lib/i18n-config';

export type { Language };

// Dynamic current year - updates automatically
export const CURRENT_YEAR = new Date().getFullYear();

// Defines the structure of the translations object based on the English version
// This type is used to ensure all languages have the same keys
// This type is used to ensure all languages have the same keys
// type TranslationStructure = typeof translations.en; // Removed to avoid circular dependency

const en = {
  builtIn: "Built in Canada",
  title: "Free PDF Tools Canada",
  subtitle: "Merge, split, compress, convert, sign, and edit PDF files securely in your browser. No uploads, no signup, no watermarks.",
  description: "We help you manage your documents without the fuss. Local processing ensures your files never leave your device. The most polite choice for PDF tools, eh?",
  localProcessing: "100% Local Processing",
  localProcessingDesc: "Your files never leave your browser. All processing happens on your device.",
  noSignup: "No Signup Required",
  secure: "Secure & Private",
  guarantee: "Sorry-free Guarantee",
  selectToolTitle: "Select a Tool",
  eh: " eh?",
  ultimateGuideLabel: "Ultimate PDF Guide 📖",
  editXfaGuide: "Edit XFA PDF Guide",
  mergePdfGuide: "Merge PDF Guide",
  compressPdfGuide: "Compress PDF Guide",
  rotatePdfGuide: "Rotate PDF Guide",
  deletePdfGuide: "Delete Pages Guide",
  organizePdfGuide: "Organize PDF Guide",
  makeFillableGuide: "Make Fillable Guide",
  cropPdfGuide: "Crop PDF Guide",
  splitPdfGuide: "Split PDF Guide",
  flattenPdfGuide: "Flatten PDF Guide",
  invoiceOcrGuide: "Invoice OCR Guide",
  wordToPdfGuide: "Word to PDF Guide",
  pdfToWordGuide: "PDF to Word Guide",
  rtfToPdfGuide: "RTF to PDF Guide",
  heicToPdfGuide: "HEIC to PDF Guide",
  epubToPdfGuide: "EPUB to PDF Guide",
  pdfToEpubGuide: "PDF to EPUB Guide",
  cbrToPdfGuide: "CBR to PDF Guide",
  emailToPdfGuide: "Email to PDF Guide",
  insertPictureGuide: "Insert Picture Guide",
  pageRemoverGuide: "PDF Page Remover Guide",
  barcodeGeneratorGuide: "Barcode Generator Guide",
  analyzePdfGuide: "Analyze Security Guide",
  trimPdfGuide: "Trim PDF Guide",

  // Value Propositions
  hpFastTitle: "Lightning Fast",
  hpFastDesc: "Process files instantly in your browser",
  hpFreeTitle: "100% Free",
  hpFreeDesc: "No hidden costs, no subscriptions",
  hpPrivacyTitle: "Privacy First",
  hpPrivacyDesc: "Your files never leave your device",

  // Sign Tool
  btnSign: "Finish & Download",
  drawTitle: "Draw",
  typeTitle: "Type",
  btnCreate: "Create",
  loading: "Loading...",
  clickToUpload: "Click to upload PDF",
  error: "Error",
  viewOnline: "View PDF Online",
  listenAudio: "Listen Audio",
  page: "Page",
  step: "Step",
  stepSelectTool: "Select Tool",
  stepUploadPdf: "Upload PDF",
  stepProcess: "Edit/Process",
  faqTitle: "Frequently Asked Questions",
  upload: "Upload",
  select: "Select",
  fillify: "Fillify (Magic)",
  download: "Download",



  // Compress Tool
  sizeReduced: "Size Reduced",
  addMorePdfs: "Add more PDFs",
  compressGood: "Good",
  compressGoodDesc: "Best quality, selectable text.",
  compressBalanced: "Balanced",
  compressBalancedDesc: "Good quality, smaller size.",
  compressExtreme: "Extreme",
  compressExtremeDesc: "Smallest size, lower quality.",
  compressGoodInfo: "Optimizes metadata and streams. Text remains selectable.",
  compressBalancedInfo: "Re-renders pages at 150 DPI. Text becomes non-selectable.",
  compressExtremeInfo: "Aggressive re-rendering at 96 DPI. Max compression.",
  selectCompressionLevel: "Select Compression Level",

  // Landing Page Sections
  landingPage: {
    // Keep Your Simple Tasks Simple
    simpleTasksTitle: "Keep Your Simple Tasks Simple",
    simpleTasksDesc: "pdfcanada.ca is the first and only PDF software you'll love. We have all the tools you'll need to start, manage, and finish your work with digital documents—all without leaving your browser.",

    // Work Directly on Files
    workDirectlyTitle: "Work Directly in Your Browser",
    workDirectlyDesc: "Do more than just view PDFs. Merge, compress, split, rotate, and convert your documents—all directly in your browser. With over 20 powerful tools, you can enhance and transform your files without ever uploading them to a server.",

    // Perfect Document
    perfectDocTitle: "Create the Perfect Document",
    perfectDocDesc: "File too big? Compress it. Need a specific format? Convert it. Things getting chaotic? Merge and split files, or remove excess pages. pdfcanada.ca has everything you need to make your documents just right.",

    // Privacy First
    privacyFirstTitle: "Your Privacy is Our Priority",
    privacyFirstDesc: "Unlike other PDF tools, we process everything locally in your browser. Your files never leave your device. No cloud uploads, no data collection, no tracking. What happens on your computer, stays on your computer—eh?",

    // Why Choose Us section
    whyChooseTitle: "Why Choose pdfcanada.ca?",

    trustedByTitle: "Canadians Trust Us",
    trustedByDesc: "Over 10,000 Canadians have used our service to simplify their work with digital documents. From Toronto to Vancouver, we're the polite choice for PDF tools.",

    freeForeverTitle: "Free Forever",
    freeForeverDesc: "Every tool on pdfcanada.ca is 100% free with no hidden fees, no watermarks, and no signup required. Just honest, Canadian service.",

    noUploadsTitle: "No Uploads Required",
    noUploadsDesc: "All processing happens locally in your browser using WebAssembly technology. Your files never touch our servers, ensuring maximum privacy and security.",

    openSourceTitle: "Built with Love in Canada",
    openSourceDesc: "Made by a small team in Toronto, Ontario. We believe in privacy-first technology and keeping things simple—the Canadian way.",

    fastSecureTitle: "Lightning Fast & Secure",
    fastSecureDesc: "Powered by your own device, our tools process files instantly without network delays. Plus, with local processing, your documents stay 100% secure.",

    pipedaTitle: "PIPEDA Compliant",
    pipedaDesc: "We take Canadian privacy laws seriously. Our local-first approach means we don't collect, store, or process your personal information.",

    // Final CTA
    ctaTitle: "Ready to Get Started?",
    ctaDesc: "Join thousands of Canadians who trust pdfcanada.ca for their document needs. Select a tool above and start working—no signup required.",
    ctaButton: "Explore All Tools",
    
    // Hub Titles
    hubConverter: "PDF Converter Tools",
    hubEditing: "PDF Editing Tools",
    hubSecurity: "Secure PDF Tools",
    hubBusiness: "Business PDF Tools",
  },

  // SEO General
  seo: {
    homeTitle: "Free PDF Tools Canada | Online & Secure No-Upload Service | pdfcanada.ca",
    homeDesc: `The Polite Canadian PDF Tools. 100% free & secure in ${CURRENT_YEAR}. Merge, compress, and convert PDFs directly in your browser. No uploads—your files never leave your device.`,
    homeFaq: [
      {
        q: "Is pdfcanada.ca really free?",
        a: "Absolute-leaf! Every tool on our site is 100% free. No watermarks, no signups, and no hidden fees. We're just polite Canadians helping you manage your documents."
      },
      {
        q: "How secure is my data on pdfcanada.ca?",
        a: "It's super secure. Unlike other tools that upload your files to a server, we process everything locally in your browser. Your files never leave your computer, eh?"
      },
      {
        q: "What tools do you offer?",
        a: "We offer a full suite of PDF tools including: Delete Pages, Rotate PDF, Merge PDF, Compress PDF, HEIC to PDF, EPUB to PDF, CBR (Comic) to PDF, PDF to Word, Word to PDF, Sign PDF, and a PDF Form Filler."
      },
      {
        q: "Do I need to create an account or sign up?",
        a: "No signup required! Just visit our site, select your tool, and start working on your PDF immediately. No email, no password, no hassle."
      },
      {
        q: "Can I merge multiple PDF files into one?",
        a: "Absolutely! Our Merge PDF tool lets you combine multiple PDF files into a single document. Just drag and drop your files, arrange them in order, and download your merged PDF."
      },
      {
        q: "How do I convert a PDF to Word without losing formatting?",
        a: "Use our PDF to Word tool. It extracts text and basic structure from your PDF into a .docx file. For best results, use PDFs with selectable text rather than scanned images."
      }
    ],
    homeHowToFiles: "Select Files",
    homeHowToFilesDesc: "Choose the PDF files you want to merge",
    homeHowToOrder: "Arrange Order",
    homeHowToOrderDesc: "Drag and drop files to set the merge order",
    homeHowToMergeDl: "Download Result",
    homeHowToMergeDlDesc: "Click merge and download your combined PDF",
    homeHowToUpload: "Upload PDF",
    homeHowToUploadDesc: "Select the PDF file you want to convert",
    homeHowToProcess: "Process Conversion",
    homeHowToProcessDesc: "Our tool extracts text and structure automatically",
    homeHowToWordDl: "Download Word File",
    homeHowToWordDlDesc: "Save the converted .docx file to your device",
    skipToContent: "Skip to main content",
    pricingTitle: "Free PDF Tools Pricing | Only $0 Forever | pdfcanada.ca",
    pricingDesc: "Unbelievably free PDF tools. $0 CAD for unlimited file conversions, merges, and edits. No hidden fees, no subscriptions, just polite Canadian service.",
    privacyTitle: "Privacy Policy & Data Security | pdfcanada.ca",
    privacyDesc: `Our ${CURRENT_YEAR} privacy commitment: All PDF processing happens locally in your browser via WebAssembly. Your files are never uploaded, ensuring maximum security and trust.`,
    termsTitle: "Terms of Service - Friendly & Secure | pdfcanada.ca",
    termsDesc: `Read our polite ${CURRENT_YEAR} terms of service. We focus on document privacy and user-friendly tools that keep your files safe on your device. Free to use for everyone.`,
    howtoTitle: "How to Use pdfcanada.ca | PDF Tutorials",
    howtoDesc: "Easy instructions on how to delete PDF pages, rotate documents, and convert files using pdfcanada.ca.",
    supportTitle: "Support Local Canadian Developers | Donate | pdfcanada.ca",
    supportDesc: "Support the Canadian team building free, privacy-focused PDF tools. Buy us a coffee or a timbit to keep the servers running.",
    sorryTitle: "Sorry Policy - pdfcanada.ca",
    sorryDesc: "Our guarantee to apologize if anything goes wrong. The most Canadian policy on the web.",
    fillableTitle: "How to make a PDF fillable | pdfcanada.ca",
    fillableDesc: "Learn how to make a PDF fillable for free using our Canadian tools. Add text fields to flat PDFs securely and locally.",
    aboutTitle: "About Us - Our Commitment to Privacy | pdfcanada.ca",
    aboutDesc: "Learn more about pdfcanada.ca, our mission to provide secure, local-first PDF tools, and why we believe your data should stay on your device."
  },

  // Feature Pages SEO & Content
  pricingPage: {
    content: "At pdfcanada.ca, we believe that essential document tools should be free, accessible, and private. That's why we've committed to a $0 price tag for all our core features. Whether you need to delete pages, rotate a PDF, or convert formats, you'll never hit a paywall here. We rely on the generosity of our users (and our love for the game) to keep things running. If you're looking for free pdf tools Canada, you've found the best spot on the web.",
    faq: [
      {
        question: "Is pdfcanada.ca really free?",
        answer: "You betcha! Every tool on our site is completely free to use. we don't watermark your files or limit how many you can process."
      },
      {
        question: "Do I need a credit card for the free plan?",
        answer: "No way, eh. No credit card, no signup, no hassle. Just upload your file and get to work."
      },
      {
        question: "Why is it free? What's the catch?",
        answer: "No catch. We run lean using local processing technology (your browser does the work), so our server costs are low. We may display ads to help cover hosting and development costs."
      },
      {
        question: "Can I use this for my business?",
        answer: "Absolutely. Our free PDF tools are perfect for small businesses, freelancers, and anyone who wants to save money on expensive software."
      },

    ]
  },
  supportPage: {
    content: "We're a small team of developers based in Toronto, Ontario, dedicated to building the most polite and private PDF tools on the internet. Unlike big corporations that harvest your data, we built pdfcanada.ca to process everything locally on your device. Your files never leave your computer. By supporting us, you're backing indie Canadian software and helping us maintain a free utility for everyone.",
    canadianWayText: "If you like what we do, tell a friend. That's the Canadian way.",
    faqTitle: "Frequently Asked Questions",
    faq: [
      {
        question: "How can I support pdfcanada.ca?",
        answer: "The best way is to share our tools with your friends! If you have a loonie to spare, you can also use our 'Drop a Loonie' button to send a small tip."
      },
      {
        question: "Where does my donation go?",
        answer: "Every dollar acts as a vote of confidence. It goes towards server costs (hosting), domain fees, and maybe a double-double for the dev team during late-night coding sessions."
      },
      {
        question: "Is my payment secure?",
        answer: "Yes. We use Stripe for all transactions. We never see or store your credit card information."
      },
      {
        question: "Why should I support local software?",
        answer: "Supporting local means you're helping build a tech ecosystem that respects privacy and values users over profit. Plus, it's the Canadian thing to do, eh?"
      },
      {
        question: "Do you offer refunds on tips?",
        answer: "Since it's a small donation, we generally don't, but if you made a mistake, just reach out. We'll apologize and sort it out."
      }
    ]
  },
  aboutPage: {
    title: "Built for Canadians, by Canadians",
    subtitle: "Privacy-first PDF tools that respect your documents and your data.",
    mission: "Our Mission",
    missionText: "We believe that essential document tools should be free, secure, and accessible to everyone. Our goal is to provide a privacy-first alternative to cloud-based PDF processors, ensuring that sensitive Canadian data stays right here on your device.",
    story: "The pdfcanada.ca Story",
    storyText: "Started by a small team in Toronto, pdfcanada.ca was born out of a frustration with modern PDF tools. Most online converters force you to upload your sensitive documents to distant servers, often harvesting your data in the process. We knew there was a better, more 'polite' way. By leveraging modern browser technologies like WebAssembly, we've built a suite of tools that work entirely on your computer.",
    values: "Our Core Values",
    value1Title: "100% Privacy",
    value1Text: "Your files never leave your device. Period. We use local processing to ensure your data stays private.",
    value2Title: "No Paywalls",
    value2Text: "No subscriptions, no hidden fees, and no watermarks. Essential tools should be free for everyone.",
    value3Title: "User-First Service",
    value3Text: "No signups, no complex interfaces, and no bloated software. Just simple tools that work.",
    trustTitle: "Why Trust PDFCanada.ca?",
    trust1Title: "Canadian Compliance",
    trust1Text: "We strictly follow PIPEDA guidelines, ensuring Canadian data sovereignty by keeping processing on your hardware.",
    trust2Title: "Local-First Security",
    trust2Text: "Our 'Zero-Upload' architecture means your sensitive documents (tax files, medical records) never touch a cloud server.",
    trust3Title: "Transparent Tech",
    trust3Text: "We use audited open-source libraries like pdf-lib and WebAssembly to ensure reliable, high-speed processing.",
    techTitle: "Our Technology Stack",
    techText: "PDFCanada.ca is built using modern WebAssembly (WASM) modules. This allows us to run complex C++ and JavaScript engines directly in your browser's memory, providing the speed of a desktop application with the security of a sandboxed web environment."
  },
  delete: {
    title: "Delete PDF Pages Online - Remove Pages from PDF for Free | pdfcanada.ca",
    desc: "Best PDF page remover. Remove unwanted pages from your PDF securely. Select pages visually and delete them instantly. No uploads—all processing happens on your device. Free & private.",
    h1: "Delete PDF Pages",
    subtitle: "The polite way to remove pages from a PDF.",
    content: "Need to delete pages from your PDF? Our tool makes it easy to select and remove unwanted pages. Whether it's a blank page, a mistake, or sensitive information, you can clean up your document in seconds.",
    steps: [
      "Click the 'Select File' button to choose your PDF document.",
      "You will see thumbnails of all your pages. Simply click on the pages you wish to remove. They will be marked with a trash icon.",
      "Click 'Remove Pages' to instantly download your clean, updated PDF."
    ],
    quickAnswer: {
      question: "How do I remove specific pages from a PDF?",
      answer: "You can remove pages from a PDF for free using our local-first tool. Simply select the pages you want to delete and download the updated file. No signup or upload required.",
      tool: "Delete PDF Pages",
      steps: ["Upload your PDF", "Select unwanted pages", "Download cleaned PDF"]
    }
  },
  pdfPageRemover: {
    title: "PDF Page Remover Online - Remove Pages from PDF for Free | pdfcanada.ca",
    desc: "Best PDF page remover. Remove unwanted pages from your PDF securely. Select pages visually and delete them instantly. No uploads—all processing happens on your device. Free & private.",
    h1: "PDF Page Remover",
    subtitle: "The polite way to remove pages from a PDF.",
    content: "Need a PDF page remover? Maybe there's a blank page, or some sensitive info you'd rather not share. Our tool lets you select and remove pages from a PDF file. It happens instantly in your browser.",
    steps: [
      "Click the 'Select File' button to choose your PDF document.",
      "You will see thumbnails of all your pages. Simply click on the pages you wish to remove. They will be marked with a trash icon.",
      "Click 'Remove Pages' to instantly download your clean, updated PDF."
    ],
    quickAnswer: {
      question: "What is the best way to remove pages from a PDF?",
      answer: "The best way is to use a secure, browser-based tool like pdfcanada.ca that processes your file locally. This ensures your data never leaves your device while removing unwanted pages.",
      tool: "PDF Page Remover",
      steps: ["Select your PDF file", "Click pages to delete", "Save your new PDF"]
    }
  },
  flatten: {
    title: "Flatten PDF Online - Make PDF Non-Editable & Secure | pdfcanada.ca",
    desc: "Convert PDF pages to uneditable images to prevent changes. Flatten forms and protect your content securely via local processing. 100% private, no uploads.",
    h1: "Flatten PDF",
    subtitle: "Lock your document to prevent edits or selection.",
    content: "Need to ensure your PDF can't be edited easily? Our tool flattens your document by converting each page into a high-quality image. This prevents text selection and modifications by standard PDF editors.",
    steps: [
      "Select the PDF you want to protect.",
      "We will process each page and turn it into a flat image.",
      "Download your new, non-editable PDF."
    ],
    quickAnswer: {
      question: "How do I make a PDF non-editable?",
      answer: "Flattening a PDF converts its pages into images, preventing others from easily editing the text or form fields. Our tool does this locally for maximum privacy.",
      tool: "Flatten PDF",
      steps: ["Upload PDF", "Process to flat images", "Download secure file"]
    }
  },
  rotate: {
    title: "Rotate PDF Online - Permanently Fix PDF Orientation for Free | pdfcanada.ca",
    desc: "Rotate PDF pages left or right and save them permanently. Fix upside-down scans instantly in your browser with 100% privacy. No uploads, proudly Canadian.",
    h1: "Rotate PDF Pages",
    subtitle: "Fix those upside-down scans in seconds, eh?",
    content: "Scanned a document the wrong way? We've all been there. Use this tool to rotate individual pages or the whole document left or right. We'll save a new copy that's oriented correctly.",
    steps: [
      "Upload your PDF file using the file selector.",
      "Click the rotate button on individual pages to turn them 90 degrees, or use the 'Rotate All' buttons at the top.",
      "When it looks right, click 'Apply Rotation' to save your new PDF."
    ],
    quickAnswer: {
      question: "How can I permanently rotate a PDF?",
      answer: "Use an online rotation tool to adjust page orientation (left or right) and save the changes permanently. Our tool is secure and handles rotation right in your browser.",
      tool: "Rotate PDF",
      steps: ["Upload document", "Rotate pages visually", "Save permanently"]
    }
  },
  privatePdf: {
    quickAnswer: {
      question: "Why choose local PDF tools?",
      answer: "Local processing ensures your files never leave your device, offering total privacy, no file size limitations, and instant speed with no upload times.",
      tool: "Private PDF Technology",
      steps: ["Maximum Security", "Instant Speed", "No Data Limits"]
    }
  },
  legalPdf: {
    quickAnswer: {
      question: "Are these PDF tools safe for legal documents?",
      answer: "Yes. Our local-first tools process files entirely in your browser using WebAssembly. No data is ever uploaded to a server, ensuring full compliance with solicitor-client privilege and PIPEDA guidelines.",
      tool: "Legal PDF Tools",
      steps: ["Select sensitive files", "Process locally in browser", "Download securely"]
    }
  },
  heic: {
    title: "HEIC to PDF Converter - Convert iPhone Photos Safely | pdfcanada.ca",
    desc: "Convert HEIC photos to PDF instantly in your browser. Safely transform iPhone photos without uploading to a server. 100% free, private, and local-first processing.",
    h1: "Convert HEIC to PDF",
    subtitle: "Make iPhone photos compatible with everything.",
    content: "If you've ever tried to send an iPhone photo to a PC or upload it to a government form, you've probably run into the .HEIC problem. Apple devices use HEIC files for photos, which are great for saving space but tricky for sharing. That's where we come in. Our tool lets you convert heic to pdf quickly and easily. Whether you're wondering how do i convert heic to pdf for a job application or how to change a heic file to pdf for your taxes, our Canadian-made tool is the answer.\n\nWe process your files locally, which means if you need to know how to change heic to pdf without uploading your personal photos to a server, this is the safest way. You can change heic file to pdf or even combine heic to pdf (by converting them one by one!) without worrying about privacy. We support standard .heic files and turn them into high-quality PDFs.\n\nSo, if you're looking for a heic to pdf converter that respects your data, give pdfcanada.ca a try. We help you learn how to change a heic to a pdf instantly. No need for expensive software like Adobe convert heic to pdf—our free tool does the trick right in your browser. From conversion heic to pdf to ensuring your memories are safe, we've got you covered.",
    steps: [
      "Select your .HEIC image file from your computer or phone.",
      "Our tool automatically processes the image locally in your browser to convert it.",
      "Click 'Download' to save your new PDF file."
    ],
    quickAnswer: {
      question: "How do I convert HEIC photos to PDF on a PC?",
      answer: "You can convert Apple's HEIC photos to PDF for free without specialized software. Use our browser-based converter to transform iPhone photos into PDFs locally.",
      tool: "HEIC to PDF",
      steps: ["Choose HEIC images", "Auto-convert locally", "Download PDFs"]
    },
    faq: [
      {
        question: "How do I convert HEIC to PDF for free?",
        answer: "It's simple! Use our heic to pdf converter above. Just select your file, and we'll handle the conversion heic to pdf right here on your device."
      },
      {
        question: "How do you convert HEIC to PDF on Windows?",
        answer: "Windows doesn't always open HEIC files by default. But you can use our website to change heic file to pdf instantly without installing any plugins."
      },
      {
        question: "How to change a HEIC to PDF on iPhone?",
        answer: "You can use this site directly on your iPhone! It's a quick way to convert heic to pdf convert tasks without downloading extra apps."
      },
      {
        question: "Can I combine HEIC to PDF?",
        answer: "Currently, we convert one image at a time to keep things fast and simple. You can convert multiple files one after another to change from heic to pdf."
      },
      {
        question: "Is it secure to change HEIC to PDF here?",
        answer: "Absolutely. Unlike other tools (like heic to pdf ilovepdf), we process everything locally. Your photos never leave your device, making it the safest way to convert a heic to pdf."
      }
    ]
  },
  epubToPdf: {
    title: "EPUB to PDF Converter - Convert Ebooks to PDF for Free | pdfcanada.ca",
    desc: "Convert EPUB ebooks to PDF format instantly. Read your books on any device. Secure local-first conversion—your files never leave your browser. Fast & Free.",
    h1: "Convert EPUB to PDF",
    subtitle: "Read your favorite ebooks on any device, eh?",
    content: "Looking to convert an EPUB to PDF? You've landed in the right spot, friend. Whether you need to print an ebook, share it with a colleague who doesn't have an e-reader, or just prefer the universality of a PDF, our tool is here to help. Using our free EPUB to PDF converter, you can easily change EPUB to PDF format without your file ever leaving your computer. That's right—we process everything locally, making it the safest way to transform PDF to EPUB or vice versa. We handle the formatting so you don't have to worry about how to convert epub to pdf manually.\n\nWhy use our tool? Well, if you're wondering how do i convert epub to pdf without signing up for sketchy sites, this is your answer. We support standard .epub files and convert them into clean, readable PDFs. This is perfect for students, professionals, and anyone who needs to translate epub to pdf for wider compatibility. So if you need to convert a epub to pdf, convert an epub to pdf, or just want a reliable epub file convert to pdf solution, give ours a try. It's built right here in Canada, and we promise to treat your files with the utmost respect. No data collection, just simple, polite conversion.",
    steps: [
      "Click 'Select File' to upload your .epub file.",
      "Our local engine will instantly start to convert epub to pdf format directly in your browser.",
      "Wait a brief moment as we format the pages to look just right.",
      "Download your new PDF file. It's now ready to open on any device that supports PDF!"
    ],
    quickAnswer: {
      question: "How do I convert an EPUB ebook to PDF?",
      answer: "You can convert EPUB to PDF instantly using our browser-based tool. It formats your ebook into a clean PDF document for easy reading or printing, processing everything locally.",
      tool: "EPUB to PDF",
      steps: ["Upload .epub file", "Wait for local formatting", "Download your PDF"]
    },
    faq: [
      {
        question: "How to convert EPUB to PDF for free?",
        answer: "It's super easy, eh! Just use our tool above. Upload your file, and we convert epub to pdf instantly in your browser. No hidden fees, no subscriptions."
      },
      {
        question: "How do I convert EPUB to PDF without losing formatting?",
        answer: "Our smart converter tries its best to preserve your ebook's layout. We transform the EPUB structure into standard PDF pages so it looks great on any screen or paper."
      },
      {
        question: "Can I convert an EPUB file to PDF on my phone?",
        answer: "You sure can! Our site works great on mobile. Whether you're on iPhone or Android, you can change epub to pdf right from your browser."
      },
      {
        question: "How to open EPUB file as PDF?",
        answer: "You can't open an EPUB directly as a PDF, you need to convert it first. Use our simple tool to convert epub file to pdf, and then you can open it in Adobe Reader, Preview, or any other PDF viewer."
      },
      {
        question: "Is it safe to convert my ebook online?",
        answer: "With pdfcanada.ca, it is! We process everything locally on your device. Unlike other sites where you upload your book to a server, we convert an epub to pdf right on your computer. Your files never leave your hands."
      }
    ]
  },
  pdfToEpub: {
    title: "PDF to EPUB Converter - Make PDF E-Reader Ready for Free | pdfcanada.ca",
    desc: "Convert PDF to reflowable EPUB format for Kindle, Kobo, or mobile. Local-first processing ensures 100% privacy. No uploads required, proudly Canadian.",
    h1: "Convert PDF to EPUB",
    subtitle: "Take your reading material to go on your e-reader.",
    content: "Trying to read a standard PDF on an e-reader can be a bit of a hassle, eh? Text is too small, zooming is awkward... that's where we come in. Our tool lets you convert pdf to epub format, making your documents reflowable and easy to read on any screen size. Whether you're looking to convert pdf file to epub for your morning commute or need a reliable pdf to epub converter for your personal library, we've got you covered.\n\nWe know you might be asking, 'how do you convert pdf to epub securely?' or 'how to convert pdf to epub without losing my data?' The answer is local processing. Unlike other tools that upload your private docs to a server, our AI-enhanced engine handles the convert pdf to epub task right on your device. It minimizes formatting errors and attempts to preserve the structure of your document. If you've been searching for how to turn pdf into epub, how to convert a pdf to an epub, or even AI convert pdf to epub, you'll find our solution robust and privacy-focused.\n\nUse our tool to transform pdf to epub today. It supports converting bulk text and simple images into the .epub format. So stop squinting at tiny PDF text and change epub to pdf (or back again!) with pdfcanada.ca. We make it easy to learn how to convert pdf to epub format and take your reading material with you, wherever the True North leads you.",
    steps: [
      "Select the PDF file you wish to convert to an ebook.",
      "Our system analyzes the text and layout to convert pdf to epub optimally.",
      "The conversion happens locally—secure and fast.",
      "Download your .epub file and transfer it to your Kobo, Kindle, or tablet.",
      "Enjoy a better reading experience, eh!"
    ],
    quickAnswer: {
      question: "How do I convert a PDF to EPUB for my Kindle?",
      answer: "To read a PDF on an e-reader, convert it to the reflowable EPUB format. Our tool extracts the text and optimizes it for small screens, ensuring a comfortable reading experience.",
      tool: "PDF to EPUB",
      steps: ["Select your PDF", "Auto-analyze and convert", "Download .epub file"]
    },
    faq: [
      {
        question: "How to convert PDF to EPUB for Kindle or Kobo?",
        answer: "Most e-readers prefer EPUB files (or KEPUB for Kobo). Simply use our tool to convert pdf to epub format, download the file, and transfer it to your device via USB or email."
      },
      {
        question: "How to turn PDF into EPUB with AI?",
        answer: "Our tool uses smart logic (you could call it AI-lite) to detect paragraphs and headings, helping to AI convert pdf to epub cleanly so text flows naturally on small screens."
      },
      {
        question: "How do you convert PDF to EPUB on Mac or Windows?",
        answer: "You don't need to install any software. Just visit pdfcanada.ca, select your file, and we'll convert pdf file to epub right in your browser. It works on Windows, Mac, and Linux."
      },
      {
        question: "Can I convert scanned PDFs to EPUB?",
        answer: "This tool works best with standard PDFs containing text. For scanned documents, you might want to use our OCR tool first to extract the text, then save it as a digital format."
      },
      {
        question: "How convert PDF to EPUB without formatting errors?",
        answer: "PDFs are fixed-layout, while EPUBs are flowable, so it's tricky! We try our best to strip out headers and footers to give you a clean reading experience."
      }
    ]
  },
  pdfToKindle: {
    title: "PDF to Kindle Converter - Optimize PDFs for Amazon Kindle | pdfcanada.ca",
    desc: "Convert PDF for Kindle with enhanced reflow and pop-up footnotes. 100% free, private, and local. Optimized for Kindle Paperwhite, Oasis, and Scribe.",
    h1: "Convert PDF to Kindle",
    subtitle: "The best way to read your PDFs on a Kindle, eh?",
    content: "Love your Kindle but hate reading PDFs on it? We've all been there. Small text, no font control, and those annoying margins. Our PDF to Kindle tool is designed specifically to solve this. It converts your PDF into a highly-optimized EPUB 3 format that Kindles love. We use advanced heuristics to merge broken paragraphs, detect headings for a proper Table of Contents, and most importantly, we turn bottom-of-the-page footnotes into Kindle's famous pop-up footnotes.\n\nEverything happens locally on your computer. Your books, research papers, and private documents never touch a server. If you want to know how to convert PDF for Kindle without compromise, this is the tool. We support the latest Kindle features like 'Enhanced Typesetting' and 'Page Flip' by ensuring the underlying code is clean and semantic.",
    steps: [
      "Choose the PDF file you want to read on your Kindle.",
      "Our engine automatically detects footnotes, headers, and headings.",
      "The conversion happens entirely in your browser—completely private.",
      "Download the optimized file and send it to your Kindle (@kindle.com) or via USB."
    ],
    quickAnswer: {
      question: "How do I make a PDF look good on my Kindle?",
      answer: "Don't just send the raw PDF. Use a specialized converter to create a reflowable ebook. Our tool optimizes text, removes margins, and enables Kindle features like font adjustment and pop-up footnotes.",
      tool: "PDF to Kindle",
      steps: ["Upload PDF", "Auto-optimize for Kindle", "Download and transfer"]
    },
    faq: [
      {
        question: "Why convert PDF to Kindle format instead of reading the PDF?",
        answer: "PDFs have a fixed layout. On a Kindle's small screen, this means tiny text and constant panning. Converting to our optimized format allows the text to 'reflow', letting you change font sizes and read comfortably."
      },
      {
        question: "Does this tool support Kindle pop-up footnotes?",
        answer: "Yes! Our engine identifies footnotes at the bottom of PDF pages and converts them into semantic EPUB footnotes that trigger the Kindle pop-up preview."
      },
      {
        question: "How do I transfer the file to my Kindle?",
        answer: "After downloading, you can use Amazon's 'Send to Kindle' service (via email or web) or transfer it manually via USB cable into the 'documents' folder."
      },
      {
        question: "Is it safe to convert my private books here?",
        answer: "Absolutely. We are the only converter that does this entirely on your device. Your files never leave your browser, ensuring 100% privacy."
      }
    ]
  },
  fillable: {
    title: "Make PDF Fillable Online - Free & Secure Interactive Form Creator | pdfcanada.ca",
    desc: "Add fillable text fields to any PDF instantly. Create professional interactive forms for free securely in your browser. No uploads—100% private & Canadian.",
    h1: "Make PDF Fillable",
    subtitle: "The polite way to create interactive forms.",
    content: "Turn a flat document into an interactive form. We automatically detect underscores (____) and checkboxes ([ ]) on your selected pages and turn them into real, fillable fields.",
    steps: [
      "Upload a PDF form that has static lines or checkboxes.",
      "Select the pages you want us to scan.",
      "Click 'Auto-Detect & Fill'. We will calculate where the fields should be.",
      "Download your interactive PDF form."
    ],
    quickAnswer: {
      question: "How can I make a standard PDF fillable for free?",
      answer: "Our tool automatically detects lines and checkboxes in your document and adds interactive text fields. It's the easiest way to create a fillable form without expensive software.",
      tool: "Make PDF Fillable",
      steps: ["Upload static PDF", "Scan for auto-detection", "Download interactive form"]
    }
  },
  organizePdf: {
    title: "Organize PDF Online - Reorder & Rearrange PDF Pages for Free | pdfcanada.ca",
    desc: `Rearrange PDF pages easily with drag-and-drop in ${CURRENT_YEAR}. Reorder your PDF document securely in your browser. No uploads—your files remain 100% private on your device.`,
    h1: "Organize PDF Pages",
    subtitle: "Get your document's pages in the perfect order.",
    content: "Need to fix the page order of your PDF? Our Organize PDF tool lets you drag and drop pages to rearrange them exactly how you want.",
    steps: [
      "Upload your valid PDF file.",
      "Drag and drop the page thumbnails to reorder them.",
      "Click 'Save Organized PDF' to download.",
      "Download your meticulously organized PDF document."
    ],
    quickAnswer: {
      question: "How can I rearrange pages in a PDF document?",
      answer: "You can reorder PDF pages by simply dragging and dropping thumbnails into the desired sequence. Our Organize tool lets you rearrange your document quickly and securely.",
      tool: "Organize PDF",
      steps: ["Upload your PDF", "Drag pages to reorder", "Save your organized file"]
    },
    faq: [
      { question: "Can I move pages between PDFs?", answer: "Not yet! Currently you can only reorder pages within a single file." },
      { question: "Is my original file changed?", answer: "No way! We create a new copy with the new order." }
    ]
  },
  cbrToPdf: {
    title: "CBR to PDF Converter - Convert Comic Books Online | pdfcanada.ca",
    desc: `Read your comics on any device. Our ${CURRENT_YEAR} guide shows you how to convert CBR/CBZ to PDF securely in your browser. No uploads, processed entirely on your device.`,
    h1: "Convert CBR to PDF",
    subtitle: "The definitive guide to digital comic conversion.",
    content: "Got a collection of digital comics in CBR or CBZ format? While these are great for specialized readers, sometimes you just want a PDF to read on your tablet or share with a friend. Our CBR to PDF converter makes it easy to change comic book archives into standard PDF documents. We support both CBR (RAR-based) and CBZ (ZIP-based) files. \n\nMost online converters make you upload your comics to their servers. But digital comics can be large, and your privacy matters. That's why pdfcanada.ca processes your comics right in your browser. No uploading, no waiting for a queue, just fast and secure conversion. Whether you're looking for how to convert cbr to pdf for free or need a bulk cbr to pdf tool, we've got you covered with our Canadian-made tool.",
    steps: [
      "Select your .CBR or .CBZ file from your device.",
      "Our system extracts the images and compiles them into a single PDF document.",
      "Once the conversion is complete, click 'Download' to save your new PDF comic."
    ],
    quickAnswer: {
      question: "How do I convert a CBR comic book to PDF?",
      answer: "You can convert digital comic book formats like CBR (RAR) and CBZ (ZIP) to PDF for free using our local converter. It extracts the images and compiles them into a single, shareable PDF file.",
      tool: "CBR to PDF",
      steps: ["Choose your comic file", "Extract images locally", "Download your PDF book"]
    },
    faq: [
      {
        question: "What is the difference between CBR and CBZ?",
        answer: "CBR files are RAR archives renamed, while CBZ files are ZIP archives renamed. Both contain images (usually JPG or PNG) of comic book pages. Our tool supports both!"
      },
      {
        question: "Can I convert large CBR files to PDF?",
        answer: "Yes! Since the conversion happens on your device, the only limit is your browser's memory. We don't have the file size limits that cloud-based converters do."
      },
      {
        question: "Is this comic converter safe?",
        answer: "Absolutely hoser! Your files are never uploaded to our servers. All extraction and PDF creation happens locally on your computer."
      }
    ]
  },
  sign: {
    title: "E-Sign PDF Online - Secure & Free Digital Signatures | pdfcanada.ca",
    desc: `Sign PDF documents online securely in ${CURRENT_YEAR}. Add signatures, initials, and dates locally in your browser. Your sensitive documents never leave your computer. Fast & Free.`,
    h1: "E-sign PDF Documents",
    subtitle: "The most secure way to sign contracts and forms.",
    content: "Need to sign a contract, lease, or form? Our e-sign tool lets you add professional signatures, initials, and dates to any PDF. Everything happens locally on your device, so your sensitive documents and signatures never leave your browser.",
    steps: [
      "Upload the PDF document you need to sign.",
      "Choose to either draw, type, or upload your signature.",
      "Place your signature, initials, or the current date anywhere on the document.",
      "Resize and move elements until they look just right.",
      "Click 'Sign PDF' to download your securely signed document."
    ],
    quickAnswer: {
      question: "How can I sign a PDF document online securely?",
      answer: "Use an e-sign tool that processes your signature locally in the browser to ensure maximum security. Our tool allows you to draw, type, or upload signatures without sending your document to a server.",
      tool: "Sign PDF",
      steps: ["Upload your document", "Add signature and date", "Download signed PDF"]
    }
  },
  pdfToWord: {
    title: "How to Convert and Transform PDF to Word | Free & Secure",
    desc: `Convert PDF to Word on Mac, PC, or Mobile. Transform PDF to editable DOCX documents locally for free. Secure, private, and no signup needed.`,
    h1: "Convert PDF to Word",
    subtitle: "Transform your PDFs into editable Word documents—accurately & securely.",
    content: "Need to change a PDF to Word? Our tool lets you transform PDF to Word format effortlessly. Your local processing ensures you can switch PDF to Word without your sensitive data ever leaving your device.",
    steps: [
      "Select the PDF you want to transform into Word.",
      "Our tool extracts the text and formatting into a .docx document.",
      "Download your editable Word file instantly."
    ],
    quickAnswer: {
      question: "How do I convert a PDF to an editable Word document for free?",
      answer: "You can convert PDF to Word (.docx) for free using our browser-based converter. It allows you to save PDF as Word and extract layout information, so you can edit the document in Microsoft Word or Google Docs without Acrobat.",
      tool: "PDF to Word",
      steps: ["Upload your PDF", "Transform to Word format", "Download editable .docx"]
    }
  },
  wordToPdf: {
    title: "How to Convert and Save Word as PDF | Free & Secure",
    desc: `Convert Word to PDF on Mac, PC, or Mobile for free. Secure local tool to save DOCX as PDF instantly. No uploads, 100% private.`,
    h1: "Convert Word to PDF",
    subtitle: "Professional PDFs from your Word documents instantly.",
    content: "Need to convert a Word to a PDF? Turn your Word documents into high-quality PDFs while keeping your data 100% private. Perfect for sharing and printing.",
    steps: [
      "Upload your .docx file to save as PDF.",
      "We process the document and generate a professional PDF.",
      "Download your new PDF file instantly."
    ],
    quickAnswer: {
      question: "What's the best way to convert from Word document to PDF?",
      answer: "The best way is to use a secure local converter to save Word as PDF. Our tool turns your .docx files into professional PDFs instantly without requiring an upload to a server.",
      tool: "Word to PDF",
      steps: ["Select .docx document", "Save Word as PDF", "Download your file"]
    }
  },
  rtfToPdf: {
    title: "RTF to PDF Online - Convert Rich Text Format to PDF for Free | pdfcanada.ca",
    desc: `Convert RTF (Rich Text Format) documents to PDF instantly in ${CURRENT_YEAR}. Our secure converter processes files locally—no uploads, no tracking, just fast and free Canadian service.`,
    h1: "Convert RTF to PDF",
    subtitle: "Professional PDFs from your RTF files instantly.",
    content: "Turn your RTF documents into high-quality PDFs. Perfect for sharing and archiving, with local security you can trust.",
    steps: [
      "Upload your .rtf file.",
      "We process the document and generate a professional PDF.",
      "Download your new PDF file."
    ],
    quickAnswer: {
      question: "What's the best way to convert RTF to PDF?",
      answer: "The best way is to use a secure local converter that preserves your formatting. Our tool turns your .rtf files into professional PDFs instantly without requiring an upload to a server.",
      tool: "RTF to PDF",
      steps: ["Select .rtf document", "Generate professional PDF", "Download your file"]
    }
  },
  crop: {
    title: "Crop PDF Online - Trim PDF Margins & Resize Pages for Free | pdfcanada.ca",
    desc: "Crop PDF pages instantly to remove white space or focus on content. Adjust margins securely in your browser. No uploads, processed entirely on your device.",
    h1: "Crop PDF Pages",
    subtitle: "Trim those margins and focus on what matters.",
    content: "Need to remove white space or focus on a specific area of your document? Our crop tool lets you adjust the margins of your PDF pages effortlessly. It's fast, free, and happens entirely on your device.",
    steps: [
      "Upload your PDF document.",
      "Use the selector to define your crop area.",
      "Apply the crop and download your updated PDF."
    ],
    quickAnswer: {
      question: "How do I crop PDF pages to remove white space?",
      answer: "Use a visual crop tool to select the content you want to keep and trim away the white margins. Our tool allows you to apply the crop to one or all pages securely in your browser.",
      tool: "Crop PDF",
      steps: ["Upload PDF file", "Define crop area visually", "Download trimmed PDF"]
    }
  },
  compress: {
    title: "Compress PDF Online - Reduce File Size without Losing Quality | pdfcanada.ca",
    desc: "Compress PDF files to reduce size while keeping original quality. Optimize PDFs securely in your browser—no uploads required, 100% private & proudly Canadian.",
    h1: "Compress PDF Size",
    subtitle: "Make your files smaller without losing quality, eh?",
    content: "Need to email a large PDF but it's too big? Our Compress PDF tool reduces the file size while maintaining excellent quality. Choose from three compression levels to find the perfect balance.",
    steps: [
      "Select the PDF file you want to compress.",
      "Choose your compression level (Good, Balanced, or Extreme).",
      "Click 'Compress PDF' and download your smaller file."
    ],
    quickAnswer: {
      question: "How can I reduce my PDF file size without losing quality?",
      answer: "You can compress PDFs by optimizing internal metadata and streams. Our tool offers multiple compression levels, allowing you to choose the best balance between file size and image quality.",
      tool: "Compress PDF",
      steps: ["Choose PDF file", "Select compression level", "Download smaller PDF"]
    },
    faq: [
      { question: "How much can I reduce my PDF file size?", answer: "Depending on the content, you can reduce file size by 50-90%. Image-heavy PDFs see the biggest reductions." },
      { question: "Will compression reduce quality?", answer: "Our 'Good' and 'Balanced' modes maintain excellent quality. 'Extreme' mode prioritizes size over quality." },
      { question: "Is PDF compression secure?", answer: "Yes! All processing happens locally in your browser. Your files never leave your device." }
    ]
  },
  merge: {
    title: "How to Merge PDF Files into One | Free & Secure Online Tool",
    desc: `Combine multiple PDF files into one in seconds. Learn how to merge PDFs locally without Adobe Acrobat. 100% private, free, and proudly Canadian.`,
    h1: "How to Merge PDF Files into One",
    subtitle: "Combine two or more PDFs into a single document securely.",
    content: "Need to merge multiple PDF files into one? Our free tool lets you combine several PDFs, reorder documents by dragging, and join them into a single file without any server uploads. Perfect for merging receipts, contracts, or reports into one professional package.",
    steps: [
      "Select the multiple PDF files you want to merge together.",
      "Drag and drop the documents to rearrange the order.",
      "Click 'Merge PDFs' to download your combined PDF file into one."
    ],
    quickAnswer: {
      question: "How do I merge PDF files into one for free?",
      answer: "Merging PDFs is easy with our local tool. Just upload your documents, arrange them in the correct order, and download the single combined file. It's the best way to merge pdf files into one without Adobe Acrobat.",
      tool: "Merge PDF",
      steps: ["Select two or more PDFs", "Reorder files correctly", "Download merged file"]
    },
    faq: [
      { question: "How to merge 2 pdf files into 1?", answer: "Simply upload both documents, arrange them, and click merge. It is the fastest way to combine two PDF files into one for free." },
      { question: "How do I merge multiple PDF files without Acrobat?", answer: "Our tool processes everything locally in your browser, providing a free alternative to Adobe Acrobat for merging, reordering, and combining several PDF documents." },
      { question: "Will merging affect my PDF quality?", answer: "No! Our merge tool preserves the original quality of all your documents, keeping text sharp and images clear." },
      { question: "Can I murg pdf files here?", answer: "Yes you can! 'Murg pdf' is a common typo for **merge PDF**. Our tool works perfectly for combining your files, no matter how you spell it." }
    ]
  },
  split: {
    title: "Split PDF Online - Separate PDF Pages for Free | pdfcanada.ca",
    desc: "Split your PDF into individual pages instantly. Download as a ZIP file containing each page as a separate PDF. 100% private—no uploads required.",
    h1: "Split PDF into Pages",
    subtitle: "Separate your PDF into individual page files.",
    content: "Need to break apart a PDF document? Our Split PDF tool separates each page into its own file and packages them as a convenient ZIP download. Perfect for extracting specific pages or distributing content.",
    steps: [
      "Upload your PDF document.",
      "Click 'Split PDF' to separate all pages.",
      "Download your ZIP file containing individual PDFs."
    ],
    quickAnswer: {
      question: "How do I split a large PDF into separate pages?",
      answer: "You can split a PDF by extracting each page into its own individual file. Our tool separates the document for you and provides a convenient ZIP download, all processed locally.",
      tool: "Split PDF",
      steps: ["Upload your document", "Extract individual pages", "Download ZIP archive"]
    },
    faq: [
      { question: "How do I split a PDF into separate pages?", answer: "Upload your PDF, click 'Split PDF', and download a ZIP file containing each page as an individual PDF file." },
      { question: "Is splitting PDFs free?", answer: "Yes! Our Split PDF tool is 100% free with no limits. Your files are processed locally in your browser for complete privacy." },
      { question: "Can I split a password-protected PDF?", answer: "You'll need to remove the password first. We recommend using a dedicated PDF unlock tool before splitting." }
    ]
  },
  pdfToXml: {
    title: "PDF to XML Converter - Extract Structured Data | pdfcanada.ca",
    desc: "Convert PDF documents to XML format with structured data extraction. Preserve page layout, text positions, and content hierarchy. Free and private.",
    h1: "Convert PDF to XML",
    subtitle: "Extract structured data from your PDF documents.",
    content: "Transform your PDF documents into structured XML format. Our converter extracts text content with position data, page dimensions, and content hierarchy—ideal for data processing and analysis.",
    steps: [
      "Upload your PDF file.",
      "Click 'Convert to XML' to process.",
      "Download your structured XML file."
    ],
    quickAnswer: {
      question: "How do I extract structured data from a PDF to XML?",
      answer: "Our tool converts PDF documents into XML format, preserving text content, positions, and page layout. This allows for easy data extraction and analysis, all processed locally for privacy.",
      tool: "PDF to XML",
      steps: ["Upload PDF document", "Extract structured data", "Download XML file"]
    },
    faq: [
      { question: "What data is extracted in PDF to XML conversion?", answer: "Our tool extracts text content, page dimensions, text positions, and content structure into a clean XML format." },
      { question: "Can I convert scanned PDFs to XML?", answer: "For scanned documents, we recommend using OCR first to extract text, then convert to XML for best results." },
      { question: "Is my PDF data secure during conversion?", answer: "Absolutely! All processing happens locally in your browser. Your files never leave your device." }
    ]
  },
  xmlToPdf: {
    title: "XML to PDF Converter - Create PDFs from XML Data | pdfcanada.ca",
    desc: "Convert XML documents to PDF format. Transform structured data into clean, readable PDF documents. Free, fast, and processed locally.",
    h1: "Convert XML to PDF",
    subtitle: "Transform XML data into PDF documents.",
    content: "Convert your XML files into professionally formatted PDF documents. Our tool parses XML structure and creates clean, readable PDFs from your data—perfect for reports and documentation.",
    steps: [
      "Upload your XML file.",
      "Click 'Convert to PDF' to process.",
      "Download your generated PDF document."
    ],
    quickAnswer: {
      question: "How do I convert XML data into a PDF document?",
      answer: "Our tool transforms structured XML data into professionally formatted PDF documents. It parses the XML content and renders it into a clean, readable PDF, all processed locally for privacy.",
      tool: "XML to PDF",
      steps: ["Upload XML file", "Generate PDF from data", "Download PDF document"]
    },
    faq: [
      { question: "What XML formats are supported?", answer: "Our converter supports standard XML files. The tool extracts text content and formats it into a clean, readable PDF document." },
      { question: "Can I customize the PDF output?", answer: "Currently, the tool creates a standard formatted PDF. For advanced customization, consider using templates or post-processing tools." },
      { question: "Is there a file size limit?", answer: "There's no strict limit, but very large XML files may take longer to process. All processing is done locally in your browser." }
    ]
  },
  excelToPdf: {
    title: "Excel to PDF Online - Convert XLSX/XLS to PDF for Free | pdfcanada.ca",
    desc: "Create high-quality PDFs from Excel spreadsheets instantly. Our secure converter processes files locally—no uploads, no tracking, just fast and free Canadian service.",
    h1: "Convert Excel to PDF",
    subtitle: "Professional PDFs from your Excel files instantly.",
    content: "Turn your Excel spreadsheets into high-quality PDFs. Perfect for sharing and printing, with local security you can trust.",
    steps: [
      "Upload your .xlsx or .xls file.",
      "We process the spreadsheet and generate a professional PDF.",
      "Download your new PDF file."
    ],
    quickAnswer: {
      question: "How can I convert Excel spreadsheets to PDF free?",
      answer: "You can convert .xlsx and .xls files to high-quality PDFs for free using our local converter. It preserves your table structure and formatting without needing to upload to a server.",
      tool: "Excel to PDF",
      steps: ["Select Excel file", "Generate professional PDF", "Download your file"]
    }
  },
  pdftocsv: {
    title: `Convert PDF to CSV & Excel | Extract Bank Statements Free ${CURRENT_YEAR}`,
    desc: `Convert PDF to CSV, Excel, and QBO for free. Secure local extraction for bank statements (TD, RBC, BMO). PIPEDA compliant, no uploads, 100% private.`,
    h1: "Extract Data from PDF to CSV & Excel",
    subtitle: "Professional-grade bank statement extraction with zero uploads.",
    content: "Stop manual data entry. Our AI-assisted spatial engine extracts tables from bank statements, invoices, and reports into clean CSV or Excel files. Everything is processed locally on your computer for maximum security.",
    steps: [
      "Choose your PDF bank statement or tabular document.",
      "Use 'Smart Merge' to fix multi-line transaction rows.",
      "Export as CSV, XLSX, or QBO for QuickBooks."
    ],
    quickAnswer: {
      question: "How do I convert a PDF bank statement to CSV for Excel?",
      answer: "The best way is to use a local-first converter like pdfcanada.ca that handles multi-line transaction descriptions. It extracts your bank data directly in the browser, ensuring your account details never hit a cloud server.",
      tool: "PDF to CSV",
      steps: ["Upload PDF", "Preview & Merge Rows", "Download CSV/Excel"]
    }
  },
  pdftoexcel: {
    title: "PDF to Excel Online - Convert PDF Tables to XLSX for Free",
    desc: "Convert PDF documents to editable Excel spreadsheets. Professional-grade table extraction with local security. 100% free with no signup.",
    h1: "Convert PDF to Excel",
    subtitle: "Turn tables into spreadsheets instantly.",
    content: "Stop manually typing data. Convert your PDF tables into fully editable Excel (.xlsx) files while maintaining column structure and formatting.",
    steps: [
      "Select the PDF containing your table.",
      "Our engine maps columns and rows locally.",
      "Download your ready-to-use Excel file."
    ],
    quickAnswer: {
      question: "How do I turn a PDF table into an Excel sheet?",
      answer: "Our tool analyzes the spatial layout of your PDF locally to recreate the grid in an XLSX file, preserving rows and columns accurately.",
      tool: "PDF to Excel",
      steps: ["Upload PDF", "Analyze table structure", "Download Excel"]
    }
  },
  analyzepdf: {
    title: "Analyze PDF Security Online - Detect Malware & Phishing | pdfcanada.ca",
    desc: "Scan PDF attachments for phishing links and malware. Local analysis ensures your files never leave your device. 100% free & secure.",
    h1: "Analyze PDF Security",
    subtitle: "Detect hidden threats in your PDF documents.",
    content: "Worried about a suspicious PDF attachment? Our security analyzer scans the file structure for JavaScript, external links, and launch actions that could harm your computer. Everything is analyzed locally, so you don't risk uploading a sensitive file to a public server.",
    steps: [
      "Select the suspicious PDF file.",
      "Our tool parses the file structure locally.",
      "Review the risk score and detailed security report.",
      "Use 'Safe Preview' to view content without executing scripts."
    ],
    quickAnswer: {
      question: "How can I check if a PDF is safe?",
      answer: "Use a local-first PDF analyzer like pdfcanada.ca. It inspects the file's internal structure for hazardous elements like embedded scripts or phishing URLs without opening the file potentially triggering a payload.",
      tool: "Analyze PDF",
      steps: ["Upload PDF", "Check Risk Score", "Safe Preview"]
    },
    faq: [
      { question: "Is it safe to upload suspicious PDFs?", answer: "Yes, because we don't upload them! The analysis happens entirely in your browser using WebAssembly." },
      { question: "Can this tool simplify the PDF?", answer: "Yes, you can check it here and then use our Flatten tool to convert pages to images, neutralizing active scripts." },
      { question: "What does the Safe Preview do?", answer: "It renders the PDF pages as static images with JavaScript disabled, so you can read the content without triggering malicious code." }
    ]
  },
  ultimateGuide: {
    title: `Ultimate ${CURRENT_YEAR} Guide to PDF Tools | Master Your Documents | pdfcanada.ca`,
    desc: `Master PDF management with our definitive ${CURRENT_YEAR} guide. Learn how to edit, merge, and convert PDFs securely using local-first tools. No uploads, 100% private.`,
    quickAnswer: {
      question: "How do I edit a PDF for free without software?",
      answer: "The best way is to use a local-first browser tool like pdfcanada.ca. It allows you to delete pages, rotate, merge, compress, convert, and sign documents directly in your browser without downloading software or uploading your files to a server.",
      tool: "Ultimate PDF Toolkit",
      steps: ["Visit pdfcanada.ca", "Select the tool you need", "Edit locally in browser", "Download your file"]
    }
  },
  editXfa: {
    title: `How to Edit XFA PDFs | Free ${CURRENT_YEAR} Technical Guide | pdfcanada.ca`,
    desc: "Unlock and edit XFA-based PDF forms securely. Our technical guide shows you how to manage dynamic forms locally on your device without uploading private data.",
    quickAnswer: {
      question: "How do I edit an XFA PDF?",
      answer: "XFA PDFs are dynamic forms that can't be edited directly in standard viewers. To edit them, you must 'flatten' them by printing to 'Adobe PDF' or 'Microsoft Print to PDF'. This converts the dynamic form into a standard, editable PDF document.",
      tool: "PDF Flattening Tool",
      steps: ["Open in Acrobat Reader", "Print to PDF (Flatten)", "Save as new PDF", "Edit the new file"]
    }
  },



  // Tools
  toolDelete: "Delete PDF Pages",
  toolDeleteDesc: "Remove unwanted pages.",
  toolFlatten: "Make Non-Editable",
  toolFlattenDesc: "Flatten your PDF content.",
  toolPdfPageRemover: "PDF Page Remover",
  toolPdfPageRemoverDesc: "Remove pages from PDF.",
  toolRotate: "Rotate PDF",
  toolRotateDesc: "Fix upside-down pages.",
  toolHeic: "HEIC to PDF",
  toolHeicDesc: "Convert iPhone photos.",
  toolEpubToPdf: "EPUB to PDF",
  toolEpubToPdfDesc: "Read ebooks as PDFs.",
  toolPdfToEpub: "PDF to EPUB",
  toolPdfToEpubDesc: "Convert for e-readers.",
  toolMakeFillable: "Make PDF Fillable",
  toolMakeFillableDesc: "Auto-add fields to pages.",
  toolCbrToPdf: "CBR to PDF",
  toolCbrToPdfDesc: "Convert comics to PDF.",
  toolSign: "Sign PDF",
  toolSignDesc: "E-sign documents securely.",
  toolPdfToWord: "PDF to Word",
  toolPdfToWordDesc: "Convert PDF to editable Docx.",
  toolWordToPdf: "Word to PDF",
  toolWordToPdfDesc: "Convert Word docx to PDF.",
  toolRtfToPdf: "RTF to PDF",
  toolRtfToPdfDesc: "Convert RTF to PDF.",
  toolExcelToPdf: "Excel to PDF",
  toolExcelToPdfDesc: "Convert Excel sheets to PDF.",
  toolCrop: "Crop PDF",
  toolCropDesc: "Adjust page margins.",
  toolOrganize: "Organize PDF",
  toolOrganizeDesc: "Reorder or remove pages.",
  toolInvoiceOcr: "Invoice OCR",
  toolInvoiceOcrDesc: "Extract data to Excel.",
  toolCsv: "PDF to CSV",
  toolCsvDesc: "Extract tables from PDF.",
  toolPdfToJpg: "PDF to JPG",
  toolPdfToJpgDesc: "Convert PDF to images.",
  toolPngToPdf: "PNG to PDF",
  toolPngToPdfDesc: "Convert images to PDF.",
  toolJpgToPdf: "JPG to PDF",
  toolJpgToPdfDesc: "Convert images to PDF.",
  toolExcel: "PDF to Excel",
  toolExcelDesc: "Convert tables to XLSX.",
  toolPhishingDetector: "Analyze PDF",
  toolPhishingDetectorDesc: "Scan for malware & phishing.",
  toolHtmlToPdf: "HTML to PDF",
  toolHtmlToPdfDesc: "Convert HTML to PDF.",

  toolCompress: "Compress PDF",
  toolCompressDesc: "Reduce file size.",
  toolMerge: "Merge PDF",
  toolMergeDesc: "Combine multiple PDFs.",
  toolSplit: "Split PDF",
  toolSplitDesc: "Separate into pages.",
  toolExtract: "Extract PDF Pages",
  toolExtractDesc: "Extract selected pages.",
  toolPdfToXml: "PDF to XML",
  toolPdfToXmlDesc: "Extract structured data.",
  toolXmlToPdf: "XML to PDF",
  toolXmlToPdfDesc: "Create PDF from XML.",

  // Actions
  uploadTitle: "Upload File",
  uploadDesc: "or drop a file here",
  processedLocally: "Processed locally on your device",
  selectFile: "Select File",
  terms: "By uploading, you agree to our polite Terms of Service.",
  pages: "pages",
  local: "Local",
  menuOpen: "Open menu",
  menuClose: "Close menu",

  // Selection View
  selectPagesHeader: "Select pages:",
  selected: "selected",
  rotateLeft: "Left",
  rotateRight: "Right",
  rotateAllLeft: "Rotate All Left",
  rotateAllRight: "Rotate All Right",
  resetRotations: "Reset",
  selectPagesToFill: "Select pages to scan for fields:",

  // Tool Specific Inputs
  deletePagesInfo: "Click on pages to remove from document. You can use \"shift\" key to set ranges.",
  totalPages: "Total pages",
  pagesToRemove: "Pages to remove",
  signPagesInfo: "Place your signature or initials on the document.",
  addSignature: "Add Signature",
  addInitials: "Add Initials",
  signUpload: "Upload",
  pan: "Pan",
  newSignature: "New signature",
  newInitials: "New initials",
  loadingPage: "Loading page...",
  pageNumber: "Page {number}",
  signTools: "Sign Tools",
  signatures: "Signatures",
  createNewSignature: "Create New Signature",
  initials: "Initials",
  createNewInitials: "Create New Initials",
  annotation: "Annotation",
  date: "Date",
  text: "Text",
  check: "Check",
  btnDeleteEntry: "Delete",
  done: "Done",
  edit: "Edit",
  undo: "Undo",
  redo: "Redo",
  quickAdd: "Quick Add",
  todaysDate: "Today's Date",
  textField: "Text Field",
  of: "of",

  // Form Builder
  fbTitle: "Form Builder",
  fbAddText: "Add Text Box",
  fbAddCheckbox: "Add Checkbox",
  fbCancel: "Cancel",
  fbDownload: "Download Form",
  fbPage: "Page",

  // Buttons
  btnRemove: "Remove Pages",
  btnRotate: "Apply Rotation",
  btnFlatten: "Make Non-Editable",
  btnCrop: "Crop PDF",
  btnConvert: "Convert File",
  btnMakeFillable: "Auto-Detect & Fill",
  btnPreviewCrop: "Preview Crop",
  btnFinalize: "Finalize Crop",
  cropPreview: "Crop Preview",
  before: "Before",
  after: "After",
  previewModeInfo: "Review the result on the right. If it looks good, click Finalize.",
  btnCancel: "Cancel",
  btnSave: "Save",
  btnSplit: "Split PDF",
  btnExtract: "Extract Pages",
  btnCompress: "Compress PDF",
  processedSize: "Processed Size",
  selectAll: "Select All",
  selectNone: "Select None",
  selectOdd: "Select Odd",
  selectEven: "Select Even",
  toolRotateInfo: "Click pages to rotate or use global controls above.",
  readyToConvertDesc: "Ready to convert {fileName}. This might take a few moments depending on the file size, eh.",
  btnTryAgain: "Try Again",
  processing: "Processing...",
  errorGeneric: "An error occurred while processing your file.",

  working: "Working on it...",
  workingDesc: "Scanning for fields and fixing that up for you, eh.",
  doneTitle: "Beauty! It's done.",
  doneDesc: "Your file is ready.",
  doAnother: "Do another one",
  backToHome: "Back to Tools",

  // Errors
  errorTitle: "Oh snap!",
  genericError: "Something went wrong. Technical Details: {detail}",
  fileTypeErr: "Sorry about that, but we don't accept that file type, eh?",
  readErr: "Sorry, we couldn't read that file. It might be corrupted.",
  passwordErr: "This PDF is password protected. Please unlock it first, eh.",
  corruptPdfErr: "The PDF file appears to be corrupt or invalid.",
  conversionErr: "Oh snap! Failed to convert the file. It might be too complex or damaged. Eh?\n\nTechnical Details: {detail}",
  emptyEpubErr: "Could not extract text from this EPUB.",

  // Nav
  navTools: "Tools",
  navGuides: "Guides",
  navAbout: "About",
  navHowTo: "How to use",
  navSupport: "Support Local",
  navPricing: "Pricing",
  footerEditGroup: "PDF Tools",
  footerGuidesGroup: "Editing Guides",
  footerFormatGroup: "Format Guides",
  login: "Log in",
  signup: "Sign up",

  // Footer
  footerBuilt: "Proudly built in the True North Strong and Free.",
  footerMade: "Made with",
  footerLocation: "and Maple Syrup in Toronto, ON.",
  footerRights: "All rights reserved, sorry.",
  footerTagline: "The Great White North's favorite PDF tool.",
  footerPrivacyNotice: "We don't track you. That wouldn't be polite.",
  termsService: "Terms of Service",
  privacy: "Privacy Policy",
  sorryPolicy: "Sorry Policy",
  makeFillableFooter: "How to make a PDF fillable",

  // Pages Content
  pricingTitle: "Simple Pricing",
  pricingSubtitle: "Honest pricing for honest folks.",
  freePlan: "The 'Hoser' Plan",
  freeCost: "$0 CAD",
  freeFeature1: "Unlimited PDF conversions",
  freeFeature2: "No account required",
  freeFeature3: "Polite error messages",
  freeFeature4: "Local processing (Secure)",
  enterprisePlan: "The 'Double Double' Plan",
  enterpriseCost: "$0 CAD",
  enterpriseFeature1: "Everything in Hoser plan",
  enterpriseFeature2: "We say 'Sorry' twice as much",
  enterpriseFeature3: "Priority maple syrup delivery (optional)",

  // Timbits Support Tier
  timbitsPlan: "The 'Timbits' Tip",
  timbitsCost: "$1 CAD",
  timbitsDesc: "A loonie goes a long way, eh?",
  timbitsFeature1: "Keep servers running in the True North",
  timbitsFeature2: "Fund new features & tools",
  timbitsFeature3: "Support indie Canadian devs",
  timbitsFeature4: "Get our heartfelt thanks",
  timbitsButton: "Drop a Loonie",


  privacyTitle: "Privacy Policy",
  privacyEffectiveDate: "Effective Date: January 2026",
  privacyText1: "At pdfcanada.ca, we believe that your business is your business. Because we process files locally on your device using WebAssembly technology, your documents never actually upload to our servers.",
  privacyText2: "We don't use cookies to track you across the web. We don't sell your data. We don't even ask for your email. It's just you and your PDF.",
  privacyGuaranteeTitle: "Local Processing Guarantee",
  privacyGuaranteeText: "We do not operate backend servers for file processing. Everything happens right here in your browser using WebAssembly.",

  // AdSense-required Privacy Policy sections
  privacyCookiesTitle: "Cookies and Tracking Technologies",
  privacyCookiesText: "While we do not use cookies for file processing, third-party services on our website may use cookies and similar tracking technologies. These include advertising partners who help support our free service.",

  privacyThirdPartyTitle: "Third-Party Advertising",
  privacyThirdPartyText1: "We use Google AdSense to display advertisements on our website. Google, as a third-party vendor, uses cookies to serve ads based on your prior visits to our website and other sites on the internet.",
  privacyThirdPartyText2: "Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to our site and/or other sites on the Internet.",
  privacyThirdPartyText3: "You may opt out of personalized advertising by visiting Google's Ads Settings at https://www.google.com/settings/ads. Alternatively, you can opt out of third-party vendor cookies by visiting the Network Advertising Initiative opt-out page at https://optout.networkadvertising.org.",

  privacyDataCollectionTitle: "Information We Collect",
  privacyDataCollectionText: "We collect minimal information necessary to provide our service: basic usage analytics (page views, general location by country), and any information you voluntarily provide when contacting us. We do NOT collect or store your uploaded files—all file processing happens locally in your browser.",

  privacyYourRightsTitle: "Your Privacy Rights (GDPR/CCPA)",
  privacyYourRightsText: "Depending on your location, you may have the right to: access the personal data we hold about you, request correction of inaccurate data, request deletion of your data, opt out of personalized advertising, and lodge a complaint with a supervisory authority. Since we process files locally and collect minimal data, most user data requests can be addressed by simply clearing your browser cache.",

  privacyChildrenTitle: "Children's Privacy",
  privacyChildrenText: "Our service is not directed at children under 13. We do not knowingly collect personal information from children under 13 years of age.",

  privacyContactTitle: "Contact Us",
  privacyContactText: "If you have questions about this Privacy Policy or wish to exercise your privacy rights, please contact us at: privacy@pdfcanada.ca",

  privacyChangesTitle: "Changes to This Policy",
  privacyChangesText: "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 'Effective Date' above.",

  termsTitle: "Terms of Service",
  termsEffectiveDate: "Effective Date: January 2026",
  termsText1: "By using this service, you agree to be nice.",
  termsText2: "Please don't use our tools for illegal stuff. That's not cool.",
  termsText3: "We provide this service 'as is'. If it breaks, we're really sorry, but we can't be held liable for lost data. Always keep a backup, eh?",
  termsText4: "This website may display advertisements served by Google AdSense to help support the service. These ads are managed by Google and may use cookies to personalize content based on your browsing activity. By using this site, you acknowledge and accept the use of advertising.",

  // Additional Terms sections for AdSense compliance
  termsAcceptableUseTitle: "Acceptable Use",
  termsAcceptableUseText: "You agree to use our tools only for lawful purposes. You may not use our service to process documents containing illegal content, malware, or material that infringes on others' intellectual property rights.",

  termsIntellectualPropertyTitle: "Intellectual Property",
  termsIntellectualPropertyText: "The pdfcanada.ca service, including its design, features, and content (excluding user-uploaded documents), is owned by us. Your documents remain your property—we never access, store, or claim ownership of your files.",

  termsDisclaimerTitle: "Disclaimer of Warranties",
  termsDisclaimerText: "Our service is provided 'as is' without warranties of any kind. We do not guarantee uninterrupted service, error-free operation, or specific results. Use our tools at your own discretion.",

  termsLiabilityTitle: "Limitation of Liability",
  termsLiabilityText: "To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our service.",

  termsModificationsTitle: "Modifications to Terms",
  termsModificationsText: "We reserve the right to modify these Terms at any time. Continued use of the service after changes constitutes acceptance of the modified Terms.",

  termsGoverningLawTitle: "Governing Law",
  termsGoverningLawText: "These Terms are governed by the laws of Ontario, Canada. Any disputes shall be resolved in the courts of Ontario.",


  sorryTitle: "Our Official Sorry Policy",
  sorryText1: "In the unlikely event that something goes wrong:",
  sorryList1: "1. We will apologize immediately.",
  sorryList2: "2. We will try to fix it.",
  sorryList3: "3. We will apologize again, just to be safe.",


  howtoTitle: "How It Works",
  howtoStep1: "Select a tool from the main dashboard.",
  howtoStep2: "Choose your file (PDF, HEIC, or EPUB).",
  howtoStep3: "Follow the polite instructions on screen.",
  howtoStep4: "Download your new file. Easy peasy.",

  fillablePageTitle: "How to make a PDF fillable",
  fillablePageSubtitle: "The polite guide to creating interactive forms.",
  fillableIntro: "Looking to create a document that people can actually type into? We use smart technology to find lines and checkboxes automatically.",
  fillableStep1: "Upload your PDF to our 'Make PDF Fillable' tool.",
  fillableStep2: "Select the pages where you want people to be able to type.",
  fillableStep3: "We automatically find '_____' lines and '[ ]' boxes and make them interactive.",
  fillableStep4: "Download and share. Your recipients can now type directly on the page.",
  fillableProTip: "Pro Tip: Use standard underscores for the best detection results.",
  fillableWhy: "Why use our tool?",
  fillableWhyText: "Most software that does this costs an arm and a leg. We do it for free, locally on your device, because that's the neighbourly thing to do.",

  invoiceOcr: {
    dragDrop: "Drag & Drop Invoice Here",
    clickUpload: "or Click to Upload",
    scanBtn: "Scan Invoice",
    scanning: "Scanning...",
    results: "Payment Details",
    fieldId: "Invoice Number",
    fieldDate: "Invoice Date",
    fieldTotal: "Total Amount",
    fieldVendor: "Vendor Name",
    visualConfidence: "Confidence Score",
    exportExcel: "Export to Excel",
    exportCsv: "Export to CSV",
    copyData: "Copy Data",
    newScan: "Scan Another",
    fallbackAlert: "Scanned image detected. Using Tesseract (slower)...",
    successMsg: "Invoice data extracted successfully!"
  },
  pdfToUbl: {
    title: "UBL 2.1 Generator",
    vendor: "Vendor Details",
    customer: "Customer Details",
    invoice: "Invoice Data",
    items: "Line Items",
    totals: "Totals & Tax",
    download: "Download UBL XML",
    scan: "Rescan PDF",
    scanError: "Failed to extract invoice data. Please verify the PDF."
  },
  pdfToCsv: {
    analyzing: "analyzing spatial layout...",
    mapping: "mapping columns and rows locally",
    extractionFailed: "Extraction Failed",
    extractionError: "We couldn't extract the table from this PDF.",
    transactionsFound: "Transactions Found",
    confidence: "Confidence",
    localProcessing: "Local Processing",
    extractionOptions: "Extraction Options",
    smartMerge: "Smart Multiline Merge",
    smartMergeDesc: "Joins wrapped descriptions into single rows",
    normalization: "Financial Normalization",
    normalizationDesc: "Standardizes dates and cleans currency symbols",
    aiInsight: "AI Insight",
    aiMessage: "Our spatial detector noticed this looks like a Bank Statement.",
    showingRows: "Showing {visible} of {total} rows",
    loadMore: "Load More Rows",
    uploadPrompt: "Upload a PDF to see transactions here",
    privacy: "Privacy: 100% Offline",
    poweredBy: "Powered by PDFCA Spatial Engine 2.0",
    transactions: "Transactions",
    credits: "Total Credits",
    debits: "Total Debits",
    net: "Net Change",
    readyToConvert: "Ready to Convert",
    selectAction: "How would you like to process this file?",
    previewEdit: "Preview & Edit",
    previewEditDesc: "View the data, merge columns, and verify before downloading.",
    quickConvert: "Quick Convert",
    quickConvertDesc: "Skip the preview and download the Excel file immediately.",
    successTitle: "Conversion Successful!",
    successDesc: "Your Excel file has been downloaded.",
    viewData: "View Extracted Data",
    convertAnother: "Convert Another"
  },
  barcode: {
    title: "Code 128 Barcode Generator",
    subtitle: "Professional barcode generation with bulk support, multiple formats, and advanced customization",
    singleMode: "Single/Manual",
    bulkMode: "Bulk Generation",
    sequenceTitle: "Generate Sequence",
    prefixLabel: "Prefix (Optional)",
    prefixPlaceholder: "e.g., BC",
    suffixLabel: "Suffix (Optional)",
    suffixPlaceholder: "e.g., -A",
    startLabel: "Start Number *",
    startPlaceholder: "1",
    endLabel: "End Number *",
    endPlaceholder: "100",
    generateBtn: "Generate Sequence",
    sequenceExample: "Example: Prefix \"BC\" + Numbers 1-100 + Suffix \"A\" = BC1A, BC2A, ... BC100A",
    settingsTitle: "Barcode Settings",
    formatLabel: "Format",
    formatAuto: "CODE128 (Auto)",
    formatA: "CODE128A (Uppercase)",
    formatB: "CODE128B (Mixed Case)",
    formatC: "CODE128C (Numeric Only)",
    widthLabel: "Bar Width",
    heightLabel: "Height",
    fontSizeLabel: "Font Size",
    bgColorLabel: "Background Color",
    barColorLabel: "Bar Color",
    showTextLabel: "Show Text Below Barcode",
    exportFormatLabel: "Export Format",
    exportPNG: "PNG Image",
    exportSVG: "SVG Vector",
    exportPDF: "PDF Document",
    inputPlaceholder: "Enter barcode data (e.g., BC123456789)",
    downloadBtn: "Download",
    copyBtn: "Copy",
    copiedBtn: "Copied!",
    addBtn: "Add Another Barcode",
    exportAllBtn: "Export All as PDF",
    barcodes: "barcodes",
    infoTitle: "Code 128 Features:",
    infoAuto: "Auto-selects best encoding for your data",
    infoA: "Uppercase letters and control characters",
    infoB: "Full ASCII (uppercase, lowercase, symbols)",
    infoC: "Numeric only (most compact for numbers)",
    infoBulk: "Bulk generation from sequences or Excel/CSV files",
    infoExport: "Export as PNG, SVG, or multi-page PDF",
    infoCustom: "Customizable colors, sizes, and fonts",
    seoWhat: "What is a Code 128 Barcode?",
    seoUseCases: "Code 128 Barcode Use Cases & Applications",
    seoHowTo: "How to Use This Code 128 Barcode Generator",
    seoBenefits: "Benefits & Advantages of Code 128 Barcodes",
    seoFAQ: "Frequently Asked Questions (FAQ)",
    seoTechSpecs: "Technical Specifications",
    errorInvalid: "Please enter valid start and end numbers (start ≤ end)",
    errorGenerate: "Failed to generate barcode. Please check the input.",
    errorFile: "Failed to parse file. Please check the format.",
    errorExport: "Failed to export PDF",
    errorMinBarcodes: "Please add at least one barcode",
    downloadTitle: "Download or Copy",
    downloadDesc: "Choose your export format (PNG, SVG, or PDF) and click Download. You can also copy individual barcodes to clipboard or export all barcodes as a multi-page PDF."
  },

  kindleSettings: "Kindle Optimization",
  kindleSettingsDesc: "Choose how your PDF is optimized for Kindle",
  reflowableMode: "Reflowable EPUB",
  reflowableDesc: "Best for text-heavy books. Change fonts & sizes.",
  visualMode: "Visual PDF",
  visualDesc: "Smart cropping for complex layouts & columns.",
  kindleScreenSize: "Target Screen Size",
  reflowInfo: "Your PDF will be converted to a reflowable EPUB 3.0 file. Perfect for adjusting font size and reading on any Kindle device.",
  visualInfo: "K2PdfOpt-style optimization: We'll detect columns, crop margins, and re-paginate content to fit your Kindle screen without zooming.",

  // Footer & Navigation
  footerHubsGuides: "Guide Hubs",
  footerResources: "Resources",
  footerConversions: "Conversions",
  footerEditing: "Editing",
  footerSecurity: "Security",
  footerOcrAnalysis: "OCR & Analysis",
  footerViewAllGuides: "View All Guides →",
  footerAboutUs: "About Us",
  footerPricing: "Pricing",
  footerPrivatePdf: "Private PDF Tools",
  footerFinanceSecurity: "Finance PDF Security",
  footerLegalSecurity: "Legal PDF Security",
  footerHealthcareSecurity: "Healthcare PDF",
  footerDownloads: "Downloads",
  footerSurahBaqarah: "Surah Baqarah PDF",
  footerSurahYasin: "Surah Yasin PDF",
  footerSecurityTitle: "Security",



};

export type TranslationStructure = typeof en;

export const translations: Record<Language, TranslationStructure> = {
  en,
  fr: {
    builtIn: "Fait au Canada",
    title: "Outils PDF Polis",
    subtitle: "Gratuit, Sécurisé, Canadien.",
    description: "On vous aide à gérer vos documents sans tracas. Choisissez un outil ci-dessous.",
    localProcessing: "Traitement 100 % local",
    localProcessingDesc: "Vos fichiers ne quittent jamais votre navigateur.",
    noSignup: "Aucune inscription",
    secure: "Sécurisé et privé",
    guarantee: "Garantie sans excuses",
    selectToolTitle: "Choisir un outil",
    eh: " hein ?",
    ultimateGuideLabel: "Guide PDF Ultime 📖",
    editXfaGuide: "Guide Éditer PDF XFA",
    mergePdfGuide: "Guide Fusionner PDF",
    compressPdfGuide: "Guide Compresser PDF",
    rotatePdfGuide: "Guide Pivoter PDF",
    deletePdfGuide: "Guide Supprimer Pages",
    organizePdfGuide: "Guide Organiser PDF",
    makeFillableGuide: "Guide PDF Remplissable",
    cropPdfGuide: "Guide Recadrer PDF",
    splitPdfGuide: "Guide Diviser PDF",
    flattenPdfGuide: "Guide Aplatir PDF",
    invoiceOcrGuide: "Guide OCR Factures",
    wordToPdfGuide: "Guide Word vers PDF",
    pdfToWordGuide: "Guide PDF vers Word",
    rtfToPdfGuide: "Guide RTF vers PDF",
    heicToPdfGuide: "Guide HEIC vers PDF",
    epubToPdfGuide: "Guide EPUB vers PDF",
    pdfToEpubGuide: "Guide PDF vers EPUB",
    cbrToPdfGuide: "Guide CBR vers PDF",
    emailToPdfGuide: "Guide Email vers PDF",
    insertPictureGuide: "Guide Insérer Image",
    pageRemoverGuide: "Guide Suppresseur Pages",
    barcodeGeneratorGuide: "Guide Générateur Code-Barres",
    analyzePdfGuide: "Guide Analyse Sécurité",
    trimPdfGuide: "Guide Rogner PDF",

    // Propositions de valeur
    hpFastTitle: "Ultra Rapide",
    hpFastDesc: "Traitez vos fichiers instantanément dans le navigateur",
    hpFreeTitle: "100 % Gratuit",
    hpFreeDesc: "Sans frais cachés, sans abonnement",
    hpPrivacyTitle: "Priorité Privée",
    hpPrivacyDesc: "Vos fichiers ne quittent jamais votre appareil",

    // Sign Tool
    btnSign: "Terminer & Télécharger",
    drawTitle: "Dessiner",
    typeTitle: "Taper",
    btnCreate: "Créer",
    loading: "Chargement...",
    clickToUpload: "Cliquez pour téléverser le PDF",
    error: "Erreur",
    viewOnline: "Voir PDF en ligne",
    listenAudio: "Écouter Audio",
    page: "Page",
    step: "Étape",
    stepSelectTool: "Choisir un outil",
    stepUploadPdf: "Téléverser PDF",
    stepProcess: "Éditer/Traiter",
    faqTitle: "Foire aux questions",
    upload: "Téléverser",
    select: "Sélectionner",
    fillify: "Remplir (Magique)",
    download: "Télécharger",



    // Compress Tool
    sizeReduced: "Taille réduite",
    addMorePdfs: "Ajouter plus de PDF",
    compressGood: "Bon",
    compressGoodDesc: "Meilleure qualité, texte sélectionnable.",
    compressBalanced: "Équilibré",
    compressBalancedDesc: "Bonne qualité, taille réduite.",
    compressExtreme: "Extrême",
    compressExtremeDesc: "Taille minimale, qualité réduite.",
    compressGoodInfo: "Optimise les métadonnées. Le texte reste sélectionnable.",
    compressBalancedInfo: "Re-rendu à 150 DPI. Le texte devient non-sélectionnable.",
    compressExtremeInfo: "Re-rendu agressif à 96 DPI. Compression maximale.",
    selectCompressionLevel: "Choisir le niveau de compression",

    // Landing Page Sections
    landingPage: {
      // Keep Your Simple Tasks Simple
      simpleTasksTitle: "Gardez Vos Tâches Simples",
      simpleTasksDesc: "pdfcanada.ca est le premier et seul logiciel PDF que vous aimerez. Nous avons tous les outils dont vous avez besoin pour démarrer, gérer et terminer votre travail avec des documents numériques—le tout sans quitter votre navigateur.",

      // Work Directly on Files
      workDirectlyTitle: "Travaillez Directement dans Votre Navigateur",
      workDirectlyDesc: "Faites plus que simplement visualiser des PDF. Fusionnez, compressez, divisez, faites pivoter et convertissez vos documents—le tout directement dans votre navigateur. Avec plus de 20 outils puissants, vous pouvez améliorer et transformer vos fichiers sans jamais les télécharger sur un serveur.",

      // Perfect Document
      perfectDocTitle: "Créez le Document Parfait",
      perfectDocDesc: "Fichier trop volumineux ? Compressez-le. Besoin d'un format spécifique ? Convertissez-le. Les choses deviennent chaotiques ? Fusionnez et divisez les fichiers, ou supprimez les pages excédentaires. pdfcanada.ca a tout ce dont vous avez besoin pour rendre vos documents parfaits.",

      // Privacy First
      privacyFirstTitle: "Votre Confidentialité est Notre Priorité",
      privacyFirstDesc: "Contrairement à d'autres outils PDF, nous traitons tout localement dans votre navigateur. Vos fichiers ne quittent jamais votre appareil. Pas de téléchargement cloud, pas de collecte de données, pas de suivi. Ce qui se passe sur votre ordinateur, reste sur votre ordinateur—hein ?",

      // Why Choose Us section
      whyChooseTitle: "Pourquoi Choisir pdfcanada.ca ?",

      trustedByTitle: "Les Canadiens Nous Font Confiance",
      trustedByDesc: "Plus de 10 000 Canadiens ont utilisé notre service pour simplifier leur travail avec des documents numériques. De Toronto à Vancouver, nous sommes le choix poli pour les outils PDF.",

      freeForeverTitle: "Gratuit pour Toujours",
      freeForeverDesc: "Chaque outil sur pdfcanada.ca est 100% gratuit sans frais cachés, sans filigranes et sans inscription requise. Juste un service canadien honnête.",

      noUploadsTitle: "Aucun Téléchargement Requis",
      noUploadsDesc: "Tout le traitement se fait localement dans votre navigateur grâce à la technologie WebAssembly. Vos fichiers ne touchent jamais nos serveurs, garantissant un maximum de confidentialité et de sécurité.",

      openSourceTitle: "Fait avec Amour au Canada",
      openSourceDesc: "Créé par une petite équipe à Toronto, Ontario. Nous croyons en une technologie axée sur la confidentialité et en gardant les choses simples—à la canadienne.",

      fastSecureTitle: "Ultra Rapide & Sécurisé",
      fastSecureDesc: "Alimenté par votre propre appareil, nos outils traitent les fichiers instantanément sans délais de réseau. De plus, avec le traitement local, vos documents restent 100% sécurisés.",

      pipedaTitle: "Conforme à la LPRPDE",
      pipedaDesc: "Nous prenons les lois canadiennes sur la vie privée au sérieux. Notre approche locale signifie que nous ne collectons, ne stockons ni ne traitons vos informations personnelles.",

      // Final CTA
      ctaTitle: "Prêt à Commencer ?",
      ctaDesc: "Rejoignez des milliers de Canadiens qui font confiance à pdfcanada.ca pour leurs besoins documentaires. Sélectionnez un outil ci-dessus et commencez à travailler—aucune inscription requise.",
      ctaButton: "Explorer tous les outils",
    },

    // Hub Titles
    hubConverter: "Outils de Conversion PDF",
    hubEditing: "Outils d'Édition PDF",
    hubSecurity: "Outils PDF Sécurisés",
    hubBusiness: "Outils PDF Business",

    seo: {
      homeTitle: "Outils PDF Gratuits Canada | Service Sécurisé Sans Téléchargement | pdfcanada.ca",
      homeDesc: "Outils PDF canadiens polis. 100% gratuit et sécurisé en " + CURRENT_YEAR + ". Fusionnez, compressez et convertissez sans téléchargement—vos fichiers ne quittent jamais votre appareil.",
      homeFaq: [
        {
          q: "Est-ce vraiment gratuit ?",
          a: "Absolument ! Tous les outils sur notre site sont 100 % gratuits. Pas de filigrane, pas d'inscription et pas de frais cachés. Nous sommes juste des Canadiens polis qui vous aident à gérer vos documents."
        },
        {
          q: "Mes données sont-elles en sécurité ?",
          a: "C'est ultra sécurisé. Contrairement à d'autres outils qui téléchargent vos fichiers sur un serveur, nous traitons tout localement dans votre navigateur. Vos fichiers ne quittent jamais votre ordinateur."
        },
        {
          q: "Quels outils proposez-vous ?",
          a: "Nous proposons une gamme complète d'outils PDF, notamment : Supprimer des pages, Pivoter PDF, Fusionner PDF, Compresser PDF, HEIC en PDF, EPUB en PDF, CBR en PDF, PDF en Word, Word en PDF, Signer PDF et Créateur de formulaires remplissables."
        },
        {
          q: "Dois-je créer un compte ou m'inscrire ?",
          a: "Aucune inscription requise ! Visitez simplement notre site, sélectionnez votre outil et commencez à travailler sur votre PDF immédiatement. Pas d'email, pas de mot de passe, pas de tracas."
        },
        {
          q: "Puis-je fusionner plusieurs fichiers PDF en un seul ?",
          a: "Absolument ! Notre outil Fusionner PDF vous permet de combiner plusieurs fichiers PDF en un seul document. Glissez-déposez vos fichiers, arrangez-les dans l'ordre et téléchargez votre PDF fusionné."
        },
        {
          q: "Comment convertir un PDF en Word sans perdre le formatage ?",
          a: "Utilisez notre outil PDF en Word. Il extrait le texte et la structure de base de votre PDF vers un fichier .docx. Pour de meilleurs résultats, utilisez des PDF avec du texte sélectionnable plutôt que des images scannées."
        }
      ],
      homeHowToFiles: "Sélectionner les fichiers",
      homeHowToFilesDesc: "Choisissez les fichiers PDF à fusionner",
      homeHowToOrder: "Organiser l'ordre",
      homeHowToOrderDesc: "Glissez-déposez pour définir l'ordre de fusion",
      homeHowToMergeDl: "Télécharger le résultat",
      homeHowToMergeDlDesc: "Cliquez sur fusionner et téléchargez votre PDF combiné",
      homeHowToUpload: "Téléverser PDF",
      homeHowToUploadDesc: "Sélectionnez le fichier PDF à convertir",
      homeHowToProcess: "Traiter la conversion",
      homeHowToProcessDesc: "Notre outil extrait automatiquement le texte et la structure",
      homeHowToWordDl: "Télécharger le fichier Word",
      homeHowToWordDlDesc: "Enregistrez le fichier .docx converti sur votre appareil",
      skipToContent: "Passer au contenu principal",
      pricingTitle: "Tarifs - pdfcanada.ca | Toujours Gratuit",
      pricingDesc: "Nos prix sont simples : 0 $ CAD pour tout le monde. Conversions illimitées et traitement local.",
      privacyTitle: "Politique de Confidentialité et Sécurité des Données | pdfcanada.ca",
      privacyDesc: "Notre engagement " + CURRENT_YEAR + " : tout le traitement PDF se fait localement dans votre navigateur. Vos fichiers ne sont jamais téléchargés, garantissant une sécurité maximale.",
      termsTitle: "Conditions d'Utilisation - Amicales et Sécurisées | pdfcanada.ca",
      termsDesc: "Lisez nos conditions d'utilisation polies de " + CURRENT_YEAR + ". Nous privilégions la confidentialité des documents et des outils conviviaux qui gardent vos fichiers en sécurité sur votre appareil.",
      howtoTitle: "Mode d'emploi - pdfcanada.ca",
      howtoDesc: "Instructions faciles pour supprimer des pages PDF, faire pivoter des documents et convertir des fichiers.",
      supportTitle: "Soutenir Local - pdfcanada.ca",
      supportDesc: "Soutenez l'équipe canadienne qui crée des outils PDF gratuits axés sur la confidentialité.",
      sorryTitle: "Politique d'Excuses - pdfcanada.ca",
      sorryDesc: "Notre garantie de nous excuser si quelque chose tourne mal.",
      fillableTitle: "Comment rendre un PDF remplissable | pdfcanada.ca",
      fillableDesc: "Apprenez à rendre un PDF remplissable gratuitement avec nos outils canadiens.",
      aboutTitle: "À propos de nous - Notre engagement envers la confidentialité | pdfcanada.ca",
      aboutDesc: "Apprenez-en plus sur pdfcanada.ca, notre mission de fournir des outils PDF sécurisés et locaux, et pourquoi nous pensons que vos données doivent rester sur votre appareil."
    },
    aboutPage: {
      title: "Fait pour les Canadiens, par des Canadiens",
      subtitle: "Des outils PDF axés sur la confidentialité qui respectent vos documents et vos données.",
      mission: "Notre mission",
      missionText: "Nous pensons que les outils documentaires essentiels doivent être gratuits, sécurisés et accessibles à tous. Notre objectif est de fournir une alternative axée sur la confidentialité aux processeurs PDF basés sur le cloud, garantissant que les données canadiennes sensibles restent ici même, sur votre appareil.",
      story: "L'histoire de pdfcanada.ca",
      storyText: "Lancé par une petite équipe à Toronto, pdfcanada.ca est né d'une frustration face aux outils PDF modernes. La plupart des convertisseurs en ligne vous obligent à télécharger vos documents sensibles sur des serveurs distants, récoltant souvent vos données au passage. Nous savions qu'il existait une meilleure façon, plus 'polie'. En tirant parti des technologies de navigation modernes comme WebAssembly, nous avons créé une suite d'outils qui fonctionnent entièrement sur votre ordinateur.",
      values: "Nos valeurs fondamentales",
      value1Title: "100 % confidentialité",
      value1Text: "Vos fichiers ne quittent jamais votre appareil. Point final. Nous utilisons le traitement local pour garantir la confidentialité de vos données.",
      value2Title: "Pas de frais",
      value2Text: "Pas d'abonnement, pas de frais cachés et pas de filigranes. Les outils essentiels doivent être gratuits pour tous.",
      value3Title: "Service axé sur l'utilisateur",
      value3Text: "Pas d'inscription, pas d'interfaces complexes et pas de logiciels lourds. Juste des outils simples qui fonctionnent.",
      trustTitle: "Pourquoi faire confiance à PDFCanada.ca ?",
      trust1Title: "Conformité Canadienne",
      trust1Text: "Nous suivons strictement les directives de la LPRPDE, garantissant la souveraineté des données canadiennes en traitant tout sur votre matériel.",
      trust2Title: "Sécurité 'Local-First'",
      trust2Text: "Notre architecture 'Zéro-Téléchargement' signifie que vos documents sensibles ne touchent jamais un serveur cloud.",
      trust3Title: "Technologie Transparente",
      trust3Text: "Nous utilisons des bibliothèques open-source auditées comme pdf-lib et WebAssembly pour un traitement fiable et rapide.",
      techTitle: "Notre Pile Technologique",
      techText: "PDFCanada.ca est bâti sur des modules WebAssembly (WASM) modernes. Cela nous permet d'exécuter des moteurs complexes directement dans la mémoire de votre navigateur, offrant la puissance d'une application de bureau."
    },

    delete: {
      title: "Supprimer des Pages PDF en Ligne - Retirer des Pages PDF Gratuitement | pdfcanada.ca",
      desc: "L'outil de suppression de pages PDF par excellence. Supprimez les pages indésirables de votre PDF en toute sécurité. Sélectionnez les pages visuellement et retirez-les instantanément. Pas de téléversement sur serveur - tout le traitement se fait sur votre appareil. Gratuit et privé.",
      h1: "Supprimer des Pages PDF",
      subtitle: "La manière polie de retirer des pages d'un PDF.",
      content: "Besoin de supprimer des pages de votre PDF ? Notre outil facilite la sélection et le retrait des pages superflues. Qu'il s'agisse d'une page blanche, d'une erreur ou d'informations sensibles, nettoyez votre document en quelques secondes.",
      steps: [
        "Cliquez sur 'Sélectionner le fichier' pour choisir votre document PDF.",
        "Des vignettes de toutes vos pages s'afficheront. Cliquez simplement sur celles à supprimer (une icône de corbeille apparaîtra).",
        "Cliquez sur 'Supprimer les pages' pour télécharger instantanément votre PDF épuré."
      ],
      quickAnswer: {
        question: "Comment supprimer des pages spécifiques d'un PDF ?",
        answer: "Vous pouvez supprimer des pages d'un PDF gratuitement avec notre outil local. Sélectionnez les pages à retirer et téléchargez le fichier mis à jour. Aucune inscription requise.",
        tool: "Supprimer des pages PDF",
        steps: ["Téléversez votre PDF", "Sélectionnez les pages à retirer", "Téléchargez le PDF nettoyé"]
      }
    },
    pdfPageRemover: {
      title: "Extracteur de Pages PDF en Ligne - Retirer Pages Gratuitement | pdfcanada.ca",
      desc: "L'outil idéal pour retirer des pages PDF. Supprimez les pages indésirables en toute sécurité. Sélectionnez visuellement et supprimez instantanément. Aucun envoi sur serveur—tout reste sur votre appareil. Gratuit et privé.",
      h1: "Extracteur de Pages PDF",
      subtitle: "La façon polie d'alléger vos PDF.",
      content: "Besoin de retirer des pages d'un PDF ? Notre outil vous permet de sélectionner et d'extraire les pages d'un fichier PDF instantanément, directement dans votre navigateur.",
      steps: [
        "Cliquez sur 'Choisir un fichier' pour sélectionner votre PDF.",
        "Cliquez sur les miniatures des pages que vous souhaitez retirer.",
        "Cliquez sur 'Supprimer' pour télécharger votre nouveau PDF."
      ],
      quickAnswer: {
        question: "Quelle est la meilleure façon de retirer des pages d'un PDF ?",
        answer: "La meilleure méthode est d'utiliser un outil sécurisé basé sur le navigateur comme pdfcanada.ca, qui traite votre fichier localement. Vos données ne quittent jamais votre appareil.",
        tool: "Extracteur de Pages PDF",
        steps: ["Sélectionnez votre fichier PDF", "Cliquez sur les pages à supprimer", "Enregistrez votre nouveau PDF"]
      }
    },
    flatten: {
      title: "Aplatir PDF en Ligne - Rendre PDF Non-Modifiable et Sécurisé | pdfcanada.ca",
      desc: "Convertissez vos pages PDF en images statiques pour empêcher toute modification. Aplatissez les formulaires et sécurisez votre contenu via un traitement local. 100% privé, aucun envoi de fichier.",
      h1: "Aplatir le PDF",
      subtitle: "Verrouillez votre document pour empêcher les modifications.",
      content: "Vous voulez vous assurer que votre PDF ne soit pas modifiable ? Notre outil 'aplatit' votre document en convertissant chaque page en une image haute qualité. Cela empêche la sélection de texte et les modifications par les éditeurs PDF standards.",
      steps: [
        "Sélectionnez le PDF à protéger.",
        "Nous transformons chaque page en image statique.",
        "Téléchargez votre PDF sécurisé et non modifiable."
      ],
      quickAnswer: {
        question: "Comment rendre un PDF non modifiable ?",
        answer: "Aplatir un PDF convertit ses pages en images, empêchant l'édition du texte ou des champs. Notre outil effectue cette opération localement pour une confidentialité maximale.",
        tool: "Aplatir PDF",
        steps: ["Téléversez le PDF", "Convertissez en images", "Téléchargez le fichier sécurisé"]
      }
    },
    rotate: {
      title: "Pivoter PDF en Ligne - Corriger l'Orientation Gratuitement | pdfcanada.ca",
      desc: "Faites pivoter vos pages PDF et enregistrez-les en permanence. Corrigez les numérisations à l'envers instantanément avec 100% de confidentialité. Aucun téléversement, fièrement canadien.",
      h1: "Pivoter les Pages PDF",
      subtitle: "Redressez vos documents numérisés en quelques secondes.",
      content: "Une page numérisée à l'envers ? Ça arrive. Utilisez cet outil pour pivoter des pages individuelles ou l'ensemble du document.",
      steps: [
        "Téléversez votre fichier PDF.",
        "Cliquez sur le bouton de rotation des pages pour les tourner de 90 degrés, ou utilisez 'Tout Pivoter' pour le document entier.",
        "Une fois satisfait, cliquez sur 'Appliquer' pour sauvegarder."
      ],
      quickAnswer: {
        question: "Comment faire pivoter un PDF de façon permanente ?",
        answer: "Utilisez notre outil en ligne pour ajuster l'orientation des pages (gauche ou droite) et sauvegarder les changements. Le traitement se fait directement dans votre navigateur.",
        tool: "Pivoter PDF",
        steps: ["Téléversez le document", "Pivotez les pages", "Enregistrez le résultat"]
      }
    },
    privatePdf: {
      quickAnswer: {
        question: "Pourquoi choisir des outils PDF locaux ?",
        answer: "Le traitement local garantit que vos fichiers ne quittent jamais votre appareil, offrant une confidentialité totale, aucune limitation de taille de fichier, et une vitesse instantanée sans temps de téléchargement.",
        tool: "Technologie PDF Privée",
        steps: ["Sécurité maximale", "Vitesse instantanée", "Aucune limite de données"]
      }
    },
    legalPdf: {
      quickAnswer: {
        question: "Ces outils PDF sont-ils sûrs pour les documents juridiques ?",
        answer: "Oui. Nos outils locaux traitent les fichiers entièrement dans votre navigateur via WebAssembly. Aucune donnée n'est téléchargée sur un serveur, garantissant la conformité avec le secret professionnel et la LPRPDE.",
        tool: "Outils PDF Juridiques",
        steps: ["Sélectionnez fichiers sensibles", "Traitez localement", "Téléchargez en sécurité"]
      }
    },
    heic: {
      title: "Convertisseur HEIC vers PDF - Convertir Photos iPhone | pdfcanada.ca",
      desc: "Convertissez vos photos HEIC en PDF instantanément. Transformez les images iPhone sans aucun téléversement sur serveur. Gratuit, privé et 100% local.",
      h1: "Convertir HEIC en PDF",
      subtitle: "Rendez vos photos iPhone compatibles avec tout.",
      content: "Les appareils Apple utilisent le format HEIC pour les photos. Bien que performant, il n'est pas toujours compatible avec les formulaires administratifs ou PC. Notre outil convertit vos fichiers HEIC en documents PDF standards faciles à partager. Tout le processus se déroule dans votre navigateur, garantissant la confidentialité de vos photos personnelles.",
      steps: [
        "Sélectionnez votre fichier .HEIC depuis votre ordinateur ou téléphone.",
        "Notre outil convertit automatiquement l'image localement.",
        "Cliquez sur 'Télécharger' pour récupérer votre nouveau PDF."
      ],
      quickAnswer: {
        question: "Comment convertir des photos HEIC en PDF sur PC ?",
        answer: "Vous pouvez convertir les photos HEIC d'Apple en PDF gratuitement sans logiciel spécialisé. Notre convertisseur transforme vos photos iPhone en PDF directement dans votre navigateur.",
        tool: "HEIC en PDF",
        steps: ["Choisissez les images HEIC", "Auto-conversion locale", "Téléchargez les PDF"]
      },
      faq: [
        { question: "Pourquoi convertir HEIC en PDF ?", answer: "Pour une meilleure compatibilité et facilité de partage." },
        { question: "Est-ce sécurisé ?", answer: "Oui, la conversion se fait localement." }
      ]
    },
    epubToPdf: {
      title: "Convertisseur EPUB vers PDF - Ebooks en PDF Gratuit | pdfcanada.ca",
      desc: "Convertissez vos ebooks EPUB en format PDF instantanément. Lisez vos livres sur n'importe quel appareil. Conversion locale sécurisée—vos fichiers ne quittent jamais votre navigateur.",
      h1: "Convertir EPUB en PDF",
      subtitle: "Lisez vos ebooks sur n'importe quel appareil.",
      content: "Vous souhaitez imprimer ou lire un ebook sur un appareil ne supportant pas l'EPUB ? Notre convertisseur transforme vos fichiers EPUB en documents PDF propres et lisibles, parfaits pour l'impression ou le partage.",
      steps: [
        "Téléversez votre fichier .epub.",
        "Patientez un instant pendant le formatage en pages.",
        "Téléchargez votre PDF prêt à être lu ou imprimé."
      ],
      quickAnswer: {
        question: "Comment convertir un fichier EPUB en PDF ?",
        answer: "Transformez vos EPUB en PDF instantanément avec notre outil navigateur. Il reformate votre ebook en un document PDF standard tout en traitant les données localement.",
        tool: "EPUB en PDF",
        steps: ["Téléversez le fichier .epub", "Attendez le formatage", "Téléchargez votre PDF"]
      },
      faq: [
        { question: "Puis-je convertir des EPUB protégés ?", answer: "Non, seulement les fichiers sans DRM." },
        { question: "La mise en page est-elle conservée ?", answer: "Nous faisons de notre mieux pour préserver le formatage original." }
      ]
    },
    pdfToEpub: {
      title: "Convertisseur PDF vers EPUB - Optimiser PDF pour Liseuse | pdfcanada.ca",
      desc: "Convertissez vos PDF en format EPUB fluide pour Kindle, Kobo ou mobile. Le traitement local garantit 100% de confidentialité. Aucun envoi de fichier requis.",
      h1: "Convertir PDF en EPUB",
      subtitle: "Emportez vos lectures sur votre liseuse.",
      content: "Lire un PDF A4 sur un petit écran de liseuse peut être pénible. Notre outil extrait le texte et la structure de votre PDF pour créer un fichier EPUB fluide, dont la taille de texte est ajustable.",
      steps: [
        "Sélectionnez le PDF à convertir.",
        "Notre outil analyse le texte pour créer une structure d'ebook fluide.",
        "Téléchargez le fichier .epub et transférez-le sur votre liseuse."
      ],
      quickAnswer: {
        question: "Comment lire un PDF sur une liseuse confortablement ?",
        answer: "Convertissez-le en format EPUB. Notre outil extrait le texte et l'optimise pour les petits écrans, garantissant une expérience de lecture bien supérieure au PDF statique.",
        tool: "PDF en EPUB",
        steps: ["Sélectionnez votre PDF", "Conversion auto", "Téléchargez le fichier .epub"]
      },
      faq: [
        { question: "Les liens fonctionnent-ils ?", answer: "Oui, les liens internes et externes sont conservés." },
        { question: "Quelle est la taille maximale ?", answer: "Il n'y a pas de limite stricte pour le traitement local." }
      ]
    },
    pdfToKindle: {
      title: "Convertisseur PDF vers Kindle - Optimisez vos PDF pour Amazon Kindle | pdfcanada.ca",
      desc: "Convertissez vos PDF pour Kindle avec mode fluide et notes de bas de page surgissantes. 100% gratuit, privé et local. Optimisé pour Kindle Paperwhite, Oasis et Scribe.",
      h1: "Convertir PDF vers Kindle",
      subtitle: "La meilleure façon de lire vos PDF sur un Kindle, hein ?",
      content: "Vous aimez votre Kindle mais détestez y lire des PDF ? On connaît ça. Petit texte, aucun contrôle sur la police, et ces marges agaçantes. Notre outil PDF vers Kindle est conçu spécifiquement pour régler ça. Il convertit votre PDF en format EPUB 3 hautement optimisé que les Kindles adorent. Nous utilisons des heuristiques avancées pour fusionner les paragraphes brisés, détecter les titres pour une table des matières correcte, et surtout, nous transformons les notes de bas de page en notes surgissantes célèbres de Kindle.\n\nTout se passe localement sur votre ordinateur. Vos livres, travaux de recherche et documents privés ne touchent jamais un serveur. Si vous voulez savoir comment convertir un PDF pour Kindle sans compromis, c'est l'outil qu'il vous faut.",
      steps: [
        "Choisissez le fichier PDF que vous voulez lire sur votre Kindle.",
        "Notre moteur détecte automatiquement les notes, en-têtes et titres.",
        "La conversion se fait entièrement dans votre navigateur—totalement privé.",
        "Téléchargez le fichier optimisé et envoyez-le à votre Kindle."
      ],
      quickAnswer: {
        question: "Comment rendre un PDF lisible sur mon Kindle ?",
        answer: "Ne vous contentez pas d'envoyer le PDF brut. Utilisez un convertisseur spécialisé pour créer un ebook fluide. Notre outil optimise le texte, supprime les marges et active les fonctionnalités Kindle comme l'ajustement de police.",
        tool: "PDF vers Kindle",
        steps: ["Téléverser le PDF", "Optimisation auto Kindle", "Télécharger et transférer"]
      },
      faq: [
        {
          question: "Pourquoi convertir un PDF au format Kindle ?",
          answer: "Les PDF ont une mise en page fixe. Sur le petit écran d'un Kindle, cela signifie un texte minuscule. La conversion permet au texte de devenir 'fluide', vous permettant de changer la taille de la police."
        },
        {
          question: "Est-ce que cet outil supporte les notes surgissantes ?",
          answer: "Oui ! Notre moteur identifie les notes au bas des pages PDF et les convertit en notes sémantiques qui déclenchent l'aperçu surgissant sur Kindle."
        },
        {
          question: "Est-ce sécuritaire pour mes livres privés ?",
          answer: "Absolument. Nous sommes le seul convertisseur qui fait cela entièrement sur votre appareil. Vos fichiers ne quittent jamais votre navigateur."
        }
      ]
    },
    fillable: {
      title: "Rendre PDF Remplissable en Ligne - Créateur de Formulaire | pdfcanada.ca",
      desc: "Ajoutez des champs de texte interactifs à n'importe quel PDF. Créez des formulaires professionnels gratuitement et en toute sécurité. Aucun envoi sur serveur—100% privé.",
      h1: "Rendre un PDF Remplissable",
      subtitle: "Transformez vos documents en formulaires interactifs.",
      content: "Ne remplissez plus vos formulaires à la main. Notre outil détecte automatiquement les lignes (____) et les cases ([ ]) pour les transformer en champs de texte et cases à cocher remplissables.",
      steps: [
        "Téléversez un PDF contenant des lignes ou des cases.",
        "Sélectionnez les pages à analyser.",
        "Cliquez sur 'Détecter et Remplir'. Nous plaçons les champs automatiquement.",
        "Téléchargez votre formulaire PDF interactif."
      ],
      quickAnswer: {
        question: "Comment rendre un PDF standard remplissable ?",
        answer: "Notre outil détecte les lignes et cases existantes pour y superposer des champs interactifs. C'est la solution la plus simple pour créer un formulaire sans logiciel coûteux.",
        tool: "Rendre PDF Remplissable",
        steps: ["Téléversez le PDF", "Détection automatique", "Téléchargez le formulaire"]
      }
    },
    organizePdf: {
      title: "Organiser PDF en Ligne - Réorganiser les Pages Gratuitement | pdfcanada.ca",
      desc: "Réorganisez vos pages PDF par simple glisser-déposer. Mettez de l'ordre dans vos documents en toute sécurité via votre navigateur. Sans téléversement server—confidentialité garantie à 100 %.",
      h1: "Organiser les Pages PDF",
      subtitle: "Mettez les pages de votre document dans l'ordre parfait.",
      content: "Besoin de changer l'ordre des pages ? Notre outil vous permet de glisser-déposer les pages pour les réorganiser exactement comme vous le souhaitez.",
      steps: [
        "Téléversez votre fichier PDF.",
        "Glissez et déposez les vignettes pour changer l'ordre.",
        "Cliquez sur 'Enregistrer' pour valider.",
        "Téléchargez votre PDF parfaitement organisé."
      ],
      quickAnswer: {
        question: "Comment réorganiser les pages d'un PDF ?",
        answer: "Il suffit de glisser-déposer les vignettes des pages dans l'ordre souhaité. Notre outil d'organisation vous permet de restructurer votre document rapidement et localement.",
        tool: "Organiser PDF",
        steps: ["Téléversez le PDF", "Réordonnez les pages", "Enregistrez le fichier organisé"]
      },
      faq: [
        {
          question: "Puis-je déplacer des pages d'un PDF à un autre ?",
          answer: "Pas pour l'instant ! Vous pouvez uniquement réorganiser les pages au sein d'un même fichier."
        }
      ]
    },
    cbrToPdf: {
      title: "Convertisseur CBR vers PDF - Bandes Dessinées en PDF | pdfcanada.ca",
      desc: "Lisez vos bandes dessinées sur n'importe quel appareil. Convertissez CBR/CBZ en PDF en toute sécurité dans votre navigateur. Aucun envoi de fichier.",
      h1: "Convertir CBR en PDF",
      subtitle: "Vos bandes dessinées favorites, prêtes à lire partout.",
      content: "Vous avez des BD numériques en format CBR ou CBZ ? Convertissez-les en PDF pour une compatibilité maximale avec vos tablettes et liseuses. Notre outil extrait les images et crée un album PDF parfait.",
      steps: [
        "Sélectionnez votre fichier .CBR ou .CBZ.",
        "Nous extrayons les planches et générons le PDF.",
        "Une fois terminé, cliquez sur 'Télécharger' pour sauvegarder votre BD."
      ],
      quickAnswer: {
        question: "Comment convertir une bande dessinée CBR en PDF ?",
        answer: "Notre convertisseur local transforme les fichiers CBR (RAR) et CBZ (ZIP) en PDF gratuitement. Il compile les images en un seul fichier facile à lire.",
        tool: "CBR en PDF",
        steps: ["Choisissez le fichier BD", "Extraction locale", "Téléchargez le PDF"]
      },
      faq: [
        {
          question: "Quelle est la différence entre CBR et CBZ ?",
          answer: "CBR est une archive RAR, CBZ une archive ZIP. Les deux contiennent des images de pages. Notre outil gère les deux formats !"
        },
        {
          question: "Puis-je convertir de gros fichiers CBR ?",
          answer: "Oui ! Comme tout se passe sur votre appareil, la seule limite est la mémoire de votre ordinateur, pas notre serveur."
        }
      ]
    },
    sign: {
      title: "Signer PDF en Ligne - Signature Numérique Sécurisée | pdfcanada.ca",
      desc: "Signez vos PDF en ligne en toute sécurité. Ajoutez signature, initiales et date directement dans votre navigateur. Vos documents confidentiels ne quittent jamais votre appareil. Rapide et gratuit.",
      h1: "Signer des Documents PDF",
      subtitle: "La méthode sécurisée pour signer contrats et formulaires.",
      content: "Besoin de signer un contrat, un bail ou un formulaire ? Notre outil de signature électronique vous permet d'ajouter des signatures d'apparence professionnelle, ainsi que vos initiales et la date, sur n'importe quel PDF.",
      steps: [
        "Téléversez le PDF à signer.",
        "Choisissez de dessiner, taper ou téléverser votre signature.",
        "Placez votre signature, vos initiales ou la date à l'endroit désiré.",
        "Ajustez la taille et la position des éléments.",
        "Cliquez sur 'Signer le PDF' pour finaliser et télécharger le document."
      ],
      quickAnswer: {
        question: "Comment signer un PDF en ligne de manière sécurisée ?",
        answer: "Optez pour un outil qui traite votre signature localement dans le navigateur. Le nôtre vous permet de dessiner, taper ou importer votre signature sans jamais envoyer le document sur un serveur.",
        tool: "Signer PDF",
        steps: ["Téléversez le document", "Apposez signature et date", "Téléchargez le PDF signé"]
      }
    },
    pdfToWord: {
      title: "PDF vers Word en Ligne - Convertir en DOCX Éditable | pdfcanada.ca",
      desc: "Convertissez PDF en documents Word modifiables gratuitement. Notre convertisseur local garantit la sécurité de vos données. Rapide, précis et 100% privé.",
      h1: "Convertir PDF en Word",
      subtitle: "Rendez vos PDF à nouveau modifiables.",
      content: "Besoin de modifier le contenu d'un PDF ? Convertissez-le en document Word (.docx) sans effort. Notre technologie extrait le texte et la mise en forme pour vous permettre de travailler dans votre éditeur de texte préféré.",
      steps: [
        "Sélectionnez le PDF à convertir.",
        "Notre outil extrait le texte et recrée la mise en page Word.",
        "Téléchargez votre fichier .docx éditable."
      ],
      quickAnswer: {
        question: "Comment transformer un PDF en document Word ?",
        answer: "Utilisez notre convertisseur par navigateur pour transformer un PDF en Word (.docx). Il récupère le texte et la structure de base, vous permettant d'éditer le document dans Microsoft Word ou Google Docs.",
        tool: "PDF en Word",
        steps: ["Téléversez votre PDF", "Extraction locale", "Téléchargez le fichier Word"]
      }
    },
    wordToPdf: {
      title: "Word vers PDF en Ligne - Convertir DOCX en PDF | pdfcanada.ca",
      desc: "Convertissez Word en PDF sur Mac, PC ou mobile. Convertisseur sécurisé de DOCX en PDF local. 100% privé, aucun envoi sur serveur.",
      h1: "Convertir Word en PDF",
      subtitle: "Des PDF professionnels à partir de vos DOCX.",
      content: "Transformez vos documents Word en PDF impeccables. Idéal pour le partage, l'impression et l'archivage, avec une sécurité locale totale.",
      steps: [
        "Téléversez votre fichier .docx.",
        "Nous convertissons le document en un PDF standard.",
        "Téléchargez votre nouveau fichier PDF."
      ],
      quickAnswer: {
        question: "Quelle est la meilleure façon de convertir Word en PDF ?",
        answer: "Utilisez un convertisseur local qui préserve votre formatage. Notre outil transforme vos .docx en PDF instantanément sans jamais envoyer votre fichier sur le 'cloud'.",
        tool: "Word en PDF",
        steps: ["Sélectionnez le docx", "Générez le PDF", "Téléchargez votre fichier"]
      }
    },
    rtfToPdf: {
      title: "RTF vers PDF en Ligne - Convertir Rich Text Format en PDF | pdfcanada.ca",
      desc: "Convertissez les documents RTF (Rich Text Format) en PDF instantanément. Convertisseur sécurisé traitant les fichiers localement—aucun envoi sur serveur, juste un service rapide et gratuit.",
      h1: "Convertir RTF en PDF",
      subtitle: "Des PDF professionnels à partir de vos fichiers RTF.",
      content: "Transformez vos documents RTF en PDF de qualité. Idéal pour le partage et l'archivage, avec une sécurité locale totale.",
      steps: [
        "Téléversez votre fichier .rtf.",
        "Nous convertissons le document en un PDF standard.",
        "Téléchargez votre nouveau fichier PDF."
      ],
      quickAnswer: {
        question: "Quelle est la meilleure façon de convertir RTF en PDF ?",
        answer: "Utilisez un convertisseur local qui préserve votre formatage. Notre outil transforme vos fichiers .rtf en PDF instantanément sans jamais envoyer votre fichier sur le 'cloud'.",
        tool: "RTF en PDF",
        steps: ["Sélectionnez le fichier .rtf", "Générez le PDF", "Téléchargez votre fichier"]
      }
    },
    crop: {
      title: "Recadrer PDF en Ligne - Ajuster les Marges Gratuitement | pdfcanada.ca",
      desc: "Recadrez vos pages PDF instantanément pour supprimer les espaces blancs. Ajustez les marges en toute sécurité dans votre navigateur sans téléversement.",
      h1: "Recadrer les Pages PDF",
      subtitle: "Supprimez les marges inutiles et recentrez le contenu.",
      content: "Besoin de supprimer des bordures blanches ou de zoomer sur une partie spécifique ? Notre outil de recadrage vous permet d'ajuster les marges facilement. C'est rapide, gratuit et 100% local.",
      steps: [
        "Téléversez votre document PDF.",
        "Utilisez le cadre de sélection pour définir la zone à garder.",
        "Appliquez le recadrage et téléchargez le PDF mis à jour."
      ],
      quickAnswer: {
        question: "Comment recadrer les pages d'un PDF ?",
        answer: "Utilisez notre outil visuel pour sélectionner la zone à conserver. Vous pouvez appliquer le recadrage à une seule page ou à tout le document.",
        tool: "Recadrer PDF",
        steps: ["Téléversez le PDF", "Définissez la zone de coupe", "Téléchargez le PDF ajusté"]
      }
    },
    compress: {
      title: "Compresser PDF en Ligne - Réduire la Taille du Fichier | pdfcanada.ca",
      desc: "Réduisez la taille de vos PDF tout en conservant leur qualité. Optimisation sécurisée dans votre navigateur—aucun envoi sur serveur.",
      h1: "Compresser Fichier PDF",
      subtitle: "Allégez vos fichiers sans sacrifier la qualité.",
      content: "Votre PDF est trop lourd pour être envoyé par courriel ? Notre outil de compression réduit sa taille en optimisant les images et les polices. Choisissez parmi trois niveaux de compression selon vos besoins.",
      steps: [
        "Sélectionnez le PDF à compresser.",
        "Choisissez votre niveau (Bon, Équilibré ou Extrême).",
        "Cliquez sur 'Compresser PDF' et téléchargez le résultat."
      ],
      quickAnswer: {
        question: "Comment réduire la taille d'un PDF sans perdre de qualité ?",
        answer: "Notre outil optimise les métadonnées et les flux internes du fichier. Vous pouvez choisir le compromis idéal entre réduction de taille et qualité visuelle.",
        tool: "Compresser PDF",
        steps: ["Choisissez le PDF", "Sélectionnez le niveau", "Téléchargez le fichier compressé"]
      },
      faq: [
        { question: "De combien puis-je réduire la taille de mon PDF ?", answer: "Cela varie entre 50% et 90%, surtout si le document contient beaucoup d'images." },
        { question: "La qualité sera-t-elle affectée ?", answer: "Nos modes 'Bon' et 'Équilibré' préservent une excellente qualité visuelle. Le mode 'Extrême' sacrifie un peu de netteté pour une taille minimale." },
        { question: "Est-ce sécurisé ?", answer: "Oui ! Le traitement est entièrement local. Vos fichiers ne quittent jamais votre ordinateur." }
      ]
    },
    merge: {
      title: "Fusionner PDF en Ligne - Combiner des Fichiers en un Seul | Gratuit",
      desc: "Fusionnez plusieurs fichiers PDF en quelques secondes. Apprenez comment fusionner des PDF localement sans Adobe Acrobat. 100% privé et gratuit.",
      h1: "Fusionner des Fichiers PDF en un Seul",
      subtitle: "Combinez plusieurs PDF en un seul document soigné.",
      content: "Besoin de rassembler plusieurs documents ? Notre outil de fusion vous permet de combiner plusieurs PDF, de les réordonner par glisser-déposer, et de les fusionner en un seul fichier sans téléversement sur serveur.",
      steps: [
        "Sélectionnez les fichiers PDF à fusionner ensemble.",
        "Réorganisez-les par glisser-déposer.",
        "Cliquez sur 'Fusionner PDF' pour obtenir votre document unique."
      ],
      quickAnswer: {
        question: "Comment assembler plusieurs PDF en un seul ?",
        answer: "C'est simple : téléversez vos documents, mettez-les dans l'ordre voulu, et notre outil local les fusionnera en un seul fichier instantanément sans Adobe.",
        tool: "Fusionner PDF",
        steps: ["Sélectionnez les PDF", "Ordonnez les fichiers", "Téléchargez le fichier fusionné"]
      },
      faq: [
        { question: "Comment fusionner 2 fichiers PDF en 1 ?", answer: "Téléversez simplement vos deux documents, mettez-les dans l'ordre, et cliquez sur fusionner. C'est le moyen le plus rapide d'assembler deux PDF." },
        { question: "Est-ce sécurisé ?", answer: "Oui ! Le traitement est entièrement local. Vos fichiers ne quittent jamais votre ordinateur, ce qui est idéal pour les documents confidentiels." },
        { question: "La qualité est-elle préservée ?", answer: "Absolument, notre outil conserve la résolution originale de toutes vos pages." }
      ]
    },
    split: {
      title: "Diviser PDF en Ligne - Séparer les Pages Gratuitement | pdfcanada.ca",
      desc: "Divisez votre PDF en pages individuelles instantanément. Téléchargez un ZIP contenant chaque page séparée. 100% privé—aucun téléversement.",
      h1: "Diviser PDF en Pages",
      subtitle: "Découpez votre PDF en fichiers individuels.",
      content: "Besoin d'extraire des pages ? Notre outil 'Diviser' sépare chaque page de votre document en un fichier PDF distinct et vous livre le tout dans une archive ZIP.",
      steps: [
        "Téléversez votre document PDF.",
        "Cliquez sur 'Diviser PDF' pour lancer le découpage.",
        "Téléchargez le fichier ZIP contenant vos pages séparées."
      ],
      quickAnswer: {
        question: "Comment séparer les pages d'un PDF ?",
        answer: "Notre outil découpe automatiquement votre document : chaque page devient un fichier PDF indépendant, le tout regroupé dans un ZIP facile à télécharger.",
        tool: "Diviser PDF",
        steps: ["Téléversez le document", "Extraction automatique", "Téléchargez le ZIP"]
      },
      faq: [
        { question: "Le découpage est-il gratuit ?", answer: "Oui, 100% gratuit et illimité. Tout se passe localement sur votre navigateur." },
        { question: "Puis-je diviser un PDF protégé ?", answer: "Vous devez d'abord retirer le mot de passe. Utilisez un outil de déverrouillage au préalable." }
      ]
    },
    pdfToXml: {
      title: "Convertisseur PDF vers XML - Extraire les Données | pdfcanada.ca",
      desc: "Convertissez des documents PDF en format XML structuré. Préservez la mise en page et les données. Gratuit et privé.",
      h1: "Convertir PDF en XML",
      subtitle: "Extrayez des données structurées de vos PDF.",
      content: "Transformez vos PDF en XML. Idéal pour l'archivage ou l'analyse de données, notre outil extrait le texte et sa structure.",
      steps: [
        "Téléversez votre fichier PDF.",
        "Cliquez sur 'Convertir en XML'.",
        "Téléchargez votre fichier XML structuré."
      ],
      faq: [
        { question: "Quelles données sont extraites ?", answer: "Le texte, sa position, et les dimensions des pages sont conservés dans la structure XML." },
        { question: "Puis-je convertir des PDF scannés en XML ?", answer: "Pour les documents scannés, nous recommandons d'utiliser d'abord l'OCR pour extraire le texte, puis de convertir en XML." },
        { question: "Est-ce sécurisé ?", answer: "Oui, le parsing se fait localement. Vos données ne sont jamais envoyées ailleurs." }
      ],
      quickAnswer: {
        question: "Comment convertir PDF en XML ?",
        answer: "Utilisez notre outil pour extraire la structure. C'est rapide et local.",
        tool: "PDF en XML",
        steps: ["Téléversez PDF", "Convertissez", "Téléchargez XML"]
      }
    },
    xmlToPdf: {
      title: "Convertisseur XML vers PDF - Créer des PDF | pdfcanada.ca",
      desc: "Convertissez des fichiers XML en documents PDF lisibles. Transformez vos données brutes en documents formatted. Gratuit et rapide.",
      h1: "Convertir XML en PDF",
      subtitle: "Transformez vos données XML en documents PDF.",
      content: "Générez un PDF propre à partir d'un fichier XML. Notre outil interprète la structure pour créer un document lisible.",
      steps: [
        "Téléversez votre fichier XML.",
        "Cliquez sur 'Convertir en PDF'.",
        "Téléchargez le document généré."
      ],
      faq: [
        { question: "Quels fichiers XML sont supportés ?", answer: "Les fichiers XML standards. Le contenu textuel est extrait et mis en page." },
        { question: "Puis-je personnaliser le style ?", answer: "Pour l'instant, le style est standardisé pour une lisibilité maximale." },
        { question: "Y a-t-il une limite de taille ?", answer: "Il n'y a pas de limite stricte, mais les gros fichiers peuvent être plus lents. Tout est traité localement." }
      ],
      quickAnswer: {
        question: "Comment convertir XML en PDF ?",
        answer: "Notre outil formate vos données XML en un document PDF lisible.",
        tool: "XML en PDF",
        steps: ["Téléversez XML", "Convertissez", "Téléchargez PDF"]
      }
    },
    excelToPdf: {
      title: "Excel vers PDF en Ligne - Convertir XLSX en PDF | pdfcanada.ca",
      desc: "Créez des PDF de qualité à partir de feuilles Excel. Convertisseur sécurisé traitant les fichiers localement. Rapide et gratuit.",
      h1: "Convertir Excel en PDF",
      subtitle: "Vos tableaux Excel en PDF professionnels.",
      content: "Transformez vos feuilles de calcul en documents PDF impeccables, parfaits pour le partage.",
      steps: [
        "Téléversez votre fichier .xlsx ou .xls.",
        "Nous générons le PDF correspondant.",
        "Téléchargez votre nouveau fichier."
      ],
      quickAnswer: {
        question: "Comment convertir un fichier Excel en PDF gratuitement ?",
        answer: "Notre convertisseur local transforme vos fichiers Excel en PDF tout en préservant la mise en page de vos tableaux.",
        tool: "Excel vers PDF",
        steps: ["Sélectionnez le fichier Excel", "Générez le PDF", "Téléchargez le fichier"]
      }
    },
    pdftocsv: {
      title: `Convertir PDF en CSV et Excel | Extraction Relevés Bancaires ${CURRENT_YEAR}`,
      desc: `Convertissez vos PDF en CSV, Excel et QBO gratuitement. Extraction locale sécurisée pour relevés bancaires (RBC, Desjardins, TD). Conforme LPRPDE, 100% privé.`,
      h1: "Extraire des Données PDF en CSV et Excel",
      subtitle: "Extraction de relevés bancaires de qualité professionnelle sans téléversement.",
      content: "Fini la saisie manuelle. Notre moteur d'extraction spatiale extrait les tableaux des relevés bancaires et factures en fichiers CSV ou Excel propres, le tout traité localement sur votre ordinateur.",
      steps: [
        "Sélectionnez votre relevé bancaire PDF ou document tabulaire.",
        "Utilisez la 'Fusion Intelligente' pour corriger les lignes multi-lignes.",
        "Exportez en CSV, XLSX ou QBO pour QuickBooks."
      ],
      quickAnswer: {
        question: "Comment convertir un relevé bancaire PDF en CSV pour Excel ?",
        answer: "La meilleure façon est d'utiliser un convertisseur local comme pdfcanada.ca qui gère les descriptions de transactions sur plusieurs lignes. Il extrait vos données directement dans le navigateur pour une sécurité maximale.",
        tool: "PDF vers CSV",
        steps: ["Téléverser le PDF", "Fusionner les lignes", "Télécharger CSV/Excel"]
      }
    },
    pdftoexcel: {
      title: "PDF vers Excel en Ligne - Convertir Tableaux PDF en XLSX",
      desc: "Convertissez des documents PDF en feuilles de calcul Excel modifiables. Extraction de tableaux de qualité professionnelle avec sécurité locale.",
      h1: "Convertir PDF en Excel",
      subtitle: "Transformez vos tableaux en feuilles de calcul instantanément.",
      content: "Arrêtez de saisir les données manuellement. Convertissez vos tableaux PDF en fichiers Excel (.xlsx) tout en conservant la structure des colonnes.",
      steps: [
        "Sélectionnez le PDF contenant votre tableau.",
        "Notre moteur local identifie les colonnes et lignes.",
        "Téléchargez votre fichier Excel prêt à l'emploi."
      ],
      quickAnswer: {
        question: "Comment convertir PDF en Excel ?",
        answer: "Notre outil extrait les tableaux vers Excel automatiquement.",
        tool: "PDF en Excel",
        steps: ["Téléversez PDF", "Extraction auto", "Téléchargez Excel"]
      }
    },
    analyzepdf: {
      title: "Analyser Sécurité PDF en Ligne - Détecter Malwares | pdfcanada.ca",
      desc: "Analysez les pièces jointes PDF pour détecter liens d'hameçonnage et malwares. Analyse locale garantie sans envoi de fichier. Gratuit & sécurisé.",
      h1: "Analyser la Sécurité PDF",
      subtitle: "Détectez les menaces cachées dans vos documents.",
      content: "Inquiet d'une pièce jointe suspecte ? Notre analyseur de sécurité scanne la structure du fichier pour trouver JavaScript, liens externes et actions de lancement. Tout est analysé localement pour ne pas compromettre vos fichiers sensibles.",
      steps: [
        "Sélectionnez le fichier PDF suspect.",
        "Notre outil analyse la structure localement.",
        "Examinez le score de risque et le rapport.",
        "Utilisez l'Aperçu Sécurisé pour voir le contenu sans danger."
      ],
      quickAnswer: {
        question: "Comment vérifier si un PDF est sûr ?",
        answer: "Utilisez un analyseur local comme pdfcanada.ca. Il inspecte la structure interne pour détecter les éléments dangereux sans exécuter le fichier.",
        tool: "Analyser PDF",
        steps: ["Téléversez le PDF", "Vérifiez le Score", "Aperçu Sécurisé"]
      },
      faq: [
        { question: "Est-ce dangereux d'importer un PDF infecté ?", answer: "Non, car le fichier n'est pas envoyé sur un serveur. L'analyse est isolée dans votre navigateur." },
        { question: "Comment nettoyer un PDF ?", answer: "Après analyse, utilisez l'outil 'Aplatir PDF' pour convertir les pages en images et neutraliser les scripts." },
        { question: "Que fait l'Aperçu Sécurisé ?", answer: "Il affiche le PDF comme une image statique, empêchant l'exécution de tout code malveillant caché." }
      ]
    },
    ultimateGuide: {
      title: `Guide Ultime ${CURRENT_YEAR} des Outils PDF | Maîtrisez vos Documents | pdfcanada.ca`,
      desc: `Maîtrisez la gestion des PDF avec notre guide définitif ${CURRENT_YEAR}. Apprenez à éditer, fusionner et convertir vos PDF en toute sécurité sans jamais les télécharger.`,
      quickAnswer: {
        question: "Comment éditer un PDF gratuitement sans logiciel ?",
        answer: "La meilleure façon est d'utiliser un outil local comme pdfcanada.ca. Il permet de supprimer des pages, faire pivoter, fusionner, compresser, convertir et signer des documents directement dans votre navigateur sans télécharger de logiciel.",
        tool: "Boîte à Outils PDF",
        steps: ["Visitez pdfcanada.ca", "Sélectionnez l'outil requis", "Éditez localement", "Téléchargez votre fichier"]
      }
    },
    editXfa: {
      title: `Comment Éditer un PDF XFA | Guide Technique ${CURRENT_YEAR} | pdfcanada.ca`,
      desc: "Déverrouillez et modifiez les formulaires PDF basés sur XFA en toute sécurité. Notre guide technique vous montre comment gérer les formulaires dynamiques localement.",
      quickAnswer: {
        question: "Comment éditer un PDF XFA ?",
        answer: "Les PDF XFA sont des formulaires dynamiques non éditables directement. Pour les modifier, vous devez les 'aplatir' en les imprimant vers 'Adobe PDF' ou 'Microsoft Print to PDF'. Cela convertit le formulaire dynamique en un document PDF standard et éditable.",
        tool: "Outil d'Aplatissement PDF",
        steps: ["Ouvrez dans Acrobat", "Imprimez en PDF (Aplatir)", "Enregistrez le nouveau PDF", "Éditez le fichier"]
      }
    },


    toolDelete: "Supprimer des pages PDF en ligne",
    toolDeleteDesc: "Enlever les pages inutiles d'un PDF gratuitement.",
    toolFlatten: "Non modifiable",
    toolFlattenDesc: "Aplatir le PDF.",
    toolPdfPageRemover: "Suppresseur de pages PDF en ligne",
    toolPdfPageRemoverDesc: "Enlever des pages du PDF en ligne.",

    toolRotate: "Pivoter PDF",
    toolRotateDesc: "Arranger les pages à l'envers.",
    toolHeic: "HEIC en PDF",
    toolHeicDesc: "Convertir photos iPhone.",
    toolEpubToPdf: "EPUB en PDF",
    toolEpubToPdfDesc: "Lire ebooks en PDF.",
    toolPdfToEpub: "PDF en EPUB",
    toolPdfToEpubDesc: "Convertir pour liseuses.",
    toolMakeFillable: "Rendre PDF Remplissable",
    toolMakeFillableDesc: "Ajouter des zones de texte auto.",
    toolCbrToPdf: "CBR en PDF",
    toolCbrToPdfDesc: "Convertir BD en PDF.",
    toolSign: "Signer le PDF",
    toolSignDesc: "Signer des documents en toute sécurité.",
    toolPdfToWord: "PDF en Word",
    toolPdfToWordDesc: "Convertir PDF en Docx modifiable.",
    toolWordToPdf: "Word en PDF",
    toolWordToPdfDesc: "Convertir Word docx en PDF.",
    toolRtfToPdf: "RTF vers PDF",
    toolRtfToPdfDesc: "Convertir RTF en PDF.",
    toolExcelToPdf: "Excel vers PDF",
    toolExcelToPdfDesc: "Convertir Excel doc en PDF.",
    toolCrop: "Recadrer PDF",
    toolCropDesc: "Ajuster les marges.",
    toolOrganize: "Organiser PDF",
    toolOrganizeDesc: "Réorganiser ou supprimer des pages.",
    toolInvoiceOcr: "OCR Factures",
    toolInvoiceOcrDesc: "Extraire les données vers Excel.",
    toolCsv: "PDF vers CSV",
    toolCsvDesc: "Extraire tableaux du PDF.",
    toolPdfToJpg: "PDF vers JPG",
    toolPdfToJpgDesc: "Convertir PDF en images.",
    toolPngToPdf: "PNG vers PDF",
    toolPngToPdfDesc: "Convertir images en PDF.",
    toolJpgToPdf: "JPG vers PDF",
    toolJpgToPdfDesc: "Convertir images en PDF.",
    toolExcel: "PDF vers Excel",
    toolExcelDesc: "Convertir tableaux en XLSX.",
    toolPhishingDetector: "Analyser PDF",
    toolPhishingDetectorDesc: "Détecter malwares & hameçonnage.",
    toolHtmlToPdf: "HTML en PDF",
    toolHtmlToPdfDesc: "Convertir HTML en PDF.",
    toolCompress: "Compresser PDF",
    toolCompressDesc: "Réduire la taille.",
    toolMerge: "Fusionner PDF",
    toolMergeDesc: "Combiner plusieurs PDFs.",
    toolSplit: "Diviser PDF",
    toolSplitDesc: "Séparer en pages.",
    toolExtract: "Extraire Pages PDF en ligne",
    toolExtractDesc: "Extraire pages PDF en ligne gratuitement.",
    toolPdfToXml: "PDF en XML",
    toolPdfToXmlDesc: "Extraire données structurées.",
    toolXmlToPdf: "XML en PDF",
    toolXmlToPdfDesc: "Créer PDF depuis XML.",

    uploadTitle: "Téléverser",
    uploadDesc: "ou glisser un fichier ici",
    processedLocally: "Traitement local",
    selectFile: "Choisir un fichier",
    terms: "En téléversant, vous acceptez nos conditions polies.",
    pages: "pages",
    local: "Local",
    menuOpen: "Ouvrir le menu",
    menuClose: "Fermer le menu",

    selectPagesHeader: "Sélectionnez les pages :",
    selected: "sélectionnées",
    rotateLeft: "Gauche",
    rotateRight: "Droite",
    rotateAllLeft: "Tout Pivoter Gauche",
    rotateAllRight: "Tout Pivoter Droite",
    resetRotations: "Réinitialiser",
    selectPagesToFill: "Sélectionnez les pages à scanner :",
    toolRotateInfo: "Cliquez sur les pages pour les faire pivoter ou utilisez les contrôles ci-dessus.",
    readyToConvertDesc: "Prêt à convertir {fileName}. Cela peut prendre quelques instants selon la taille du fichier, hein.",
    btnTryAgain: "Réessayer",
    processing: "Traitement en cours...",
    errorGeneric: "Une erreur est survenue lors du traitement de votre fichier.",
    btnSave: "Enregistrer",
    btnSplit: "Diviser le PDF",
    btnExtract: "Extraire les pages",
    btnCompress: "Compresser PDF",
    processedSize: "Taille traitée",
    selectAll: "Tout sélectionner",
    selectNone: "Tout désélectionner",
    selectOdd: "Pages impaires",
    selectEven: "Pages paires",

    // Tool Specific Inputs
    deletePagesInfo: "Cliquez sur les pages à supprimer. Utilisez la touche \"maj\" pour les plages.",
    totalPages: "Nombre de pages",
    pagesToRemove: "Pages à supprimer",
    signPagesInfo: "Placez votre signature ou vos initiales sur le document.",
    addSignature: "Ajouter Signature",
    addInitials: "Ajouter Initiales",
    signUpload: "Téléverser",

    pan: "Panoramique",
    newSignature: "Nouvelle signature",
    newInitials: "Nouvelles initiales",
    loadingPage: "Chargement de la page...",
    pageNumber: "Page {number}",
    signTools: "Outils de signature",
    signatures: "Signatures",
    createNewSignature: "Créer une nouvelle signature",
    initials: "Initiales",
    createNewInitials: "Créer de nouvelles initiales",
    annotation: "Annotation",
    date: "Date",
    text: "Texte",
    check: "Case à cocher",
    btnDeleteEntry: "Supprimer",
    done: "Terminé",
    edit: "Modifier",
    undo: "Annuler",
    redo: "Rétablir",
    quickAdd: "Ajout rapide",
    todaysDate: "Date d'aujourd'hui",
    textField: "Champ texte",
    of: "sur",

    btnRemove: "Supprimer",
    btnRotate: "Appliquer",
    btnFlatten: "Rendre non modifiable",
    btnCrop: "Recadrer PDF",
    btnConvert: "Convertir le fichier",
    btnMakeFillable: "Détecter et Remplir",
    btnCancel: "Annuler",
    btnPreviewCrop: "Aperçu du recadrage",
    btnFinalize: "Finaliser le recadrage",
    cropPreview: "Aperçu du recadrage",
    before: "Avant",
    after: "Après",
    previewModeInfo: "Vérifiez le résultat à droite. Si ça vous convient, cliquez sur Finaliser.",


    working: "On y travaille...",
    workingDesc: "On scanne pour les champs et on arrange ça.",
    doneTitle: "C'est tiguidou !",
    doneDesc: "Votre fichier est prêt.",

    doAnother: "En faire un autre",
    backToHome: "Retour aux outils",

    errorTitle: "Ah zut !",
    genericError: "Quelque chose a mal tourné. Détails techniques : {detail}",
    fileTypeErr: "Désolé, mais on n'accepte pas ce type de fichier.",
    readErr: "Désolé, on n'a pas pu lire ce fichier.",
    passwordErr: "Ce PDF est protégé par mot de passe. Veuillez le déverrouiller d'abord.",
    corruptPdfErr: "Le fichier PDF semble corrompu ou invalide.",
    conversionErr: "Échec de la conversion du fichier. Détails techniques : {detail}",
    emptyEpubErr: "Impossible d'extraire le texte de cet EPUB.",

    // Nav
    navTools: "Outils",
    navGuides: "Guides",
    navAbout: "À propos",
    navHowTo: "Aide",
    navSupport: "Soutenir local",
    navPricing: "Tarifs",
    footerEditGroup: "Outils PDF",
    footerGuidesGroup: "Guides d'Édition",
    footerFormatGroup: "Guides de Format",
    login: "Connexion",
    signup: "S'inscrire",

    footerBuilt: "Fièrement bâti dans le Nord fort et libre.",
    footerMade: "Fait avec",
    footerLocation: "et du sirop d'érable à Toronto, ON.",
    footerRights: "Tous droits réservés, désolé.",
    footerTagline: "L'outil PDF préféré du Grand Nord Blanc.",
    footerPrivacyNotice: "On ne vous suit pas. Ce ne serait pas poli.",
    termsService: "Conditions",
    privacy: "Confidentialité",
    sorryPolicy: "Politique d'excuses",
    makeFillableFooter: "Comment rendre un PDF remplissable",

    pricingTitle: "Tarification Simple",
    pricingSubtitle: "Prix honnêtes pour gens honnêtes.",
    freePlan: "Le plan 'Gars des vues'",
    freeCost: "0 $ CAD",
    freeFeature1: "Conversions illimitées",
    freeFeature2: "Pas de compte requis",
    freeFeature3: "Messages d'erreur polis",
    freeFeature4: "Traitement local (Sécurisé)",
    enterprisePlan: "Le plan 'Double Double'",
    enterpriseCost: "0 $ CAD",
    enterpriseFeature1: "Tout du plan de base",
    enterpriseFeature2: "On s'excuse deux fois plus",
    enterpriseFeature3: "Livraison de sirop prioritaire (optionnel)",

    // Timbits Support Tier
    timbitsPlan: "Le pourboire 'Timbits'",
    timbitsCost: "1 $ CAD",
    timbitsDesc: "Un huard, ça fait la différence!",
    timbitsFeature1: "Garder les serveurs au pays",
    timbitsFeature2: "Financer de nouveaux outils",
    timbitsFeature3: "Soutenir des devs canadiens",
    timbitsFeature4: "Recevoir nos remerciements",
    timbitsButton: "Donner un Huard",

    // Form Builder
    fbTitle: "Créateur de Formulaire",
    fbAddText: "Ajouter Texte",
    fbAddCheckbox: "Ajouter Case",
    fbCancel: "Annuler",
    fbDownload: "Télécharger",
    fbPage: "Page",

    privacyTitle: "Politique de Confidentialité",
    privacyEffectiveDate: "Date d'entrée en vigueur: Janvier 2026",
    privacyText1: "Chez pdfcanada.ca, vos affaires sont vos affaires. Parce qu'on traite les fichiers localement, vos documents ne sont jamais envoyés sur nos serveurs.",
    privacyText2: "On n'utilise pas de cookies pour vous suivre. On ne vend pas vos données. On ne demande même pas votre email. C'est juste vous et votre PDF.",
    privacyGuaranteeTitle: "Garantie de traitement local",
    privacyGuaranteeText: "Nous n'exploitons pas de serveurs backend pour le traitement des fichiers. Tout se passe ici même dans votre navigateur avec WebAssembly.",

    privacyCookiesTitle: "Cookies et technologies de suivi",
    privacyCookiesText: "Bien que nous n'utilisions pas de cookies pour le traitement des fichiers, des services tiers sur notre site peuvent utiliser des cookies et des technologies de suivi similaires. Cela inclut nos partenaires publicitaires qui aident à maintenir notre service gratuit.",

    privacyThirdPartyTitle: "Publicité de tiers",
    privacyThirdPartyText1: "Nous utilisons Google AdSense pour afficher des publicités sur notre site. Google, en tant que fournisseur tiers, utilise des cookies pour diffuser des annonces basées sur vos visites précédentes sur notre site et d'autres sites.",
    privacyThirdPartyText2: "L'utilisation de cookies publicitaires par Google permet à Google et à ses partenaires de vous proposer des annonces basées sur votre visite sur notre site et/ou d'autres sites Internet.",
    privacyThirdPartyText3: "Vous pouvez désactiver la publicité personnalisée en visitant les paramètres de publicité Google à https://www.google.com/settings/ads. Vous pouvez également désactiver les cookies tiers en visitant la page de désactivation de la Network Advertising Initiative à https://optout.networkadvertising.org.",

    privacyDataCollectionTitle: "Informations que nous collectons",
    privacyDataCollectionText: "Nous collectons un minimum d'informations nécessaires pour fournir notre service: analyses d'utilisation de base (pages vues, localisation générale par pays), et toute information que vous fournissez volontairement en nous contactant. Nous ne collectons ni ne stockons PAS vos fichiers téléchargés—tout le traitement se fait localement dans votre navigateur.",

    privacyYourRightsTitle: "Vos droits à la vie privée (RGPD/CCPA)",
    privacyYourRightsText: "Selon votre localisation, vous pouvez avoir le droit de: accéder aux données personnelles que nous détenons, demander la correction de données inexactes, demander la suppression de vos données, refuser la publicité personnalisée, et déposer une plainte auprès d'une autorité de contrôle. Puisque nous traitons les fichiers localement et collectons peu de données, la plupart des demandes peuvent être satisfaites en vidant simplement le cache de votre navigateur.",

    privacyChildrenTitle: "Confidentialité des enfants",
    privacyChildrenText: "Notre service n'est pas destiné aux enfants de moins de 13 ans. Nous ne collectons pas sciemment d'informations personnelles auprès d'enfants de moins de 13 ans.",

    privacyContactTitle: "Nous contacter",
    privacyContactText: "Si vous avez des questions sur cette politique de confidentialité ou si vous souhaitez exercer vos droits, veuillez nous contacter à: privacy@pdfcanada.ca",

    privacyChangesTitle: "Modifications de cette politique",
    privacyChangesText: "Nous pouvons mettre à jour cette politique de confidentialité de temps en temps. Nous vous informerons de tout changement en publiant la nouvelle politique sur cette page et en mettant à jour la 'Date d'entrée en vigueur' ci-dessus.",

    termsTitle: "Conditions d'utilisation",
    termsEffectiveDate: "Date d'entrée en vigueur: Janvier 2026",
    termsText1: "En utilisant ce service, vous acceptez d'être gentil.",
    termsText2: "S'il vous plaît, n'utilisez pas nos outils pour des trucs illégaux.",
    termsText3: "Service fourni 'tel quel'. Si ça brise, on est vraiment désolé.",
    termsText4: "Ce site peut afficher des publicités diffusées par Google AdSense pour aider à soutenir le service. Ces annonces sont gérées par Google et peuvent utiliser des cookies pour personnaliser le contenu en fonction de votre activité de navigation. En utilisant ce site, vous reconnaissez et acceptez l'utilisation de la publicité.",

    termsAcceptableUseTitle: "Utilisation acceptable",
    termsAcceptableUseText: "Vous acceptez d'utiliser nos outils uniquement à des fins légales. Vous ne pouvez pas utiliser notre service pour traiter des documents contenant du contenu illégal, des logiciels malveillants ou du matériel portant atteinte aux droits de propriété intellectuelle d'autrui.",

    termsIntellectualPropertyTitle: "Propriété intellectuelle",
    termsIntellectualPropertyText: "Le service pdfcanada.ca, y compris sa conception, ses fonctionnalités et son contenu (à l'exclusion des documents téléchargés par les utilisateurs), nous appartient. Vos documents restent votre propriété—nous n'accédons jamais, ne stockons ni ne revendiquons la propriété de vos fichiers.",

    termsDisclaimerTitle: "Exclusion de garanties",
    termsDisclaimerText: "Notre service est fourni 'tel quel' sans garantie d'aucune sorte. Nous ne garantissons pas un service ininterrompu, un fonctionnement sans erreur ou des résultats spécifiques. Utilisez nos outils à votre discrétion.",

    termsLiabilityTitle: "Limitation de responsabilité",
    termsLiabilityText: "Dans toute la mesure permise par la loi, nous ne serons pas responsables des dommages indirects, accessoires, spéciaux, consécutifs ou punitifs découlant de votre utilisation de notre service.",

    termsModificationsTitle: "Modifications des conditions",
    termsModificationsText: "Nous nous réservons le droit de modifier ces conditions à tout moment. L'utilisation continue du service après les modifications constitue une acceptation des conditions modifiées.",

    termsGoverningLawTitle: "Droit applicable",
    termsGoverningLawText: "Ces conditions sont régies par les lois de l'Ontario, Canada. Tout litige sera résolu devant les tribunaux de l'Ontario.",

    sorryTitle: "Notre Politique d'Excuses",
    sorryText1: "Dans le cas peu probable où quelque chose cloche :",
    sorryList1: "1. On va s'excuser immédiatement.",
    sorryList2: "2. On va essayer d'arranger ça.",
    sorryList3: "3. On va s'excuser encore, juste au cas.",

    howtoTitle: "Comment ça marche",
    howtoStep1: "Choisissez un outil sur le tableau de bord.",
    howtoStep2: "Sélectionnez votre fichier (PDF, HEIC, ou EPUB).",
    howtoStep3: "Suivez les instructions polies à l'écran.",
    howtoStep4: "Téléchargez votre nouveau fichier. Facile.",

    fillablePageTitle: "Comment rendre un PDF remplissable",
    fillablePageSubtitle: "Le guide poli pour créer des formulaires.",
    fillableIntro: "Vous voulez que les gens puissent écrire dans votre document ?",
    fillableStep1: "Téléversez votre PDF dans notre outil.",
    fillableStep2: "Sélectionnez les pages.",
    fillableStep3: "Nous ajoutons une boîte de texte.",
    fillableStep4: "Téléchargez et partagez.",
    fillableProTip: "Conseil de pro : Idéal pour les formulaires.",
    fillableWhy: "Pourquoi nous utiliser ?",
    fillableWhyText: "C'est gratuit et canadien.",
    pricingPage: {
      content: "Chez pdfcanada.ca, nous croyons que les outils essentiels doivent être gratuits. C'est pourquoi nos fonctionnalités de base sont à 0 $. Pas de frais cachés. Si vous cherchez des outils PDF gratuits au Canada, vous êtes au bon endroit.",
      faq: [
        {
          question: "Est-ce vraiment gratuit ?",
          answer: "Oui, absolument ! Tous nos outils sont gratuits."
        },
        {
          question: "Ai-je besoin d'une carte de crédit ?",
          answer: "Non, aucune carte ni inscription requise."
        },
        {
          question: "Pourquoi est-ce gratuit ?",
          answer: "Grâce au traitement local, nos coûts sont faibles. Nous acceptons les dons optionnels."
        },
        {
          question: "Puis-je l'utiliser pour mon entreprise ?",
          answer: "Bien sûr. C'est parfait pour les PME et les pigistes."
        },
        {
          question: "C'est quoi le pourboire Timbits ?",
          answer: "C'est un don optionnel de 1 $ pour nous dire merci."
        }
      ]
    },
    supportPage: {
      content: "Nous sommes une petite équipe à Toronto. Contrairement aux grandes entreprises, nous traitons tout localement sur votre appareil. En nous soutenant, vous aidez le logiciel canadien indépendant.",
      canadianWayText: "Si vous aimez ce que nous faisons, parlez-en à un ami. C'est la manière canadienne.",
      faqTitle: "Foire aux questions",
      faq: [
        {
          question: "Comment soutenir pdfcanada.ca ?",
          answer: "Partagez l'outil ou donnez un huard via notre bouton de don."
        },
        {
          question: "Où va mon don ?",
          answer: "Il paie l'hébergement et le café des développeurs."
        },
        {
          question: "Est-ce sécurisé ?",
          answer: "Oui, nous utilisons Stripe. Nous ne voyons jamais vos infos bancaires."
        },
        {
          question: "Pourquoi soutenir le local ?",
          answer: "C'est important pour l'écosystème techno canadien."
        },
        {
          question: "Offrez-vous des remboursements ?",
          answer: "Pour les petits dons, généralement non, mais contactez-nous en cas d'erreur."
        }
      ]
    },
    invoiceOcr: {
      dragDrop: "Glissez la facture ici",
      clickUpload: "ou cliquez pour télécharger",
      scanBtn: "Scanner la facture",
      scanning: "Analyse en cours...",
      results: "Détails du paiement",
      fieldId: "Numéro de facture",
      fieldDate: "Date de la facture",
      fieldTotal: "Montant Total",
      fieldVendor: "Nom du Vendeur",
      visualConfidence: "Score de confiance",
      exportExcel: "Exporter vers Excel",
      exportCsv: "Exporter vers CSV",
      copyData: "Copier",
      newScan: "Scanner une autre",
      fallbackAlert: "Image détectée. Utilisation de Tesseract (plus lent)...",
      successMsg: "Données extraites avec succès !"
    },
    pdfToUbl: {
      title: "Générateur UBL 2.1",
      vendor: "Détails du Fournisseur",
      customer: "Détails du Client",
      invoice: "Données de Facture",
      items: "Articles",
      totals: "Totaux & Taxes",
      download: "Télécharger XML UBL",
      scan: "Rescanner PDF",
      scanError: "Échec de l'extraction. Veuillez vérifier le PDF."
    },
    pdfToCsv: {
      analyzing: "analyse de la mise en page...",
      mapping: "mappage des colonnes et lignes localement",
      extractionFailed: "Échec de l'extraction",
      extractionError: "Nous n'avons pas pu extraire le tableau de ce PDF.",
      transactionsFound: "Transactions trouvées",
      confidence: "Confiance",
      localProcessing: "Traitement Local",
      extractionOptions: "Options d'Extraction",
      smartMerge: "Fusion Multiligne Intelligente",
      smartMergeDesc: "Fusionne les descriptions sur plusieurs lignes",
      normalization: "Normalisation Financière",
      normalizationDesc: "Standardise les dates et nettoie les symboles monétaires",
      aiInsight: "Aperçu IA",
      aiMessage: "Notre détecteur a remarqué que cela ressemble à un relevé bancaire.",
      showingRows: "Affichage de {visible} sur {total} lignes",
      loadMore: "Charger plus de lignes",
      uploadPrompt: "Téléversez un PDF pour voir les transactions",
      privacy: "Confidentialité : 100% Hors ligne",
      poweredBy: "Propulsé par PDFCA Spatial Engine 2.0",
      transactions: "Transactions",
      credits: "Crédits Totaux",
      debits: "Débits Totaux",
      net: "Changement Net",
      readyToConvert: "Prêt à convertir",
      selectAction: "Comment souhaitez-vous traiter ce fichier ?",
      previewEdit: "Aperçu & Édition",
      previewEditDesc: "Visualisez les données, fusionnez les colonnes et vérifiez avant de télécharger.",
      quickConvert: "Conversion Rapide",
      quickConvertDesc: "Sautez l'aperçu et téléchargez le fichier Excel immédiatement.",
      successTitle: "Conversion Réussie !",
      successDesc: "Votre fichier Excel a été téléchargé.",
      viewData: "Voir les Données Extraites",
      convertAnother: "Convertir un Autre"
    },
    barcode: {
      title: "Générateur de Code-Barres Code 128",
      subtitle: "Génération professionnelle de codes-barres avec support en masse, formats multiples et personnalisation avancée",
      singleMode: "Simple/Manuel",
      bulkMode: "Génération en Masse",
      sequenceTitle: "Générer une Séquence",
      prefixLabel: "Préfixe (Optionnel)",
      prefixPlaceholder: "ex., BC",
      suffixLabel: "Suffixe (Optionnel)",
      suffixPlaceholder: "ex., -A",
      startLabel: "Numéro de Début *",
      startPlaceholder: "1",
      endLabel: "Numéro de Fin *",
      endPlaceholder: "100",
      generateBtn: "Générer la Séquence",
      sequenceExample: "Exemple : Préfixe \"BC\" + Numéros 1-100 + Suffixe \"A\" = BC1A, BC2A, ... BC100A",
      settingsTitle: "Paramètres du Code-Barres",
      formatLabel: "Format",
      formatAuto: "CODE128 (Auto)",
      formatA: "CODE128A (Majuscules)",
      formatB: "CODE128B (Mixte)",
      formatC: "CODE128C (Numérique uniquement)",
      widthLabel: "Largeur des Barres",
      heightLabel: "Hauteur",
      fontSizeLabel: "Taille de Police",
      bgColorLabel: "Couleur de Fond",
      barColorLabel: "Couleur des Barres",
      showTextLabel: "Afficher le Texte sous le Code-Barres",
      exportFormatLabel: "Format d'Export",
      exportPNG: "Image PNG",
      exportSVG: "Vectoriel SVG",
      exportPDF: "Document PDF",
      inputPlaceholder: "Entrez les données du code-barres (ex., BC123456789)",
      downloadBtn: "Télécharger",
      copyBtn: "Copier",
      copiedBtn: "Copié !",
      addBtn: "Ajouter un Autre Code-Barres",
      exportAllBtn: "Exporter Tout en PDF",
      barcodes: "codes-barres",
      infoTitle: "Fonctionnalités Code 128 :",
      infoAuto: "Sélectionne automatiquement le meilleur encodage pour vos données",
      infoA: "Lettres majuscules et caractères de contrôle",
      infoB: "ASCII complet (majuscules, minuscules, symboles)",
      infoC: "Numérique uniquement (format le plus compact pour les nombres)",
      infoBulk: "Génération en masse à partir de séquences ou fichiers Excel/CSV",
      infoExport: "Export en PNG, SVG ou PDF multi-pages",
      infoCustom: "Couleurs, tailles et polices personnalisables",
      seoWhat: "Qu'est-ce qu'un Code-Barres Code 128 ?",
      seoUseCases: "Cas d'Usage et Applications du Code-Barres Code 128",
      seoHowTo: "Comment Utiliser ce Générateur de Code-Barres Code 128",
      seoBenefits: "Avantages du Code-Barres Code 128",
      seoFAQ: "Questions Fréquemment Posées (FAQ)",
      seoTechSpecs: "Spécifications Techniques",
      errorInvalid: "Veuillez entrer des numéros de début et de fin valides (début ≤ fin)",
      errorGenerate: "Échec de la génération du code-barres. Veuillez vérifier l'entrée.",
      errorFile: "Échec de l'analyse du fichier. Veuillez vérifier le format.",
      errorExport: "Échec de l'export PDF",
      errorMinBarcodes: "Veuillez ajouter au moins un code-barres",
      downloadTitle: "Télécharger ou Copier",
      downloadDesc: "Choisissez votre format (PNG, SVG, PDF) et cliquez sur Télécharger. Vous pouvez aussi copier les codes-barres ou tout exporter en PDF multi-pages."
    },
    kindleSettings: "Optimisation Kindle",
    kindleSettingsDesc: "Choisissez comment votre PDF est optimisé pour Kindle",
    reflowableMode: "EPUB Reflowable",
    reflowableDesc: "Idéal pour les livres textuels. Modifiez polices et tailles.",
    visualMode: "PDF Visuel",
    visualDesc: "Recadrage intelligent pour mises en page complexes et colonnes.",
    kindleScreenSize: "Taille de l'écran cible",
    reflowInfo: "Votre PDF sera converti en un fichier EPUB 3.0 ajustable. Parfait pour modifier la taille de la police sur n'importe quel Kindle.",
    visualInfo: "Optimisation de style K2PdfOpt : Détection de colonnes, retrait des marges et repagination intelligente pour s'adapter à l'écran Kindle sans zoom.",

    // Footer & Navigation
    footerHubsGuides: "Hubs & Guides",
    footerResources: "Ressources",
    footerConversions: "Conversion",
    footerEditing: "Édition",
    footerSecurity: "Sécurité",
    footerOcrAnalysis: "OCR & Analyse",
    footerViewAllGuides: "Voir Tous les Guides →",
    footerAboutUs: "À Propos",
    footerPricing: "Tarification",
    footerPrivatePdf: "Outils PDF Privés",
    footerFinanceSecurity: "PDF Finance",
    footerLegalSecurity: "PDF Juridique",
    footerHealthcareSecurity: "PDF Santé",
    footerDownloads: "Téléchargements",
    footerSurahBaqarah: "Sourate Baqarah PDF",
    footerSurahYasin: "Sourate Yasin PDF",
    footerSecurityTitle: "Sécurité"
  },
  pt: {
    builtIn: "Feito no Canadá",
    title: "Ferramentas PDF Educadas",
    subtitle: "Gratuito, Seguro, Canadense.",
    description: "Nós ajudamos você a gerenciar seus documentos sem complicações. Selecione uma ferramenta abaixo, eh?",
    localProcessing: "Processamento 100% Local",
    localProcessingDesc: "Seus arquivos nunca saem do seu navegador. Todo o processamento acontece no seu dispositivo.",
    noSignup: "Sem Cadastro Necessário",
    secure: "Seguro e Privado",
    guarantee: "Garantia Sem Desculpas",
    selectToolTitle: "Selecione uma Ferramenta",
    eh: " eh?",
    ultimateGuideLabel: "Guia Definitivo de PDF 📖",
    editXfaGuide: "Guia Editar PDF XFA",
    mergePdfGuide: "Guia Juntar PDF",
    compressPdfGuide: "Guia Comprimir PDF",
    rotatePdfGuide: "Guia Girar PDF",
    deletePdfGuide: "Guia Excluir Páginas",
    organizePdfGuide: "Guia Organizar PDF",
    makeFillableGuide: "Guia Criar Formulário",
    cropPdfGuide: "Guia Cortar PDF",
    splitPdfGuide: "Guia Dividir PDF",
    flattenPdfGuide: "Guia Achatar PDF",
    invoiceOcrGuide: "Guia OCR de Fatura",
    wordToPdfGuide: "Guia Word para PDF",
    pdfToWordGuide: "Guia PDF para Word",
    rtfToPdfGuide: "Guia RTF para PDF",
    heicToPdfGuide: "Guia HEIC para PDF",
    epubToPdfGuide: "Guia EPUB para PDF",
    pdfToEpubGuide: "Guia PDF para EPUB",
    cbrToPdfGuide: "Guia CBR para PDF",
    emailToPdfGuide: "Guia Email para PDF",
    insertPictureGuide: "Guia Inserir Foto",
    pageRemoverGuide: "Guia Removedor de Páginas",
    barcodeGeneratorGuide: "Guia Gerador de Código de Barras",
    analyzePdfGuide: "Guia Analisar Segurança",
    trimPdfGuide: "Guia Aparar PDF",

    // Value Propositions
    hpFastTitle: "Relâmpago Rápido",
    hpFastDesc: "Processe arquivos instantaneamente no seu navegador",
    hpFreeTitle: "100% Gratuito",
    hpFreeDesc: "Sem custos ocultos, sem assinaturas",
    hpPrivacyTitle: "Privacidade em Primeiro Lugar",
    hpPrivacyDesc: "Seus arquivos nunca saem do seu dispositivo",

    // Sign Tool
    btnSign: "Finalizar e Baixar",
    drawTitle: "Desenhar",
    typeTitle: "Digitar",
    btnCreate: "Criar",
    loading: "Carregando...",
    clickToUpload: "Clique para enviar PDF",
    error: "Erro",
    viewOnline: "Ver PDF Online",
    listenAudio: "Ouvir Áudio",
    page: "Página",
    step: "Passo",
    stepSelectTool: "Escolher Ferramenta",
    stepUploadPdf: "Carregar PDF",
    stepProcess: "Editar/Processar",
    faqTitle: "Perguntas Frequentes",
    upload: "Carregar",
    select: "Selecionar",
    fillify: "Preencher (Mágico)",
    download: "Baixar",

    // Compress Tool
    sizeReduced: "Tamanho Reduzido",
    addMorePdfs: "Adicionar mais PDFs",
    compressGood: "Bom",
    compressGoodDesc: "Melhor qualidade, texto selecionável.",
    compressBalanced: "Equilibrado",
    compressBalancedDesc: "Boa qualidade, tamanho menor.",
    compressExtreme: "Extremo",
    compressExtremeDesc: "Menor tamanho, qualidade inferior.",
    compressGoodInfo: "Otimiza metadados e streams. Texto permanece selecionável.",
    compressBalancedInfo: "Re-renderiza páginas a 150 DPI. Texto torna-se não selecionável.",
    compressExtremeInfo: "Re-renderização agressiva a 96 DPI. Compressão máxima.",
    selectCompressionLevel: "Selecione o Nível de Compressão",

    // Landing Page Sections
    landingPage: {
      simpleTasksTitle: "Mantenha o Simples Simples",
      simpleTasksDesc: "pdfcanada.ca é o primeiro e único software de PDF que você vai amar. Temos todas as ferramentas que você precisa para começar, gerenciar e finalizar seu trabalho com documentos digitais—tudo sem sair do seu navegador.",
      workDirectlyTitle: "Trabalhe Diretamente no Navegador",
      workDirectlyDesc: "Faça mais do que apenas visualizar PDFs. Junte, comprima, divida, gire e converta seus documentos—tudo diretamente no seu navegador.",
      perfectDocTitle: "Crie o Documento Perfeito",
      perfectDocDesc: "Arquivo muito grande? Comprima-o. Precisa de um formato específico? Converta-o. Coisas ficando caóticas? Junte e divida arquivos. pdfcanada.ca tem tudo o que você precisa.",
      privacyFirstTitle: "Sua Privacidade é Nossa Prioridade",
      privacyFirstDesc: "Ao contrário de outras ferramentas, processamos tudo localmente no seu navegador. Seus arquivos nunca saem do seu dispositivo.",
      whyChooseTitle: "Por que escolher pdfcanada.ca?",
      trustedByTitle: "Canadenses Confiam em Nós",
      trustedByDesc: "Mais de 10.000 canadenses usaram nosso serviço para simplificar seu trabalho.",
      freeForeverTitle: "Gratuito para Sempre",
      freeForeverDesc: "Cada ferramenta no pdfcanada.ca é 100% gratuita sem taxas ocultas.",
      noUploadsTitle: "Sem Uploads Necessários",
      noUploadsDesc: "Todo o processamento acontece localmente usando tecnologia WebAssembly.",
      openSourceTitle: "Feito com Amor no Canadá",
      openSourceDesc: "Feito por uma pequena equipe em Toronto, Ontário.",
      fastSecureTitle: "Rápido e Seguro",
      fastSecureDesc: "Impulsionado pelo seu próprio dispositivo, ferramentas instantâneas.",
      pipedaTitle: "Compatível com PIPEDA",
      pipedaDesc: "Levamos as leis de privacidade canadenses a sério.",
      ctaTitle: "Pronto para Começar?",
      ctaDesc: "Junte-se a milhares de canadenses que confiam no pdfcanada.ca.",
      ctaButton: "Explorar Todas as Ferramentas",
    },

    // Hub Titles
    hubConverter: "Ferramentas de Conversão",
    hubEditing: "Ferramentas de Edição",
    hubSecurity: "Ferramentas Seguras",
    hubBusiness: "Ferramentas para Negócios",

    // SEO General
    seo: {
      homeTitle: "Ferramentas PDF Gratuitas Canadá | Seguro e Sem Upload | pdfcanada.ca",
      homeDesc: `As Ferramentas PDF Educadas do Canadá. 100% gratuito e seguro em ${CURRENT_YEAR}. Junte, comprima e converta PDFs diretamente no seu navegador.`,
      homeFaq: [
        {
          q: "O pdfcanada.ca é realmente gratuito?",
          a: "Absolutamente! Cada ferramenta em nosso site é 100% gratuita."
        },
        {
          q: "Meus dados estão seguros no pdfcanada.ca?",
          a: "Super seguro. Processamos tudo localmente no seu navegador."
        },
        {
          q: "Quais ferramentas vocês oferecem?",
          a: "Oferecemos um conjunto completo de ferramentas PDF incluindo: Excluir Páginas, Girar, Juntar, Comprimir, e muito mais."
        },
        {
          q: "Preciso criar uma conta?",
          a: "Sem cadastro necessário! Apenas visite, selecione e use."
        },
        {
          q: "Posso juntar múltiplos arquivos PDF?",
          a: "Com certeza! Nossa ferramenta Juntar PDF permite combinar vários arquivos."
        },
        {
          q: "Como converter PDF para Word sem perder formatação?",
          a: "Use nossa ferramenta PDF para Word para extrair texto e estrutura."
        }
      ],
      homeHowToFiles: "Selecionar Arquivos",
      homeHowToFilesDesc: "Escolha os arquivos PDF para juntar",
      homeHowToOrder: "Organizar Ordem",
      homeHowToOrderDesc: "Arraste e solte para definir a ordem",
      homeHowToMergeDl: "Baixar Resultado",
      homeHowToMergeDlDesc: "Clique em juntar e baixe seu PDF combinado",
      homeHowToUpload: "Carregar PDF",
      homeHowToUploadDesc: "Selecione o arquivo PDF para converter",
      homeHowToProcess: "Processar Conversão",
      homeHowToProcessDesc: "Nossa ferramenta extrai texto e estrutura automaticamente",
      homeHowToWordDl: "Baixar Arquivo Word",
      homeHowToWordDlDesc: "Salve o arquivo .docx convertido no seu dispositivo",
      skipToContent: "Ir para o conteúdo principal",
      pricingTitle: "Preço Ferramentas PDF Gratuitas | Apenas $0 | pdfcanada.ca",
      pricingDesc: "Ferramentas PDF incrivelmente gratuitas. $0 CAD para conversões ilimitadas.",
      privacyTitle: "Política de Privacidade e Segurança | pdfcanada.ca",
      privacyDesc: `Nosso compromisso de privacidade de ${CURRENT_YEAR}: Todo processamento de PDF acontece localmente.`,
      termsTitle: "Termos de Serviço - Amigável e Seguro | pdfcanada.ca",
      termsDesc: `Leia nossos termos de serviço educados de ${CURRENT_YEAR}.`,
      howtoTitle: "Como Usar pdfcanada.ca | Tutoriais PDF",
      howtoDesc: "Instruções fáceis sobre como excluir páginas, girar documentos e converter arquivos.",
      supportTitle: "Apoie Desenvolvedores Locais | Doe | pdfcanada.ca",
      supportDesc: "Apoie a equipe canadense construindo ferramentas PDF gratuitas.",
      sorryTitle: "Política de Desculpas - pdfcanada.ca",
      sorryDesc: "Nossa garantia de pedir desculpas se algo der errado.",
      fillableTitle: "Como tornar um PDF preenchível | pdfcanada.ca",
      fillableDesc: "Aprenda como tornar um PDF preenchível gratuitamente usando nossas ferramentas.",
      aboutTitle: "Sobre Nós - Nosso Compromisso com Privacidade | pdfcanada.ca",
      aboutDesc: "Saiba mais sobre pdfcanada.ca e nossa missão."
    },

    pricingPage: {
      content: "No pdfcanada.ca, acreditamos que ferramentas essenciais devem ser gratuitas.",
      faq: [
        { question: "É realmente gratuito?", answer: "Pode apostar! Cada ferramenta é gratuita." },
        { question: "Preciso de cartão de crédito?", answer: "De jeito nenhum. Sem cartão, sem cadastro." },
        { question: "Por que é gratuito?", answer: "Sem pegadinhas. Rodamos de forma enxuta usando processamento local." },
        { question: "Posso usar para negócios?", answer: "Absolutamente. Perfeito para pequenos negócios." },
        { question: "Como funciona o apoio?", answer: "É uma gorjeta opcional de $1." }
      ]
    },
    supportPage: {
      content: "Somos uma pequena equipe de desenvolvedores baseada em Toronto, dedicada a construir ferramentas PDF privadas.",
      canadianWayText: "Se você gosta do que fazemos, conte a um amigo. Esse é o jeito canadense.",
      faqTitle: "Perguntas Frequentes",
      faq: [
        { question: "Como posso apoiar?", answer: "Compartilhe nossas ferramentas!" },
        { question: "Para onde vai minha doação?", answer: "Custos de servidor e café." },
        { question: "O pagamento é seguro?", answer: "Sim, usamos Stripe." },
        { question: "Por que apoiar software local?", answer: "Ajuda a construir um ecossistema tecnológico que respeita a privacidade." },
        { question: "Oferecem reembolso?", answer: "Geralmente não, mas fale conosco se houve erro." }
      ]
    },
    aboutPage: {
      title: "Feito para Canadenses, por Canadenses",
      subtitle: "Ferramentas PDF com privacidade em primeiro lugar.",
      mission: "Nossa Missão",
      missionText: "Acreditamos que ferramentas essenciais devem ser gratuitas e seguras.",
      story: "A História do pdfcanada.ca",
      storyText: "Começado por uma pequena equipe em Toronto frustrada com ferramentas modernas.",
      values: "Nossos Valores",
      value1Title: "100% Privacidade",
      value1Text: "Seus arquivos nunca saem do seu dispositivo.",
      value2Title: "Sem Paywalls",
      value2Text: "Sem assinaturas, sem taxas ocultas.",
      value3Title: "Primeiro o Usuário",
      value3Text: "Sem cadastros, sem interfaces complexas.",
      trustTitle: "Por que Confiar?",
      trust1Title: "Conformidade Canadense",
      trust1Text: "Seguimos diretrizes PIPEDA.",
      trust2Title: "Segurança Local",
      trust2Text: "Arquitetura Zero-Upload.",
      trust3Title: "Tecnologia Transparente",
      trust3Text: "Usamos bibliotecas open-source auditadas.",
      techTitle: "Nossa Tecnologia",
      techText: "Construído usando WebAssembly moderno."
    },


    delete: {
      title: "Excluir Páginas PDF Online | pdfcanada.ca",
      desc: "Remova páginas indesejadas do seu PDF com segurança.",
      h1: "Excluir Páginas PDF",
      subtitle: "A maneira educada de remover páginas.",
      content: "Precisa excluir páginas? Nossa ferramenta facilita.",
      steps: ["Clique em Selecionar Arquivo", "Selecione as páginas para remover", "Clique em Remover Páginas"],
      quickAnswer: {
        question: "Como remover páginas específicas?",
        answer: "Você pode remover páginas gratuitamente usando nossa ferramenta local.",
        tool: "Excluir Páginas PDF",
        steps: ["Upload PDF", "Selecionar páginas", "Baixar PDF"]
      }
    },
    pdfPageRemover: {
      title: "Removedor de Páginas PDF Online | pdfcanada.ca",
      desc: "Remova páginas indesejadas do PDF.",
      h1: "Removedor de Páginas PDF",
      subtitle: "A maneira educada de remover páginas.",
      content: "Precisa de um removedor de páginas PDF? Nossa ferramenta permite selecionar e remover.",
      steps: ["Clique Selecionar Arquivo", "Clique nas páginas para remover", "Baixe seu PDF atualizado"],
      quickAnswer: {
        question: "Qual a melhor maneira de remover páginas?",
        answer: "A melhor maneira é usar uma ferramenta segura baseada em navegador.",
        tool: "Removedor de Páginas PDF",
        steps: ["Selecione arquivo", "Clique para deletar", "Salve novo PDF"]
      }
    },
    flatten: {
      title: "Achatar PDF Online | pdfcanada.ca",
      desc: "Converta páginas PDF em imagens não editáveis.",
      h1: "Achatar PDF",
      subtitle: "Bloqueie seu documento.",
      content: "Precisa garantir que seu PDF não seja editado facilmente?",
      steps: ["Selecione o PDF", "Processamos cada página", "Baixe seu PDF não editável"],
      quickAnswer: {
        question: "Como tornar um PDF não editável?",
        answer: "Achatar um PDF converte suas páginas em imagens.",
        tool: "Achatar PDF",
        steps: ["Upload PDF", "Processar", "Baixar"]
      }
    },
    rotate: {
      title: "Girar PDF Online | pdfcanada.ca",
      desc: "Gire páginas PDF para esquerda ou direita.",
      h1: "Girar Páginas PDF",
      subtitle: "Arrume esses scans invertidos.",
      content: "Escaneou errado? Use esta ferramenta para girar páginas.",
      steps: ["Upload arquivo", "Clique girar", "Aplique Rotação"],
      quickAnswer: {
        question: "Como girar permanentemente um PDF?",
        answer: "Use uma ferramenta de rotação online.",
        tool: "Girar PDF",
        steps: ["Upload", "Girar", "Salvar"]
      }
    },
    privatePdf: {
      quickAnswer: {
        question: "Por que escolher ferramentas locais?",
        answer: "Processamento local garante privacidade total.",
        tool: "Tecnologia PDF Privada",
        steps: ["Segurança Máxima", "Velocidade Instantânea", "Sem Limites"]
      }
    },
    legalPdf: {
      quickAnswer: {
        question: "Essas ferramentas são seguras para documentos legais?",
        answer: "Sim. Nossas ferramentas locais processam arquivos totalmente no navegador.",
        tool: "Ferramentas PDF Legais",
        steps: ["Selecione arquivos", "Processe localmente", "Baixe com segurança"]
      }
    },
    heic: {
      title: "Converter HEIC para PDF | pdfcanada.ca",
      desc: "Converta fotos HEIC para PDF instantaneamente.",
      h1: "Converter HEIC para PDF",
      subtitle: "Torne fotos do iPhone compatíveis.",
      content: "Converta fotos .HEIC da Apple para PDF facilmente.",
      steps: ["Selecione arquivo HEIC", "Ferramenta processa localmente", "Clique Baixar"],
      quickAnswer: {
        question: "Como converter fotos HEIC para PDF no PC?",
        answer: "Você pode converter fotos HEIC da Apple gratuitamente.",
        tool: "HEIC para PDF",
        steps: ["Escolha imagens", "Converta", "Baixe"]
      },
      faq: [
        { question: "Como converter grátis?", answer: "Simples! Use nossa ferramenta." },
        { question: "Como converter no Windows?", answer: "Use nosso site para mudar heic para pdf." },
        { question: "Como mudar no iPhone?", answer: "Você pode usar este site no iPhone!" },
        { question: "Posso combinar?", answer: "Atualmente convertemos uma por vez." },
        { question: "É seguro?", answer: "Absolutamente." }
      ]
    },
    epubToPdf: {
      title: "Converter EPUB para PDF | pdfcanada.ca",
      desc: "Converta ebooks EPUB para PDF.",
      h1: "Converter EPUB para PDF",
      subtitle: "Leia seus ebooks em qualquer dispositivo.",
      content: "Procurando converter um EPUB para PDF? Você está no lugar certo.",
      steps: ["Clique Selecionar Arquivo", "Motor local inicia conversão", "Aguarde formatação", "Baixe PDF"],
      quickAnswer: {
        question: "Como converter EPUB para PDF?",
        answer: "Você pode converter instantaneamente usando nossa ferramenta.",
        tool: "EPUB para PDF",
        steps: ["Upload epub", "Aguarde", "Baixe"]
      },
      faq: [
        { question: "Como converter grátis?", answer: "Super fácil, eh!" },
        { question: "Como converter sem perder formatação?", answer: "Nosso conversor tenta preservar o layout." },
        { question: "Posso converter no celular?", answer: "Pode sim!" },
        { question: "Como abrir EPUB como PDF?", answer: "Você precisa converter primeiro." },
        { question: "É seguro?", answer: "Com pdfcanada.ca, é!" }
      ]
    },
    pdfToEpub: {
      title: "Converter PDF para EPUB | pdfcanada.ca",
      desc: "Converta PDF para formato EPUB fluido.",
      h1: "Converter PDF para EPUB",
      subtitle: "Leve sua leitura no seu e-reader.",
      content: "Tentar ler PDF no e-reader é difícil. Converta para EPUB.",
      steps: ["Selecione PDF", "Sistema analisa texto", "Conversão local", "Baixe .epub", "Aproveite!"],
      quickAnswer: {
        question: "Como converter PDF para EPUB?",
        answer: "Para ler no e-reader, converta para EPUB.",
        tool: "PDF para EPUB",
        steps: ["Selecione PDF", "Auto-analisar", "Baixar"]
      },
      faq: [
        { question: "Como converter para Kindle?", answer: "Muitos e-readers preferem EPUB." },
        { question: "Como converter com AI?", answer: "Nossa ferramenta usa lógica inteligente." },
        { question: "Como converter no Mac/Windows?", answer: "Não precisa instalar nada." },
        { question: "Posso converter scans?", answer: "Melhor usar OCR primeiro." },
        { question: "Como converter sem erros?", answer: "Tentamos o nosso melhor." }
      ]
    },
    pdfToKindle: {
      title: "Conversor PDF para Kindle | pdfcanada.ca",
      desc: "Converta PDF para Kindle com refluxo melhorado.",
      h1: "Converter PDF para Kindle",
      subtitle: "A melhor maneira de ler seus PDFs no Kindle.",
      content: "Ama seu Kindle mas odeia ler PDFs nele? Nossa ferramenta resolve isso.",
      steps: ["Escolha PDF", "Motor detecta notas", "Conversão privada", "Baixe e envie"],
      quickAnswer: {
        question: "Como deixar PDF bom no Kindle?",
        answer: "Use um conversor especializado.",
        tool: "PDF para Kindle",
        steps: ["Upload PDF", "Otimizar", "Baixar"]
      },
      faq: [
        { question: "Por que converter?", answer: "PDFs têm layout fixo." },
        { question: "Suporta notas de rodapé?", answer: "Sim!" },
        { question: "Como transferir?", answer: "Use 'Send to Kindle'." },
        { question: "É seguro?", answer: "Absolutamente." }
      ]
    },
    fillable: {
      title: "Tornar PDF Preenchível Online | pdfcanada.ca",
      desc: "Adicione campos de texto a qualquer PDF.",
      h1: "Tornar PDF Preenchível",
      subtitle: "A maneira educada de criar formulários.",
      content: "Transforme um documento em formulário interativo.",
      steps: ["Upload PDF", "Selecione páginas", "Clique Auto-Detectar", "Baixe"],
      quickAnswer: {
        question: "Como fazer PDF preenchível grátis?",
        answer: "Nossa ferramenta detecta linhas e caixas automaticamente.",
        tool: "Tornar PDF Preenchível",
        steps: ["Upload", "Scan", "Baixar"]
      }
    },
    organizePdf: {
      title: "Organizar PDF Online | pdfcanada.ca",
      desc: "Reorganize páginas PDF facilmente.",
      h1: "Organizar Páginas PDF",
      subtitle: "Coloque as páginas na ordem perfeita.",
      content: "Precisa arrumar a ordem? Nossa ferramenta Organizar permite arrastar e soltar.",
      steps: ["Upload PDF", "Arraste e solte", "Clique Salvar", "Baixe"],
      quickAnswer: {
        question: "Como reorganizar páginas?",
        answer: "Você pode reordenar arrastando miniaturas.",
        tool: "Organizar PDF",
        steps: ["Upload", "Arrastar", "Salvar"]
      },
      faq: [
        { question: "Posso mover entre PDFs?", answer: "Ainda não!" },
        { question: "Meu arquivo original muda?", answer: "De jeito nenhum!" }
      ]
    },
    cbrToPdf: {
      title: "Converter CBR para PDF | pdfcanada.ca",
      desc: "Leia seus quadrinhos em qualquer dispositivo.",
      h1: "Converter CBR para PDF",
      subtitle: "O guia definitivo para conversão de quadrinhos.",
      content: "Tem coleção de quadrinhos digitais? Converta para PDF.",
      steps: ["Selecione arquivo .CBR ou .CBZ", "Sistema extrai imagens", "Clique Baixar"],
      quickAnswer: {
        question: "Como converter CBR para PDF?",
        answer: "Você pode converter formatos de quadrinhos gratuitamente.",
        tool: "CBR para PDF",
        steps: ["Escolha arquivo", "Extrair", "Baixar"]
      },
      faq: [
        { question: "Diferença CBR e CBZ?", answer: "CBR é RAR, CBZ é ZIP." },
        { question: "Arquivos grandes?", answer: "Sim! Sem limite de tamanho." },
        { question: "É seguro?", answer: "Absolutamente." }
      ]
    },
    sign: {
      title: "Assinar PDF Online | pdfcanada.ca",
      desc: "Assine documentos PDF online com segurança.",
      h1: "Assinar Documentos PDF",
      subtitle: "A maneira mais segura de assinar contratos.",
      content: "Precisa assinar um contrato? Nossa ferramenta permite.",
      steps: ["Upload PDF", "Escolha desenhar, digitar ou upload", "Posicione assinatura", "Redimensione", "Clique Assinar"],
      quickAnswer: {
        question: "Como assinar PDF online?",
        answer: "Use uma ferramenta que processa localmente.",
        tool: "Assinar PDF",
        steps: ["Upload", "Assinar", "Baixar"]
      }
    },
    pdfToWord: {
      title: "Como Converter e Transformar PDF em Word",
      desc: "Converta PDF para Word no Mac, PC ou Celular.",
      h1: "Converter PDF para Word",
      subtitle: "Transforme seus PDFs em documentos Word editáveis.",
      content: "Precisa mudar PDF para Word? Nossa ferramenta permite.",
      steps: ["Selecione PDF", "Ferramenta extrai texto", "Baixe arquivo Word"],
      quickAnswer: {
        question: "Como converter PDF para Word grátis?",
        answer: "Você pode converter PDF para Word (.docx) gratuitamente.",
        tool: "PDF para Word",
        steps: ["Upload", "Transformar", "Baixar"]
      }
    },
    wordToPdf: {
      title: "Como Converter e Salvar Word como PDF",
      desc: "Converta Word para PDF grátis.",
      h1: "Converter Word para PDF",
      subtitle: "PDFs profissionais dos seus documentos Word.",
      content: "Precisa converter Word para PDF? Faça com privacidade.",
      steps: ["Upload .docx", "Processamos documento", "Baixe PDF"],
      quickAnswer: {
        question: "Melhor maneira de converter Word para PDF?",
        answer: "A melhor maneira é usar um conversor local seguro.",
        tool: "Word para PDF",
        steps: ["Selecione Word", "Salvar PDF", "Baixar"]
      }
    },
    rtfToPdf: {
      title: "RTF para PDF Online | pdfcanada.ca",
      desc: "Converta RTF para PDF instantaneamente.",
      h1: "Converter RTF para PDF",
      subtitle: "PDFs profissionais de arquivos RTF.",
      content: "Transforme RTF em PDFs de alta qualidade.",
      steps: ["Upload .rtf", "Processamos documento", "Baixe PDF"],
      quickAnswer: {
        question: "Melhor maneira de converter RTF?",
        answer: "Use um conversor local seguro.",
        tool: "RTF para PDF",
        steps: ["Selecione RTF", "Gerar PDF", "Baixar"]
      }
    },
    crop: {
      title: "Cortar PDF Online | pdfcanada.ca",
      desc: "Corte páginas PDF instantaneamente.",
      h1: "Cortar Páginas PDF",
      subtitle: "Apare as margens e foque no que importa.",
      content: "Precisa remover espaço em branco? Nossa ferramenta corta.",
      steps: ["Upload PDF", "Defina área", "Aplique corte e baixe"],
      quickAnswer: {
        question: "Como cortar páginas PDF?",
        answer: "Use ferramenta de corte visual.",
        tool: "Cortar PDF",
        steps: ["Upload", "Definir área", "Baixar"]
      }
    },
    compress: {
      title: "Comprimir PDF Online | pdfcanada.ca",
      desc: "Comprima arquivos PDF para reduzir tamanho.",
      h1: "Comprimir Tamanho PDF",
      subtitle: "Deixe seus arquivos menores sem perder qualidade.",
      content: "Precisa enviar email mas é muito grande? Comprima.",
      steps: ["Selecione PDF", "Escolha nível", "Clique Comprimir"],
      quickAnswer: {
        question: "Como reduzir tamanho do PDF?",
        answer: "Você pode comprimir otimizando metadados.",
        tool: "Comprimir PDF",
        steps: ["Escolha PDF", "Selecionar nível", "Baixar"]
      },
      faq: [
        { question: "Quanto posso reduzir?", answer: "Dependendo do conteúdo, 50-90%." },
        { question: "Reduz qualidade?", answer: "Modos Bom e Equilibrado mantêm qualidade." },
        { question: "É seguro?", answer: "Sim! Processamento local." }
      ]
    },
    merge: {
      title: "Como Juntar Arquivos PDF em Um",
      desc: "Combine múltiplos PDFs em segundos.",
      h1: "Como Juntar Arquivos PDF em Um",
      subtitle: "Combine dois ou mais PDFs.",
      content: "Precisa juntar múltiplos PDFs? Nossa ferramenta permite.",
      steps: ["Selecione múltiplos arquivos", "Arraste para reordenar", "Clique Juntar"],
      quickAnswer: {
        question: "Como juntar arquivos PDF grátis?",
        answer: "Juntar PDFs é fácil com nossa ferramenta.",
        tool: "Juntar PDF",
        steps: ["Selecione PDFs", "Reordenar", "Baixar"]
      },
      faq: [
        { question: "Como juntar 2 em 1?", answer: "Simplesmente upload ambos e clique juntar." },
        { question: "Como juntar sem Acrobat?", answer: "Nossa ferramenta processa localmente." },
        { question: "Afeta qualidade?", answer: "Não!" },
        { question: "Posso 'murg' pdf?", answer: "Sim, você pode!" }
      ]
    },
    split: {
      title: "Dividir PDF Online | pdfcanada.ca",
      desc: "Divida seu PDF em páginas individuais.",
      h1: "Dividir PDF em Páginas",
      subtitle: "Separe seu PDF em arquivos individuais.",
      content: "Precisa separar um documento? Nossa ferramenta divide.",
      steps: ["Upload PDF", "Clique Dividir", "Baixe ZIP"],
      quickAnswer: {
        question: "Como dividir PDF grande?",
        answer: "Você pode dividir extraindo cada página.",
        tool: "Dividir PDF",
        steps: ["Upload", "Extrair", "Baixar ZIP"]
      },
      faq: [
        { question: "Como dividir PDF?", answer: "Upload, clique Dividir e baixe." },
        { question: "É grátis?", answer: "Sim!" },
        { question: "Posso dividir protegido?", answer: "Precisa remover senha primeiro." }
      ]
    },
    pdfToXml: {
      title: "Converter PDF para XML | pdfcanada.ca",
      desc: "Converta documentos PDF para XML.",
      h1: "Converter PDF para XML",
      subtitle: "Extraia dados estruturados.",
      content: "Transforme PDF em XML estruturado.",
      steps: ["Upload PDF", "Clique Converter", "Baixe XML"],
      quickAnswer: {
        question: "Como extrair dados estruturados?",
        answer: "Nossa ferramenta converte PDF para XML.",
        tool: "PDF para XML",
        steps: ["Upload", "Extrair", "Baixar"]
      },
      faq: [
        { question: "Quais dados são extraídos?", answer: "Texto, posições e estrutura." },
        { question: "Scans?", answer: "Melhor usar OCR antes." },
        { question: "Seguro?", answer: "Absolutamente!" }
      ]
    },
    xmlToPdf: {
      title: "Converter XML para PDF | pdfcanada.ca",
      desc: "Converta documentos XML para PDF.",
      h1: "Converter XML para PDF",
      subtitle: "Transforme dados XML em PDF.",
      content: "Converta XML em PDFs formatados.",
      steps: ["Upload XML", "Clique Converter", "Baixe PDF"],
      quickAnswer: {
        question: "Como converter XML para PDF?",
        answer: "Nossa ferramenta transforma XML em PDF.",
        tool: "XML para PDF",
        steps: ["Upload", "Gerar", "Baixar"]
      },
      faq: [
        { question: "Quais formatos?", answer: "XML padrão." },
        { question: "Posso customizar?", answer: "Cria PDF padrão." },
        { question: "Limite de tamanho?", answer: "Sem limite estrito." }
      ]
    },
    excelToPdf: {
      title: "Excel para PDF Online | pdfcanada.ca",
      desc: "Crie PDFs de Excel instantaneamente.",
      h1: "Converter Excel para PDF",
      subtitle: "PDFs profissionais de seus arquivos Excel.",
      content: "Transforme planilhas em PDFs.",
      steps: ["Upload .xlsx", "Processamos planilha", "Baixe PDF"],
      quickAnswer: {
        question: "Como converter Excel grátis?",
        answer: "Você pode converter .xlsx e .xls.",
        tool: "Excel para PDF",
        steps: ["Selecione Excel", "Gerar", "Baixar"]
      }
    },
    pdftocsv: {
      title: "Converter PDF para CSV e Excel",
      desc: "Converta PDF para CSV, Excel e QBO.",
      h1: "Extrair Dados de PDF para CSV e Excel",
      subtitle: "Extração de extrato bancário profissional.",
      content: "Pare a entrada manual. Nossa engine AI extrai tabelas.",
      steps: ["Escolha PDF", "Use Smart Merge", "Exporte CSV/XLSX"],
      quickAnswer: {
        question: "Como converter extrato para CSV?",
        answer: "Melhor usar conversor local.",
        tool: "PDF para CSV",
        steps: ["Upload", "Preview", "Baixar"]
      }
    },
    pdftoexcel: {
      title: "PDF para Excel Online",
      desc: "Converta PDF para planilhas editáveis.",
      h1: "Converter PDF para Excel",
      subtitle: "Transforme tabelas em planilhas.",
      content: "Pare de digitar. Converta tabelas PDF.",
      steps: ["Selecione PDF", "Engine mapeia", "Baixe Excel"],
      quickAnswer: {
        question: "Como transformar tabela PDF em Excel?",
        answer: "Nossa ferramenta analisa layout.",
        tool: "PDF para Excel",
        steps: ["Upload", "Analisar", "Baixar"]
      }
    },
    analyzepdf: {
      title: "Analisar Segurança PDF | pdfcanada.ca",
      desc: "Escaneie anexos PDF por malware.",
      h1: "Analisar Segurança PDF",
      subtitle: "Detecte ameaças ocultas.",
      content: "Preocupado com PDF suspeito? Nosso analisador escaneia.",
      steps: ["Selecione PDF", "Ferramenta analisa", "Revise risco", "Preview seguro"],
      quickAnswer: {
        question: "Como checar se PDF é seguro?",
        answer: "Use analisador local.",
        tool: "Analisar PDF",
        steps: ["Upload", "Checar Risco", "Preview"]
      },
      faq: [
        { question: "É seguro upload?", answer: "Sim, pois não fazemos upload!" },
        { question: "Pode simplificar?", answer: "Sim, use Achatar." },
        { question: "O que faz Preview?", answer: "Renderiza como imagens estáticas." }
      ]
    },
    ultimateGuide: {
      title: `Guia Definitivo Ferramentas PDF ${CURRENT_YEAR} | pdfcanada.ca`,
      desc: "Domine gerenciamento de PDF.",
      quickAnswer: {
        question: "Como editar PDF grátis?",
        answer: "Melhor usar ferramenta local.",
        tool: "Kit Ferramentas PDF",
        steps: ["Visite", "Selecione", "Edite", "Baixe"]
      }
    },
    editXfa: {
      title: "Como Editar PDF XFA",
      desc: "Desbloqueie e edite formulários XFA.",
      quickAnswer: {
        question: "Como editar XFA?",
        answer: "Precisa achatar primeiro.",
        tool: "Ferramenta Achatar",
        steps: ["Abrir", "Imprimir PDF", "Salvar", "Editar"]
      }
    },


    // Tools
    toolDelete: "Excluir Páginas",
    toolDeleteDesc: "Remova páginas indesejadas.",
    toolFlatten: "Tornar Não-Editável",
    toolFlattenDesc: "Achate seu conteúdo PDF.",
    toolPdfPageRemover: "Removedor de Páginas",
    toolPdfPageRemoverDesc: "Remova páginas do PDF.",
    toolRotate: "Girar PDF",
    toolRotateDesc: "Arrume páginas invertidas.",
    toolHeic: "HEIC para PDF",
    toolHeicDesc: "Converta fotos iPhone.",
    toolEpubToPdf: "EPUB para PDF",
    toolEpubToPdfDesc: "Leia ebooks como PDF.",
    toolPdfToEpub: "PDF para EPUB",
    toolPdfToEpubDesc: "Converta para e-readers.",
    toolMakeFillable: "Tornar Preenchível",
    toolMakeFillableDesc: "Adicione campos auto.",
    toolCbrToPdf: "CBR para PDF",
    toolCbrToPdfDesc: "Converta quadrinhos.",
    toolSign: "Assinar PDF",
    toolSignDesc: "Assine documentos com segurança.",
    toolPdfToWord: "PDF para Word",
    toolPdfToWordDesc: "Converta PDF para Docx.",
    toolWordToPdf: "Word para PDF",
    toolWordToPdfDesc: "Converta Word para PDF.",
    toolRtfToPdf: "RTF para PDF",
    toolRtfToPdfDesc: "Converta RTF para PDF.",
    toolExcelToPdf: "Excel para PDF",
    toolExcelToPdfDesc: "Converta planilhas para PDF.",
    toolCrop: "Cortar PDF",
    toolCropDesc: "Ajuste margens.",
    toolOrganize: "Organizar PDF",
    toolOrganizeDesc: "Reordene páginas.",
    toolInvoiceOcr: "OCR de Fatura",
    toolInvoiceOcrDesc: "Extraia dados para Excel.",
    toolCsv: "PDF para CSV",
    toolCsvDesc: "Extraia tabelas do PDF.",
    toolPdfToJpg: "PDF para JPG",
    toolPdfToJpgDesc: "Converta PDF para imagens.",
    toolPngToPdf: "PNG para PDF",
    toolPngToPdfDesc: "Converta imagens para PDF.",
    toolJpgToPdf: "JPG para PDF",
    toolJpgToPdfDesc: "Converta imagens para PDF.",
    toolExcel: "PDF para Excel",
    toolExcelDesc: "Converta tabelas para XLSX.",
    toolPhishingDetector: "Analisar PDF",
    toolPhishingDetectorDesc: "Escaneie malware.",
    toolHtmlToPdf: "HTML para PDF",
    toolHtmlToPdfDesc: "Converta HTML para PDF.",

    toolCompress: "Comprimir PDF",
    toolCompressDesc: "Reduza tamanho do arquivo.",
    toolMerge: "Juntar PDF",
    toolMergeDesc: "Combine múltiplos arquivos.",
    toolSplit: "Dividir PDF",
    toolSplitDesc: "Separe em páginas.",
    toolExtract: "Extrair Páginas",
    toolExtractDesc: "Extraia páginas selecionadas.",
    toolPdfToXml: "PDF para XML",
    toolPdfToXmlDesc: "Extraia dados estruturados.",
    toolXmlToPdf: "XML para PDF",
    toolXmlToPdfDesc: "Crie PDF de XML.",

    // Actions
    uploadTitle: "Upload Arquivo",
    uploadDesc: "ou solte arquivo aqui",
    processedLocally: "Processado localmente no seu dispositivo",
    selectFile: "Selecionar Arquivo",
    terms: "Ao enviar, você concorda com nossos Termos.",
    pages: "páginas",
    local: "Local",
    menuOpen: "Abrir menu",
    menuClose: "Fechar menu",

    // Selection View
    selectPagesHeader: "Selecione páginas:",
    selected: "selecionado",
    rotateLeft: "Esquerda",
    rotateRight: "Direita",
    rotateAllLeft: "Girar Tudo Esq",
    rotateAllRight: "Girar Tudo Dir",
    resetRotations: "Resetar",
    selectPagesToFill: "Selecione páginas para scanner:",

    // Tool Specific Inputs
    deletePagesInfo: "Clique nas páginas para remover.",
    totalPages: "Total páginas",
    pagesToRemove: "Páginas para remover",
    signPagesInfo: "Coloque sua assinatura.",
    addSignature: "Adicionar Assinatura",
    addInitials: "Adicionar Iniciais",
    signUpload: "Upload",

    pan: "Mover",
    newSignature: "Nova Assinatura",
    newInitials: "Novas Iniciais",
    loadingPage: "Carregando...",
    pageNumber: "Página {number}",
    signTools: "Ferramentas",
    signatures: "Assinaturas",
    createNewSignature: "Criar Nova",
    initials: "Iniciais",
    createNewInitials: "Criar Novas",
    annotation: "Anotação",
    date: "Data",
    text: "Texto",
    check: "Check",
    btnDeleteEntry: "Deletar",
    done: "Pronto",
    edit: "Editar",
    undo: "Desfazer",
    redo: "Refazer",
    quickAdd: "Adic. Rápido",
    todaysDate: "Data de Hoje",
    textField: "Campo Texto",
    of: "de",

    // Form Builder
    fbTitle: "Criador de Formulário",
    fbAddText: "Add Caixa Texto",
    fbAddCheckbox: "Add Checkbox",
    fbCancel: "Cancelar",
    fbDownload: "Baixar Formulário",
    fbPage: "Página",

    // Buttons
    btnRemove: "Remover Páginas",
    btnRotate: "Aplicar Rotação",
    btnFlatten: "Tornar Não-Editável",
    btnCrop: "Cortar PDF",
    btnConvert: "Converter Arquivo",
    btnMakeFillable: "Auto-Detectar & Preencher",
    btnPreviewCrop: "Preview Corte",
    btnFinalize: "Finalizar Corte",
    cropPreview: "Preview Corte",
    before: "Antes",
    after: "Depois",
    previewModeInfo: "Revise o resultado.",
    btnCancel: "Cancelar",
    btnSave: "Salvar",
    btnSplit: "Dividir PDF",
    btnExtract: "Extrair Páginas",
    btnCompress: "Comprimir PDF",
    processedSize: "Tamanho Processado",
    selectAll: "Selecionar Tudo",
    selectNone: "Selecionar Nada",
    selectOdd: "Selecionar Ímpar",
    selectEven: "Selecionar Par",
    toolRotateInfo: "Clique para girar.",
    readyToConvertDesc: "Pronto para converter {fileName}.",
    btnTryAgain: "Tentar Novamente",
    processing: "Processando...",
    errorGeneric: "Ocorreu um erro.",

    working: "Trabalhando...",
    workingDesc: "Escaneando campos.",
    doneTitle: "Beleza! Está pronto.",
    doneDesc: "Seu arquivo está pronto.",

    doAnother: "Fazer outro",
    backToHome: "Voltar",

    // Errors
    errorTitle: "Ops!",
    genericError: "Algo deu errado. Detalhes: {detail}",
    fileTypeErr: "Desculpe, não aceitamos esse tipo de arquivo.",
    readErr: "Desculpe, não conseguimos ler o arquivo.",
    passwordErr: "Este PDF está protegido por senha. Por favor, desbloqueie primeiro.",
    corruptPdfErr: "O arquivo PDF parece corrompido.",
    conversionErr: "Ops! Falha ao converter arquivo. Detalhes: {detail}",
    emptyEpubErr: "Não foi possível extrair texto.",

    // Nav
    navTools: "Ferramentas",
    navGuides: "Guias",
    navAbout: "Sobre",
    navHowTo: "Como usar",
    navSupport: "Apoie Local",
    navPricing: "Preço",
    footerEditGroup: "Ferramentas PDF",
    footerGuidesGroup: "Guias de Edição",
    footerFormatGroup: "Guias de Formato",
    login: "Entrar",
    signup: "Cadastrar",

    // Footer
    footerBuilt: "Orgulhosamente feito no Canadá.",
    footerMade: "Feito com",
    footerLocation: "e Maple Syrup em Toronto, ON.",
    footerRights: "Todos os direitos reservados, desculpe.",
    footerTagline: "A ferramenta PDF favorita do Canadá.",
    footerPrivacyNotice: "Nós não rastreamos você.",
    termsService: "Termos de Serviço",
    privacy: "Política de Privacidade",
    sorryPolicy: "Política de Desculpas",
    makeFillableFooter: "Como tornar um PDF preenchível",

    // Pages Content
    pricingTitle: "Preço Simples",
    pricingSubtitle: "Preços honestos para pessoas honestas.",
    freePlan: "O Plano 'Amigão'",
    freeCost: "$0 CAD",
    freeFeature1: "Conversões PDF ilimitadas",
    freeFeature2: "Sem conta necessária",
    freeFeature3: "Mensagens de erro educadas",
    freeFeature4: "Processamento local (Seguro)",
    enterprisePlan: "O Plano 'Double Double'",
    enterpriseCost: "$0 CAD",
    enterpriseFeature1: "Tudo do plano Amigão",
    enterpriseFeature2: "Pedimos desculpas duas vezes mais",
    enterpriseFeature3: "Entrega prioritária de maple syrup (opcional)",

    // Timbits Support Tier
    timbitsPlan: "A Gorjeta 'Timbits'",
    timbitsCost: "$1 CAD",
    timbitsDesc: "Uma moedinha faz diferença!",
    timbitsFeature1: "Manter servidores funcionando",
    timbitsFeature2: "Financiar novos recursos e ferramentas",
    timbitsFeature3: "Apoiar devs canadenses independentes",
    timbitsFeature4: "Receber nossos agradecimentos",
    timbitsButton: "Doar uma Moeda",

    privacyTitle: "Política de Privacidade",
    privacyEffectiveDate: "Data de vigência: Janeiro de 2026",
    privacyText1: "No pdfcanada.ca, acreditamos que seus assuntos são seus assuntos. Como processamos arquivos localmente no seu dispositivo usando tecnologia WebAssembly, seus documentos nunca são enviados para nossos servidores.",
    privacyText2: "Não usamos cookies para rastreá-lo. Não vendemos seus dados. Nem pedimos seu email. É só você e seu PDF.",
    privacyGuaranteeTitle: "Garantia de Processamento Local",
    privacyGuaranteeText: "Não operamos servidores backend para processamento de arquivos. Tudo acontece aqui mesmo no seu navegador usando WebAssembly.",

    privacyCookiesTitle: "Cookies e Tecnologias de Rastreamento",
    privacyCookiesText: "Embora não usemos cookies para processamento de arquivos, serviços de terceiros em nosso site podem usar cookies e tecnologias de rastreamento semelhantes. Isso inclui parceiros de publicidade que ajudam a manter nosso serviço gratuito.",

    privacyThirdPartyTitle: "Publicidade de Terceiros",
    privacyThirdPartyText1: "Usamos o Google AdSense para exibir anúncios em nosso site. O Google, como fornecedor terceiro, usa cookies para veicular anúncios com base em suas visitas anteriores ao nosso site e a outros sites.",
    privacyThirdPartyText2: "O uso de cookies de publicidade pelo Google permite que o Google e seus parceiros veiculem anúncios para você com base em sua visita ao nosso site e/ou a outros sites na Internet.",
    privacyThirdPartyText3: "Você pode desativar a publicidade personalizada visitando as Configurações de Anúncios do Google em https://www.google.com/settings/ads. Alternativamente, você pode desativar cookies de terceiros visitando a página de opt-out da Network Advertising Initiative em https://optout.networkadvertising.org.",

    privacyDataCollectionTitle: "Informações que Coletamos",
    privacyDataCollectionText: "Coletamos informações mínimas necessárias para fornecer nosso serviço: análises básicas de uso (visualizações de página, localização geral por país) e qualquer informação que você forneça voluntariamente ao nos contatar. NÃO coletamos nem armazenamos seus arquivos enviados—todo o processamento acontece localmente no seu navegador.",

    privacyYourRightsTitle: "Seus Direitos de Privacidade (LGPD/GDPR/CCPA)",
    privacyYourRightsText: "Dependendo da sua localização, você pode ter o direito de: acessar os dados pessoais que mantemos sobre você, solicitar correção de dados imprecisos, solicitar exclusão de seus dados, recusar publicidade personalizada e apresentar reclamação a uma autoridade supervisora. Como processamos arquivos localmente e coletamos dados mínimos, a maioria das solicitações pode ser atendida simplesmente limpando o cache do navegador.",

    privacyChildrenTitle: "Privacidade de Crianças",
    privacyChildrenText: "Nosso serviço não é direcionado a crianças menores de 13 anos. Não coletamos intencionalmente informações pessoais de crianças menores de 13 anos.",

    privacyContactTitle: "Entre em Contato",
    privacyContactText: "Se você tiver dúvidas sobre esta Política de Privacidade ou desejar exercer seus direitos, entre em contato conosco em: privacy@pdfcanada.ca",

    privacyChangesTitle: "Alterações nesta Política",
    privacyChangesText: "Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre quaisquer alterações publicando a nova Política nesta página e atualizando a 'Data de vigência' acima.",

    termsTitle: "Termos de Serviço",
    termsEffectiveDate: "Data de vigência: Janeiro de 2026",
    termsText1: "Ao usar este serviço, você concorda em ser gentil.",
    termsText2: "Por favor, não use nossas ferramentas para coisas ilegais. Isso não é legal.",
    termsText3: "Fornecemos este serviço 'como está'. Se quebrar, sentimos muito, mas não podemos ser responsabilizados por dados perdidos. Sempre faça backup!",
    termsText4: "Este site pode exibir anúncios veiculados pelo Google AdSense para ajudar a manter o serviço. Esses anúncios são gerenciados pelo Google e podem usar cookies para personalizar o conteúdo com base na sua atividade de navegação. Ao usar este site, você reconhece e aceita o uso de publicidade.",

    termsAcceptableUseTitle: "Uso Aceitável",
    termsAcceptableUseText: "Você concorda em usar nossas ferramentas apenas para fins legais. Você não pode usar nosso serviço para processar documentos contendo conteúdo ilegal, malware ou material que infrinja os direitos de propriedade intelectual de terceiros.",

    termsIntellectualPropertyTitle: "Propriedade Intelectual",
    termsIntellectualPropertyText: "O serviço pdfcanada.ca, incluindo seu design, recursos e conteúdo (excluindo documentos enviados pelos usuários), é de nossa propriedade. Seus documentos permanecem sua propriedade—nunca acessamos, armazenamos ou reivindicamos propriedade de seus arquivos.",

    termsDisclaimerTitle: "Isenção de Garantias",
    termsDisclaimerText: "Nosso serviço é fornecido 'como está' sem garantias de qualquer tipo. Não garantimos serviço ininterrupto, operação sem erros ou resultados específicos. Use nossas ferramentas a seu critério.",

    termsLiabilityTitle: "Limitação de Responsabilidade",
    termsLiabilityText: "Na máxima extensão permitida por lei, não seremos responsáveis por quaisquer danos indiretos, incidentais, especiais, consequenciais ou punitivos decorrentes do uso de nosso serviço.",

    termsModificationsTitle: "Modificações dos Termos",
    termsModificationsText: "Reservamo-nos o direito de modificar estes Termos a qualquer momento. O uso contínuo do serviço após as alterações constitui aceitação dos Termos modificados.",

    termsGoverningLawTitle: "Lei Aplicável",
    termsGoverningLawText: "Estes Termos são regidos pelas leis de Ontário, Canadá. Quaisquer disputas serão resolvidas nos tribunais de Ontário.",

    sorryTitle: "Nossa Política Oficial de Desculpas",
    sorryText1: "No caso improvável de algo dar errado:",
    sorryList1: "1. Vamos pedir desculpas imediatamente.",
    sorryList2: "2. Vamos tentar consertar.",
    sorryList3: "3. Vamos pedir desculpas de novo, só por segurança.",

    howtoTitle: "Como Funciona",
    howtoStep1: "Selecione uma ferramenta do painel principal.",
    howtoStep2: "Escolha seu arquivo (PDF, HEIC ou EPUB).",
    howtoStep3: "Siga as instruções educadas na tela.",
    howtoStep4: "Baixe seu novo arquivo. Fácil assim.",

    fillablePageTitle: "Como tornar um PDF preenchível",
    fillablePageSubtitle: "O guia educado para criar formulários interativos.",
    fillableIntro: "Quer criar um documento onde as pessoas possam digitar? Usamos tecnologia inteligente para encontrar linhas e caixas automaticamente.",
    fillableStep1: "Envie seu PDF para nossa ferramenta 'Tornar PDF Preenchível'.",
    fillableStep2: "Selecione as páginas onde você quer que as pessoas possam digitar.",
    fillableStep3: "Encontramos automaticamente linhas '_____' e caixas '[ ]' e as tornamos interativas.",
    fillableStep4: "Baixe e compartilhe. Seus destinatários agora podem digitar diretamente na página.",
    fillableProTip: "Dica Pro: Use sublinhados padrão para melhores resultados de detecção.",
    fillableWhy: "Por que usar nossa ferramenta?",
    fillableWhyText: "A maioria dos softwares que fazem isso custam muito caro. Nós fazemos de graça, localmente no seu dispositivo, porque é a coisa certa a fazer.",

    invoiceOcr: {
      dragDrop: "Arraste & Solte Fatura",
      clickUpload: "ou Clique para Upload",
      scanBtn: "Escanear Fatura",
      scanning: "Escaneando...",
      results: "Detalhes Pagamento",
      fieldId: "Número Fatura",
      fieldDate: "Data Fatura",
      fieldTotal: "Valor Total",
      fieldVendor: "Nome Vendedor",
      visualConfidence: "Confiança",
      exportExcel: "Exportar Excel",
      exportCsv: "Exportar CSV",
      copyData: "Copiar Dados",
      newScan: "Escanear Outra",
      fallbackAlert: "Imagem detectada. Usando Tesseract...",
      successMsg: "Dados extraídos com sucesso!"
    },
    pdfToUbl: {
      title: "Gerador UBL 2.1",
      vendor: "Detalhes do Fornecedor",
      customer: "Detalhes do Cliente",
      invoice: "Dados da Fatura",
      items: "Itens",
      totals: "Totais & Impostos",
      download: "Baixar UBL XML",
      scan: "Digitalizar PDF",
      scanError: "Falha ao extrair dados. Verifique o PDF."
    },
    pdfToCsv: {
      analyzing: "analisando layout espacial...",
      mapping: "mapeando colunas e linhas localmente",
      extractionFailed: "Falha na Extração",
      extractionError: "Não conseguimos extrair a tabela deste PDF.",
      transactionsFound: "Transações Encontradas",
      confidence: "Confiança",
      localProcessing: "Processamento Local",
      extractionOptions: "Opções de Extração",
      smartMerge: "Fusão Multilinha Inteligente",
      smartMergeDesc: "Junta descrições em várias linhas",
      normalization: "Normalização Financeira",
      normalizationDesc: "Padroniza datas e limpa símbolos monetários",
      aiInsight: "Insight de IA",
      aiMessage: "Nosso detector notou que isso parece um extrato bancário.",
      showingRows: "Mostrando {visible} de {total} linhas",
      loadMore: "Carregar Mais Linhas",
      uploadPrompt: "Envie um PDF para ver as transações",
      privacy: "Privacidade: 100% Offline",
      poweredBy: "Desenvolvido por PDFCA Spatial Engine 2.0",
      transactions: "Transações",
      credits: "Créditos Totais",
      debits: "Débitos Totais",
      net: "Variação Líquida",
      readyToConvert: "Pronto para Converter",
      selectAction: "Como você gostaria de processar este arquivo?",
      previewEdit: "Pré-visualizar e Editar",
      previewEditDesc: "Visualize os dados, mescle colunas e verifique antes de baixar.",
      quickConvert: "Conversão Rápida",
      quickConvertDesc: "Pule a pré-visualização e baixe o arquivo Excel imediatamente.",
      successTitle: "Conversão Bem-sucedida!",
      successDesc: "Seu arquivo Excel foi baixado.",
      viewData: "Ver Dados Extraídos",
      convertAnother: "Converter Outro"
    },
    barcode: {
      title: "Gerador Código Barras Code 128",
      subtitle: "Geração profissional de código de barras.",
      singleMode: "Único/Manual",
      bulkMode: "Geração em Massa",
      sequenceTitle: "Gerar Sequência",
      prefixLabel: "Prefixo",
      prefixPlaceholder: "ex: BC",
      suffixLabel: "Sufixo",
      suffixPlaceholder: "ex: -A",
      startLabel: "Início *",
      startPlaceholder: "1",
      endLabel: "Fim *",
      endPlaceholder: "100",
      generateBtn: "Gerar Sequência",
      sequenceExample: "Exemplo: Prefixo + Números",
      settingsTitle: "Configurações",
      formatLabel: "Formato",
      formatAuto: "Auto",
      formatA: "A",
      formatB: "B",
      formatC: "C",
      widthLabel: "Largura Barra",
      heightLabel: "Altura",
      fontSizeLabel: "Tamanho Fonte",
      bgColorLabel: "Cor Fundo",
      barColorLabel: "Cor Barra",
      showTextLabel: "Mostrar Texto",
      exportFormatLabel: "Exportar Formato",
      exportPNG: "PNG",
      exportSVG: "SVG",
      exportPDF: "PDF",
      inputPlaceholder: "Digite dados",
      downloadBtn: "Baixar",
      copyBtn: "Copiar",
      copiedBtn: "Copiado!",
      addBtn: "Adicionar Outro",
      exportAllBtn: "Exportar Tudo PDF",
      barcodes: "códigos",
      infoTitle: "Funcionalidades:",
      infoAuto: "Seleção auto",
      infoA: "Maiúsculas",
      infoB: "ASCII Completo",
      infoC: "Numérico",
      infoBulk: "Geração em massa",
      infoExport: "Exportar PNG/SVG",
      infoCustom: "Customizável",
      seoWhat: "O que é?",
      seoUseCases: "Casos de Uso",
      seoHowTo: "Como Usar",
      seoBenefits: "Benefícios",
      seoFAQ: "FAQ",
      seoTechSpecs: "Specs Técnicas",
      errorInvalid: "Números inválidos",
      errorGenerate: "Falha ao gerar",
      errorFile: "Falha ao ler arquivo",
      errorExport: "Falha exportar",
      errorMinBarcodes: "Adicione um código",
      downloadTitle: "Baixar ou Copiar",
      downloadDesc: "Escolha seu formato (PNG, SVG, PDF) e clique em Baixar. Você também pode copiar códigos de barras ou exportar tudo como PDF de várias páginas."
    },
    kindleSettings: "Otimização Kindle",
    kindleSettingsDesc: "Escolha como otimizar.",
    reflowableMode: "EPUB Fluido",
    reflowableDesc: "Melhor para texto.",
    visualMode: "PDF Visual",
    visualDesc: "Corte inteligente.",
    kindleScreenSize: "Tamanho Tela",
    reflowInfo: "Será convertido para EPUB 3.0.",
    visualInfo: "Otimização estilo K2PdfOpt.",

    // Footer & Navigation
    footerHubsGuides: "Hubs & Guias",
    footerResources: "Recursos",
    footerConversions: "Conversões",
    footerEditing: "Edição",
    footerSecurity: "Segurança",
    footerOcrAnalysis: "OCR & Análise",
    footerViewAllGuides: "Ver Todos os Guias →",
    footerAboutUs: "Sobre Nós",
    footerPricing: "Preços",
    footerPrivatePdf: "Ferramentas PDF Privadas",
    footerFinanceSecurity: "Segurança PDF Financeiro",
    footerLegalSecurity: "PDF Jurídico",
    footerHealthcareSecurity: "PDF Saúde",
    footerDownloads: "Downloads",
    footerSurahBaqarah: "Surata Baqarah PDF",
    footerSurahYasin: "Surata Yasin PDF",
    footerSecurityTitle: "Segurança"
  }
};


export type TranslationType = typeof translations.en;

// Breadcrumb utility helpers for consistent localization
export const getLocalizedHome = (lang: Language): string => {
  return lang === 'fr' ? 'Accueil' : (lang === 'pt' ? 'Início' : 'Home');
};

export const getLocalizedGuides = (lang: Language): string => {
  return lang === 'pt' ? 'Guias' : 'Guides';
};

export const getHomePath = (lang: Language): string => {
  return lang === 'en' ? '/' : `/${lang}`;
};

export const getGuidesPath = (lang: Language): string => {
  return `/${lang}/guides`;
};

// Helper to create standardized breadcrumbs
export const createBreadcrumbs = (lang: Language, items: { name: string; path: string }[]) => {
  return [
    { name: getLocalizedHome(lang), path: getHomePath(lang) },
    ...items
  ];
};
