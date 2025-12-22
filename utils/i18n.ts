export type Language = 'en' | 'fr';

export const translations = {
  en: {
    builtIn: "Built in Canada",
    title: "The Polite PDF Tools",
    subtitle: "Free, Secure, Canadian.",
    description: "We help you manage your documents without the fuss. Select a tool below, eh?",
    localProcessing: "100% Local Processing",
    localProcessingDesc: "Your files never leave your browser. All processing happens on your device.",
    noSignup: "No Signup Required",
    secure: "Secure & Private",
    guarantee: "Sorry-free Guarantee",
    selectToolTitle: "Select a Tool",
    eh: " eh?",
    ultimateGuide: "Ultimate PDF Guide 📖",
    editXfaGuide: "Edit XFA PDF Guide 🖨️",
    organizePdf: "Organize PDF",
    organizePdfDesc: "Reorder pages",
    dragToReorder: "Drag pages to reorder",

    // Sign Tool
    btnSign: "Finish & Download",
    drawTitle: "Draw",
    typeTitle: "Type",
    btnCreate: "Create",



    // Compress Tool
    // Compress Tool
    btnCompress: "Compress PDF",
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

    // SEO General
    seo: {
      homeTitle: "Free PDF Tools Canada | Online & Secure No-Upload Service | pdfcanada.ca",
      homeDesc: "The Polite Canadian PDF Tools. 100% free & secure in 2026. Merge, compress, and convert PDFs directly in your browser. No uploads—your files never leave your device.",
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
          a: "We offer a full suite of PDF tools including: Delete Pages, Rotate PDF, Merge PDF, Compress PDF, HEIC to PDF, EPUB to PDF, CBR (Comic) to PDF, OCR (Make PDF Searchable), PDF to Word, Word to PDF, Sign PDF, and a PDF Form Filler."
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
      pricingTitle: "Free PDF Tools Pricing | Only $0 Forever | pdfcanada.ca",
      pricingDesc: "Unbelievably free PDF tools. $0 CAD for unlimited file conversions, merges, and edits. No hidden fees, no subscriptions, just polite Canadian service.",
      privacyTitle: "Privacy Policy & Data Security | pdfcanada.ca",
      privacyDesc: "Our 2026 privacy commitment: All PDF processing happens locally in your browser via WebAssembly. Your files are never uploaded, ensuring maximum security and trust.",
      termsTitle: "Terms of Service - Friendly & Secure | pdfcanada.ca",
      termsDesc: "Read our polite 2026 terms of service. We focus on document privacy and user-friendly tools that keep your files safe on your device. Free to use for everyone.",
      howtoTitle: "How to Use pdfcanada.ca | PDF Tutorials",
      howtoDesc: "Easy instructions on how to delete PDF pages, rotate documents, and convert files using pdfcanada.ca.",
      supportTitle: "Support Local Canadian Developers | Donate | pdfcanada.ca",
      supportDesc: "Support the Canadian team building free, privacy-focused PDF tools. Buy us a coffee or a timbit to keep the servers running.",
      sorryTitle: "Sorry Policy - pdfcanada.ca",
      sorryDesc: "Our guarantee to apologize if anything goes wrong. The most Canadian policy on the web.",
      fillableTitle: "How to make a PDF fillable | pdfcanada.ca",
      fillableDesc: "Learn how to make a PDF fillable for free using our Canadian tools. Add text fields to flat PDFs securely and locally."
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
          answer: "No catch. We run lean using local processing technology (your browser does the work), so our server costs are low. We accept optional donations (Timbits!) to cover the basics."
        },
        {
          question: "Can I use this for my business?",
          answer: "Absolutely. Our free PDF tools are perfect for small businesses, freelancers, and anyone who wants to save money on expensive software."
        },
        {
          question: "How does the 'Timbits' support work?",
          answer: "It's an optional $1 tip. If you love our service and want to say thanks, you can 'buy us a Timbit'. It helps us keep the lights on and the code flowing."
        }
      ]
    },
    supportPage: {
      content: "We're a small team of developers based in Toronto, Ontario, dedicated to building the most polite and private PDF tools on the internet. Unlike big corporations that harvest your data, we built pdfcanada.ca to process everything locally on your device. Your files never leave your computer. By supporting us, you're backing indie Canadian software and helping us maintain a free utility for everyone.",
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
    features: {
      delete: {
        title: "Delete PDF Pages Online - Remove Pages from PDF for Free | pdfcanada.ca",
        desc: "Remove unwanted pages from your PDF securely. Select pages visually and delete them instantly. No uploads—all processing happens on your device. Free & private.",
        h1: "Delete PDF Pages",
        subtitle: "The polite way to remove unwanted or blank pages.",
        content: "Need to remove a page from your document? Maybe there's a blank page, or some sensitive info you'd rather not share. Our tool lets you select and delete specific pages from your PDF file. It happens instantly in your browser.",
        steps: [
          "Click the 'Select File' button to choose your PDF document.",
          "You will see thumbnails of all your pages. Simply click on the pages you wish to remove. They will be marked with a trash icon.",
          "Click 'Remove Pages' to instantly download your clean, updated PDF."
        ]
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
        ]
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
        ]
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
        ]
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
        ]
      },
      ocr: {
        title: "OCR PDF Online - Make PDF Searchable for Free | No-Upload Service | pdfcanada.ca",
        desc: "Convert scanned PDFs into searchable text for free in 2026. High-accuracy OCR processed 100% locally in your browser. Secure, fast, and no-upload required—keep your data private.",
        h1: "OCR PDF & Searchable",
        subtitle: "Unlock text in your scans securely and for free.",
        content: "Turn those flat images and scans into real text you can search and copy. Our OCR tool runs right in your browser—private and secure.",
        steps: ["Upload your scanned PDF.", "Select the languages in your document.", "Download your new searchable PDF."],
        faq: [
          { q: "What is OCR?", a: "OCR stands for Optical Character Recognition. It's the tech that turns pictures of words into actual digital words." },
          { q: "Is it accurate?", a: "Pretty darn good! But handwriting can be tricky. Typed text works best." }
        ]
      },
      organizePdf: {
        title: "Organize PDF Online - Reorder & Rearrange PDF Pages for Free | pdfcanada.ca",
        desc: "Rearrange PDF pages easily with drag-and-drop in 2026. Reorder your PDF document securely in your browser. No uploads—your files remain 100% private on your device.",
        h1: "Organize PDF Pages",
        subtitle: "Get your document's pages in the perfect order.",
        content: "Need to fix the page order of your PDF? Our Organize PDF tool lets you drag and drop pages to rearrange them exactly how you want.",
        steps: [
          "Upload your valid PDF file.",
          "Drag and drop the page thumbnails to reorder them.",
          "Click 'Save Organized PDF' to download.",
          "Download your meticulously organized PDF document."
        ],
        faq: [
          { q: "Can I move pages between PDFs?", a: "Not yet! Currently you can only reorder pages within a single file." },
          { q: "Is my original file changed?", a: "No way! We create a new copy with the new order." }
        ]
      },
      cbrToPdf: {
        title: "CBR to PDF Converter - Convert Comic Books Online | pdfcanada.ca",
        desc: "Read your comics on any device. Our 2026 guide shows you how to convert CBR/CBZ to PDF securely in your browser. No uploads, processed entirely on your device.",
        h1: "Convert CBR to PDF",
        subtitle: "The definitive guide to digital comic conversion.",
        content: "Got a collection of digital comics in CBR or CBZ format? While these are great for specialized readers, sometimes you just want a PDF to read on your tablet or share with a friend. Our CBR to PDF converter makes it easy to change comic book archives into standard PDF documents. We support both CBR (RAR-based) and CBZ (ZIP-based) files. \n\nMost online converters make you upload your comics to their servers. But digital comics can be large, and your privacy matters. That's why pdfcanada.ca processes your comics right in your browser. No uploading, no waiting for a queue, just fast and secure conversion. Whether you're looking for how to convert cbr to pdf for free or need a bulk cbr to pdf tool, we've got you covered with our Canadian-made tool.",
        steps: [
          "Select your .CBR or .CBZ file from your device.",
          "Our system extracts the images and compiles them into a single PDF document.",
          "Once the conversion is complete, click 'Download' to save your new PDF comic."
        ],
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
        desc: "Sign PDF documents online securely in 2026. Add signatures, initials, and dates locally in your browser. Your sensitive documents never leave your computer. Fast & Free.",
        h1: "E-sign PDF Documents",
        subtitle: "The most secure way to sign contracts and forms.",
        content: "Need to sign a contract, lease, or form? Our e-sign tool lets you add professional signatures, initials, and dates to any PDF. Everything happens locally on your device, so your sensitive documents and signatures never leave your browser.",
        steps: [
          "Upload the PDF document you need to sign.",
          "Choose to either draw, type, or upload your signature.",
          "Place your signature, initials, or the current date anywhere on the document.",
          "Resize and move elements until they look just right.",
          "Click 'Sign PDF' to download your securely signed document."
        ]
      },
      pdfToWord: {
        title: "PDF to Word Online - Convert PDF to Editable DOCX | Free & Secure",
        desc: "Convert PDF to editable Word documents for free in 2026. Our local-first converter keeps your data secure on your device. Fast, accurate, and 100% private—no signup.",
        h1: "Convert PDF to Word",
        subtitle: "Make your PDFs editable again—accurately & securely.",
        content: "Need to edit a PDF? Convert it to a Word document (.docx) effortlessly. Our local processing ensures your sensitive data never leaves your device.",
        steps: [
          "Select the PDF you want to convert.",
          "Our tool extracts the text and formatting into a Word document.",
          "Download your editable .docx file."
        ]
      },
      wordToPdf: {
        title: "Word to PDF Online - Convert DOCX to PDF for Free | pdfcanada.ca",
        desc: "Create high-quality PDFs from Word documents instantly in 2026. Our secure converter processes files locally—no uploads, no tracking, just fast and free Canadian service.",
        h1: "Convert Word to PDF",
        subtitle: "Professional PDFs from your DOCX files instantly.",
        content: "Turn your Word documents into high-quality PDFs. Perfect for sharing and printing, with local security you can trust.",
        steps: [
          "Upload your .docx file.",
          "We process the document and generate a professional PDF.",
          "Download your new PDF file."
        ]
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
        ]
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
        faq: [
          { question: "How much can I reduce my PDF file size?", answer: "Depending on the content, you can reduce file size by 50-90%. Image-heavy PDFs see the biggest reductions." },
          { question: "Will compression reduce quality?", answer: "Our 'Good' and 'Balanced' modes maintain excellent quality. 'Extreme' mode prioritizes size over quality." },
          { question: "Is PDF compression secure?", answer: "Yes! All processing happens locally in your browser. Your files never leave your device." }
        ]
      },
      merge: {
        title: "Merge PDF Online - Free & Secure No-Upload Tool | pdfcanada.ca",
        desc: "Select & merge multiple PDF files in seconds securely in your browser. Combine PDFs online with 100% privacy—no files ever leave your device. Fast, free & Canadian.",
        h1: "Merge PDF Files",
        subtitle: "Combine multiple PDFs into one document securely.",
        content: "Have multiple PDF files that should be one document? Our Merge PDF tool lets you combine them easily. Drag and drop to reorder, then merge them into a single file.",
        steps: [
          "Select the PDF files you want to merge.",
          "Drag and drop the files to rearrange the order.",
          "Click 'Merge PDFs' to download your combined document."
        ],
        faq: [
          { question: "How many PDFs can I merge at once?", answer: "There's no limit! Merge as many PDF files as you need. All processing happens locally in your browser." },
          { question: "Can I reorder pages before merging?", answer: "Yes! Drag and drop files to rearrange their order before merging into one document." },
          { question: "Will merging affect my PDF quality?", answer: "No! Our merge tool preserves the original quality of all your documents." }
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
        faq: [
          { question: "What XML formats are supported?", answer: "Our converter supports standard XML files. The tool extracts text content and formats it into a clean, readable PDF document." },
          { question: "Can I customize the PDF output?", answer: "Currently, the tool creates a standard formatted PDF. For advanced customization, consider using templates or post-processing tools." },
          { question: "Is there a file size limit?", answer: "There's no strict limit, but very large XML files may take longer to process. All processing is done locally in your browser." }
        ]
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
    toolOcr: "OCR PDF",
    toolOcrDesc: "Extract text from scans.",
    toolCbrToPdf: "CBR to PDF",
    toolCbrToPdfDesc: "Convert comics to PDF.",
    toolSign: "Sign PDF",
    toolSignDesc: "E-sign documents securely.",
    toolPdfToWord: "PDF to Word",
    toolPdfToWordDesc: "Convert PDF to editable Docx.",
    toolWordToPdf: "Word to PDF",
    toolWordToPdfDesc: "Convert Word docx to PDF.",
    toolCrop: "Crop PDF",
    toolCropDesc: "Adjust page margins.",
    toolOrganize: "Organize PDF",
    toolOrganizeDesc: "Reorder or remove pages.",

    toolCompress: "Compress PDF",
    toolCompressDesc: "Reduce file size.",
    toolMerge: "Merge PDF",
    toolMergeDesc: "Combine multiple PDFs.",
    toolSplit: "Split PDF",
    toolSplitDesc: "Separate into pages.",
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

    // Selection View
    selectPagesHeader: "Select pages:",
    selected: "selected",
    rotateLeft: "Left",
    rotateRight: "Right",
    rotateAllLeft: "Rotate All Left",
    rotateAllRight: "Rotate All Right",
    resetRotations: "Reset",
    selectPagesToFill: "Select pages to scan for fields:",
    selectPagesForOcr: "Select pages to extract text from:",
    ocrProgress: "Recognizing text...",

    // Tool Specific Inputs
    deletePagesInfo: "Click on pages to remove from document. You can use \"shift\" key to set ranges.",
    totalPages: "Total pages",
    pagesToRemove: "Pages to remove",
    signPagesInfo: "Place your signature or initials on the document.",
    addSignature: "Add Signature",
    addInitials: "Add Initials",
    signUpload: "Upload",
    select: "Select",
    pan: "Pan",
    newSignature: "New signature",
    newInitials: "New initials",

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
    btnExtractText: "Extract Text",
    btnSearchablePdf: "Make Searchable PDF",
    btnCancel: "Cancel",
    btnSave: "Save",

    working: "Working on it...",
    workingDesc: "Scanning for fields and fixing that up for you, eh.",
    doneTitle: "Beauty! It's done.",
    doneDesc: "Your file is ready.",
    download: "Download",
    doAnother: "Do another one",
    backToHome: "Back to Tools",

    // Errors
    errorTitle: "Oh snap!",
    genericError: "Something went wrong. Sorry!",
    fileTypeErr: "Sorry about that, but we don't accept that file type, eh?",
    readErr: "Sorry, we couldn't read that file. It might be corrupted.",
    passwordErr: "This PDF is password protected. Please unlock it first, eh.",
    corruptPdfErr: "The PDF file appears to be corrupt or invalid.",
    conversionErr: "Failed to convert the file. It might be too complex or damaged.",
    emptyEpubErr: "Could not extract text from this EPUB.",

    // Nav
    navHowTo: "How to use",
    navSupport: "Support Local",
    navPricing: "Pricing",
    footerEditGroup: "Edit & Optimize",
    footerConvertGroup: "Convert PDF",
    footerGuidesGroup: "Guides & Help",
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
    privacyText1: "At pdfcanada.ca, we believe that your business is your business. Because we process files locally on your device using WebAssembly technology, your documents never actually upload to our servers.",
    privacyText2: "We don't use cookies to track you across the web. We don't sell your data. We don't even ask for your email. It's just you and your PDF.",

    termsTitle: "Terms of Service",
    termsText1: "By using this service, you agree to be nice.",
    termsText2: "Please don't use our tools for illegal stuff. That's not cool.",
    termsText3: "We provide this service 'as is'. If it breaks, we're really sorry, but we can't be held liable for lost data. Always keep a backup, eh?",

    sorryTitle: "Our Official Sorry Policy",
    sorryText1: "In the unlikely event that something goes wrong:",
    sorryList1: "1. We will apologize immediately.",
    sorryList2: "2. We will try to fix it.",
    sorryList3: "3. We will apologize again, just to be safe.",

    howtoTitle: "How to use",
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
    fillableWhyText: "Most software that does this costs an arm and a leg. We do it for free, locally on your device, because that's the neighbourly thing to do."
  },
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
    ultimateGuide: "Guide Ultime PDF 📖",
    editXfaGuide: "Guide d'édition PDF XFA 🖨️",
    organizePdf: "Organiser PDF",
    organizePdfDesc: "Réorganiser les pages",
    dragToReorder: "Glissez les pages pour réorganiser",

    // Sign Tool
    btnSign: "Terminer & Télécharger",
    drawTitle: "Dessiner",
    typeTitle: "Taper",
    btnCreate: "Créer",



    // Compress Tool
    // Compress Tool
    btnCompress: "Compresser PDF",
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

    seo: {
      homeTitle: "Outils PDF Gratuits Canada | Service Sécurisé Sans Téléchargement | pdfcanada.ca",
      homeDesc: "Outils PDF canadiens polis. 100% gratuit et sécurisé en 2026. Fusionnez, compressez et convertissez sans téléchargement—vos fichiers ne quittent jamais votre appareil.",
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
          a: "Nous proposons une gamme complète d'outils PDF, notamment : Supprimer des pages, Pivoter PDF, Fusionner PDF, Compresser PDF, HEIC en PDF, EPUB en PDF, CBR en PDF, OCR, PDF en Word, Word en PDF, Signer PDF et Créateur de formulaires remplissables."
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
      pricingTitle: "Tarifs - pdfcanada.ca | Toujours Gratuit",
      pricingDesc: "Nos prix sont simples : 0 $ CAD pour tout le monde. Conversions illimitées et traitement local.",
      privacyTitle: "Politique de Confidentialité et Sécurité des Données | pdfcanada.ca",
      privacyDesc: "Notre engagement 2026 : tout le traitement PDF se fait localement dans votre navigateur. Vos fichiers ne sont jamais téléchargés, garantissant une sécurité maximale.",
      termsTitle: "Conditions d'utilisation - pdfcanada.ca",
      termsDesc: "Nos conditions d'utilisation polies. Soyez gentil, utilisez les outils librement.",
      howtoTitle: "Mode d'emploi - pdfcanada.ca",
      howtoDesc: "Instructions faciles pour supprimer des pages PDF, faire pivoter des documents et convertir des fichiers.",
      supportTitle: "Soutenir Local - pdfcanada.ca",
      supportDesc: "Soutenez l'équipe canadienne qui crée des outils PDF gratuits axés sur la confidentialité.",
      sorryTitle: "Politique d'Excuses - pdfcanada.ca",
      sorryDesc: "Notre garantie de nous excuser si quelque chose tourne mal.",
      fillableTitle: "Comment rendre un PDF remplissable | pdfcanada.ca",
      fillableDesc: "Apprenez à rendre un PDF remplissable gratuitement avec nos outils canadiens."
    },

    features: {
      delete: {
        title: "Supprimer Pages PDF en Ligne - Retirer Pages de PDF Gratuit | pdfcanada.ca",
        desc: "Supprimez les pages indésirables de votre PDF en toute sécurité en 2026. Sélectionnez les pages visuellement et supprimez-les instantanément. Aucun téléchargement—tout le traitement se fait sur votre appareil. Gratuit et privé.",
        h1: "Supprimer des Pages PDF",
        subtitle: "La façon polie de retirer les pages indésirables ou vierges.",
        content: "Besoin de supprimer une page de votre document ? Notre outil vous permet de sélectionner et de supprimer des pages spécifiques de votre fichier PDF.",
        steps: [
          "Cliquez sur 'Choisir un fichier' pour sélectionner votre PDF.",
          "Cliquez sur les miniatures des pages que vous souhaitez supprimer.",
          "Cliquez sur 'Supprimer' pour télécharger votre nouveau PDF."
        ]
      },
      pdfPageRemover: {
        title: "Suppresseur de Pages PDF en Ligne - Retirer Pages de PDF Gratuit | pdfcanada.ca",
        desc: "Le meilleur suppresseur de pages PDF. Supprimez les pages indésirables de votre PDF en toute sécurité. Sélectionnez les pages visuellement et supprimez-les instantanément. Aucun téléchargement—tout le traitement se fait sur votre appareil. Gratuit et privé.",
        h1: "Suppresseur de Pages PDF",
        subtitle: "La façon polie de retirer des pages d'un PDF.",
        content: "Besoin d'un suppresseur de pages PDF ? Notre outil vous permet de sélectionner et de retirer des pages d'un fichier PDF instantanément.",
        steps: [
          "Cliquez sur 'Choisir un fichier' pour sélectionner votre PDF.",
          "Cliquez sur les miniatures des pages que vous souhaitez retirer.",
          "Cliquez sur 'Supprimer' pour télécharger votre nouveau PDF."
        ]
      },
      flatten: {
        title: "Aplatir PDF en Ligne - Rendre PDF Non-Éditable et Sécurisé | pdfcanada.ca",
        desc: "Convertissez les pages PDF en images non éditables en 2026 pour empêcher les modifications. Aplatissez les formulaires et protégez votre contenu en toute sécurité via traitement local. 100% privé, aucun téléchargement.",
        h1: "Aplatir PDF",
        subtitle: "Verrouillez votre document pour empêcher les modifications ou la sélection.",
        content: "Besoin de vous assurer que votre PDF ne peut pas être modifié facilement ? Notre outil 'aplatit' votre document en convertissant chaque page en une image de haute qualité. Cela empêche la sélection de texte et les modifications par les éditeurs PDF standards.",
        steps: [
          "Sélectionnez le PDF que vous souhaitez protéger.",
          "Nous traiterons chaque page pour la transformer en image fixe.",
          "Téléchargez votre nouveau PDF non modifiable."
        ]
      },
      rotate: {
        title: "Pivoter PDF en Ligne - Corriger l'Orientation PDF Gratuitement | pdfcanada.ca",
        desc: "Faites pivoter les pages PDF et enregistrez-les de façon permanente en 2026. Corrigez les numérisations à l'envers instantanément avec 100% de confidentialité. Aucun téléchargement, fièrement canadien.",
        h1: "Pivoter des Pages PDF",
        subtitle: "Corrigez ces numérisations à l'envers en quelques secondes.",
        content: "Vous avez numérisé une page à l'envers ? Ça arrive. Utilisez cet outil pour pivoter les pages individuellement ou tout le document.",
        steps: [
          "Téléversez votre fichier PDF.",
          "Cliquez sur le bouton de rotation des pages individuelles pour les faire tourner de 90 degrés, ou utilisez les boutons 'Tout Pivoter' en haut.",
          "Quand tout semble correct, cliquez sur 'Appliquer' pour sauvegarder votre nouveau PDF."
        ]
      },
      heic: {
        title: "Convertisseur HEIC vers PDF - Convertir Photos iPhone en Toute Sécurité | pdfcanada.ca",
        desc: "Convertissez des photos HEIC en PDF instantanément en 2026. Transformez les photos iPhone en toute sécurité sans télécharger sur un serveur. 100% gratuit, privé et traitement local.",
        h1: "Convertir HEIC en PDF",
        subtitle: "Rendez les photos iPhone compatibles avec tout.",
        content: "Les appareils Apple utilisent le format HEIC. Parfois, on a besoin d'un PDF. Convertissez vos images ici.",
        steps: [
          "Sélectionnez votre fichier image .HEIC depuis votre ordinateur ou téléphone.",
          "Notre outil convertit automatiquement l'image localement dans votre navigateur.",
          "Cliquez sur 'Télécharger' pour sauvegarder votre nouveau fichier PDF."
        ]
      },
      epubToPdf: {
        title: "Convertisseur EPUB vers PDF - Convertir Livres Électroniques Gratuit | pdfcanada.ca",
        desc: "Convertissez des livres électroniques EPUB en format PDF instantanément. Lisez vos livres sur n'importe quel appareil. Conversion locale sécurisée—vos fichiers ne quittent jamais votre navigateur. Rapide et gratuit.",
        h1: "Convertir EPUB en PDF",
        subtitle: "Lisez vos livres électroniques préférés sur n'importe quel appareil.",
        content: "Imprimez ou lisez vos ebooks sur n'importe quel appareil en les convertissant en PDF.",
        steps: [
          "Téléversez votre fichier .epub.",
          "Attendez un instant pendant que nous formatons le livre en pages.",
          "Téléchargez votre nouveau PDF prêt à être imprimé ou partagé."
        ]
      },
      pdfToEpub: {
        title: "Convertisseur PDF vers EPUB - Optimiser PDF pour Liseuse Gratuit | pdfcanada.ca",
        desc: "Convertissez PDF en format EPUB adaptable pour Kindle, Kobo ou mobile. Le traitement local garantit 100% de confidentialité. Aucun téléchargement requis, fièrement canadien.",
        h1: "Convertir PDF en EPUB",
        subtitle: "Emportez votre matériel de lecture sur votre liseuse.",
        content: "Transformez vos documents PDF en format EPUB fluide pour votre liseuse préférée.",
        steps: [
          "Sélectionnez le PDF que vous voulez lire sur votre liseuse.",
          "Notre outil extrait le texte et tente de créer une structure d'ebook fluide.",
          "Téléchargez le fichier .epub et transférez-le sur votre appareil."
        ]
      },
      fillable: {
        title: "Rendre PDF Remplissable en Ligne - Créateur de Formulaire Gratuit | pdfcanada.ca",
        desc: "Ajoutez des champs de texte remplissables à n'importe quel PDF instantanément. Créez des formulaires interactifs professionnels gratuitement et en toute sécurité dans votre navigateur. Aucun téléchargement—100% privé et canadien.",
        h1: "Rendre un PDF Remplissable",
        subtitle: "La façon polie de créer des formulaires interactifs.",
        content: "Transformez un document plat en formulaire interactif. Nous détectons automatiquement les lignes (____) et les cases ([ ]) et les rendons remplissables.",
        steps: [
          "Téléversez un formulaire PDF qui contient des lignes statiques ou des cases à cocher.",
          "Sélectionnez les pages que vous voulez scanner.",
          "Cliquez sur 'Détecter et Remplir'. Nous calculerons où les champs devraient être.",
          "Téléchargez votre formulaire PDF interactif."
        ]
      },
      ocr: {
        title: "OCR PDF en Ligne - Rendre PDF Consultable Gratuitement | Service Sans Téléchargement | pdfcanada.ca",
        desc: "Convertissez des PDF numérisés en texte consultable. OCR haute précision traité 100% localement dans votre navigateur. Sécurisé, rapide et aucun téléchargement requis—gardez vos données privées.",
        h1: "OCR PDF et Consultable",
        subtitle: "Déverrouillez le texte dans vos numérisations en toute sécurité et gratuitement.",
        content: "Transformez vos images et scans en vrai texte que vous pouvez copier. Notre outil OCR fonctionne dans votre navigateur.",
        steps: ["Téléchargez votre PDF numérisé.", "Sélectionnez la langue.", "Téléchargez votre nouveau PDF consultable."],
        faq: [
          { q: "C'est quoi l'OCR ?", a: "La reconnaissance optique de caractères. Ça transforme les images de mots en vrais mots." }
        ]
      },
      organizePdf: {
        title: "Organiser PDF en Ligne - Réorganiser Pages PDF Gratuitement | pdfcanada.ca",
        desc: "Réorganisez les pages PDF facilement par glisser-déposer. Réordonnez votre document PDF en toute sécurité dans votre navigateur. Aucun téléchargement—vos fichiers restent 100% privés sur votre appareil.",
        h1: "Organiser les Pages PDF",
        subtitle: "Mettez les pages de votre document dans l'ordre parfait.",
        content: "Besoin de changer l'ordre des pages ? Notre outil vous permet de glisser-déposer les pages pour les réorganiser exactement comme vous le souhaitez.",
        steps: [
          "Téléchargez votre fichier PDF.",
          "Glissez-déposez les vignettes pour les réorganiser.",
          "Cliquez sur 'Enregistrer' pour télécharger.",
          "Téléchargez votre PDF méticuleusement organisé."
        ],
        faq: [
          {
            q: "Puis-je déplacer des pages entre PDF ?",
            a: "Pas encore ! Pour l'instant, uniquement au sein d'un même fichier."
          }
        ]
      },
      cbrToPdf: {
        title: "Convertisseur CBR vers PDF - Convertir Livres de Bandes Dessinées Gratuit | pdfcanada.ca",
        desc: "Lisez vos bandes dessinées sur n'importe quel appareil. Notre guide 2026 vous montre comment convertir CBR/CBZ en PDF en toute sécurité dans votre navigateur. Aucun téléchargement.",
        h1: "Convertir CBR en PDF",
        subtitle: "Le guide définitif pour la conversion de bandes dessinées numériques.",
        content: "Vous avez une collection de bandes dessinées numériques au format CBR ou CBZ ? Bien que ces formats soient excellents pour les lecteurs spécialisés, vous voudrez parfois un PDF pour lire sur votre tablette ou partager avec un ami. Notre convertisseur CBR en PDF facilite la transformation des archives de bandes dessinées en documents PDF standards. Nous supportons les fichiers CBR (basés sur RAR) et CBZ (basés sur ZIP).\n\nLa plupart des convertisseurs en ligne vous obligent à télécharger vos BD sur leurs serveurs. Mais les bandes dessinées peuvent être volumineuses et votre vie privée est importante. C'est pourquoi pdfcanada.ca traite vos BD directement dans votre navigateur. Pas de téléchargement, pas d'attente, juste une conversion rapide et sécurisée.",
        steps: [
          "Sélectionnez votre fichier .CBR ou .CBZ.",
          "Notre système extrait les images et les compile dans un seul document PDF.",
          "Une fois la conversion terminée, cliquez sur 'Télécharger' pour sauvegarder votre nouveau PDF."
        ],
        faq: [
          {
            question: "Quelle est la différence entre CBR et CBZ ?",
            answer: "Les fichiers CBR sont des archives RAR renommées, tandis que les fichiers CBZ sont des archives ZIP renommées. Les deux contiennent des images de pages de bandes dessinées."
          },
          {
            question: "Puis-je convertir de gros fichiers CBR ?",
            answer: "Oui ! Comme la conversion se fait sur votre appareil, la seule limite est la mémoire de votre navigateur."
          }
        ]
      },
      sign: {
        title: "Signer PDF en Ligne - Signatures Numériques Sécurisées Gratuites | pdfcanada.ca",
        desc: "Signez des documents PDF en ligne en toute sécurité. Ajoutez des signatures, initiales et dates localement dans votre navigateur. Vos documents sensibles ne quittent jamais votre ordinateur. Rapide et gratuit.",
        h1: "Signer des Documents PDF",
        subtitle: "La façon la plus sécurisée de signer des contrats et formulaires.",
        content: "Besoin de signer un contrat, un bail ou un formulaire ? Notre outil de signature électronique vous permet d'ajouter des signatures professionnelles, des initiales et des dates à n'importe quel PDF.",
        steps: [
          "Téléversez le document PDF que vous devez signer.",
          "Choisissez de dessiner, taper ou téléverser votre signature.",
          "Placez votre signature, vos initiales ou la date du jour n'importe où sur le document.",
          "Redimensionnez et déplacez les éléments jusqu'à ce qu'ils soient parfaits.",
          "Cliquez sur 'Signer le PDF' pour télécharger votre document signé en toute sécurité."
        ]
      },
      pdfToWord: {
        title: "PDF vers Word en Ligne - Convertir PDF en DOCX Éditable | Gratuit & Sécurisé",
        desc: "Convertissez PDF en documents Word éditables gratuitement. Notre convertisseur local garantit la sécurité de vos données sur votre appareil. Rapide, précis et 100% privé.",
        h1: "Convertir PDF en Word",
        subtitle: "Rendez vos PDF à nouveau modifiables—précisément et en toute sécurité.",
        content: "Besoin de modifier un PDF ? Convertissez-le en document Word (.docx) sans effort. Notre traitement local garantit que vos données sensibles ne quittent jamais votre appareil.",
        steps: [
          "Sélectionnez le PDF que vous souhaitez convertir.",
          "Notre outil extrait le texte et la mise en forme dans un document Word.",
          "Téléchargez votre fichier .docx modifiable."
        ]
      },
      wordToPdf: {
        title: "Word vers PDF en Ligne - Convertir DOCX en PDF Gratuitement | pdfcanada.ca",
        desc: "Créez des PDF de haute qualité à partir de documents Word instantanément. Notre convertisseur sécurisé traite les fichiers localement—aucun téléchargement, aucun suivi, juste un service canadien gratuit et rapide.",
        h1: "Convertir Word en PDF",
        subtitle: "Des PDF professionnels à partir de vos fichiers DOCX instantanément.",
        content: "Transformez vos documents Word en PDF de haute qualité. Parfait pour le partage et l'impression, avec une sécurité locale à laquelle vous pouvez faire confiance.",
        steps: [
          "Téléversez votre fichier .docx.",
          "Nous traitons le document et générons un PDF professionnel.",
          "Téléchargez votre nouveau fichier PDF."
        ]
      },
      crop: {
        title: "Recadrer PDF en Ligne - Ajuster les Marges & Redimensionner Gratuitement | pdfcanada.ca",
        desc: "Recadrez vos pages PDF instantanément pour supprimer les espaces blancs ou vous concentrer sur le contenu. Ajustez les marges en toute sécurité dans votre navigateur. Aucun téléchargement.",
        h1: "Recadrer des Pages PDF",
        subtitle: "Ajustez les marges et concentrez-vous sur l'essentiel.",
        content: "Besoin de supprimer des espaces blancs ou de vous concentrer sur une zone spécifique de votre document ? Notre outil de recadrage vous permet d'ajuster les marges de vos pages PDF sans effort. C'est rapide, gratuit et se passe entièrement sur votre appareil.",
        steps: [
          "Téléversez votre document PDF.",
          "Utilisez le sélecteur pour définir votre zone de recadrage.",
          "Appliquez le recadrage et téléchargez votre PDF mis à jour."
        ]
      },
      compress: {
        title: "Compresser PDF en Ligne - Réduire la Taille sans Perdre de Qualité | pdfcanada.ca",
        desc: "Compressez les fichiers PDF pour réduire la taille tout en conservant la qualité d'origine. Optimisez les PDF en toute sécurité dans votre navigateur—aucun téléchargement requis.",
        h1: "Compresser Fichier PDF",
        subtitle: "Réduisez la taille de vos fichiers sans perte de qualité.",
        content: "Besoin d'envoyer un gros PDF par courriel ? Notre outil de compression réduit la taille du fichier tout en maintenant une excellente qualité. Choisissez parmi trois niveaux de compression.",
        steps: [
          "Sélectionnez le fichier PDF à compresser.",
          "Choisissez votre niveau de compression (Bon, Équilibré ou Extrême).",
          "Cliquez sur 'Compresser PDF' et téléchargez votre fichier réduit."
        ],
        faq: [
          { question: "De combien puis-je réduire la taille de mon PDF ?", answer: "Selon le contenu, vous pouvez réduire la taille de 50 à 90%. Les PDF riches en images voient les plus grandes réductions." },
          { question: "La compression réduira-t-elle la qualité ?", answer: "Nos modes 'Bon' et 'Équilibré' maintiennent une excellente qualité. Le mode 'Extrême' privilégie la taille à la qualité." },
          { question: "La compression PDF est-elle sécurisée ?", answer: "Oui ! Tout le traitement se fait localement dans votre navigateur. Vos fichiers ne quittent jamais votre appareil." }
        ]
      },
      merge: {
        title: "Fusionner PDF en Ligne - Service Sécurisé Sans Téléchargement | pdfcanada.ca",
        desc: "Sélectionnez et fusionnez plusieurs fichiers PDF en quelques secondes en toute sécurité dans votre navigateur. Combinez des PDF en ligne avec 100% de confidentialité. Rapide et gratuit.",
        h1: "Fusionner des Fichiers PDF",
        subtitle: "Combinez plusieurs PDF en un seul document en toute sécurité.",
        content: "Vous avez plusieurs fichiers PDF qui devraient n'en faire qu'un ? Notre outil de fusion vous permet de les combiner facilement. Glissez-déposez pour réorganiser, puis fusionnez-les.",
        steps: [
          "Sélectionnez les fichiers PDF à fusionner.",
          "Glissez-déposez les fichiers pour réorganiser l'ordre.",
          "Cliquez sur 'Fusionner PDF' pour télécharger votre document combiné."
        ],
        faq: [
          { question: "Combien de PDF puis-je fusionner à la fois ?", answer: "Il n'y a pas de limite ! Fusionnez autant de fichiers PDF que nécessaire. Tout le traitement se fait localement dans votre navigateur." },
          { question: "Puis-je réorganiser les pages avant la fusion ?", answer: "Oui ! Glissez-déposez les fichiers pour réorganiser leur ordre avant de fusionner en un seul document." },
          { question: "La fusion affectera-t-elle la qualité de mes PDF ?", answer: "Non ! Notre outil de fusion préserve la qualité originale de tous vos documents." }
        ]
      },
      split: {
        title: "Diviser PDF en Ligne - Séparer les Pages PDF Gratuitement | pdfcanada.ca",
        desc: "Divisez votre PDF en pages individuelles instantanément. Téléchargez en tant que fichier ZIP contenant chaque page comme PDF séparé. 100% privé—aucun téléversement requis.",
        h1: "Diviser PDF en Pages",
        subtitle: "Séparez votre PDF en fichiers de pages individuelles.",
        content: "Besoin de séparer un document PDF ? Notre outil de division sépare chaque page en son propre fichier et les regroupe dans un téléchargement ZIP pratique. Parfait pour extraire des pages spécifiques ou distribuer du contenu.",
        steps: [
          "Téléversez votre document PDF.",
          "Cliquez sur 'Diviser PDF' pour séparer toutes les pages.",
          "Téléchargez votre fichier ZIP contenant les PDF individuels."
        ],
        faq: [
          { question: "Comment diviser un PDF en pages séparées ?", answer: "Téléversez votre PDF, cliquez sur 'Diviser PDF', et téléchargez un fichier ZIP contenant chaque page comme PDF individuel." },
          { question: "La division de PDF est-elle gratuite ?", answer: "Oui ! Notre outil Diviser PDF est 100% gratuit sans limites. Vos fichiers sont traités localement dans votre navigateur pour une confidentialité totale." },
          { question: "Puis-je diviser un PDF protégé par mot de passe ?", answer: "Vous devrez d'abord supprimer le mot de passe. Nous recommandons d'utiliser un outil de déverrouillage PDF dédié avant la division." }
        ]
      },
      pdfToXml: {
        title: "Convertisseur PDF vers XML - Extraire des Données Structurées | pdfcanada.ca",
        desc: "Convertissez des documents PDF au format XML avec extraction de données structurées. Préservez la mise en page, les positions du texte et la hiérarchie du contenu. Gratuit et privé.",
        h1: "Convertir PDF en XML",
        subtitle: "Extrayez des données structurées de vos documents PDF.",
        content: "Transformez vos documents PDF en format XML structuré. Notre convertisseur extrait le contenu textuel avec les données de position, les dimensions des pages et la hiérarchie du contenu—idéal pour le traitement et l'analyse de données.",
        steps: [
          "Téléversez votre fichier PDF.",
          "Cliquez sur 'Convertir en XML' pour traiter.",
          "Téléchargez votre fichier XML structuré."
        ],
        faq: [
          { question: "Quelles données sont extraites lors de la conversion PDF vers XML ?", answer: "Notre outil extrait le contenu textuel, les dimensions des pages, les positions du texte et la structure du contenu dans un format XML propre." },
          { question: "Puis-je convertir des PDF scannés en XML ?", answer: "Pour les documents scannés, nous recommandons d'utiliser l'OCR d'abord pour extraire le texte, puis de convertir en XML pour de meilleurs résultats." },
          { question: "Mes données PDF sont-elles sécurisées pendant la conversion ?", answer: "Absolument ! Tout le traitement se fait localement dans votre navigateur. Vos fichiers ne quittent jamais votre appareil." }
        ]
      },
      xmlToPdf: {
        title: "Convertisseur XML vers PDF - Créer des PDF à partir de Données XML | pdfcanada.ca",
        desc: "Convertissez des documents XML au format PDF. Transformez des données structurées en documents PDF propres et lisibles. Gratuit, rapide et traité localement.",
        h1: "Convertir XML en PDF",
        subtitle: "Transformez les données XML en documents PDF.",
        content: "Convertissez vos fichiers XML en documents PDF professionnellement formatés. Notre outil analyse la structure XML et crée des PDF propres et lisibles à partir de vos données—parfait pour les rapports et la documentation.",
        steps: [
          "Téléversez votre fichier XML.",
          "Cliquez sur 'Convertir en PDF' pour traiter.",
          "Téléchargez votre document PDF généré."
        ],
        faq: [
          { question: "Quels formats XML sont supportés ?", answer: "Notre convertisseur supporte les fichiers XML standard. L'outil extrait le contenu textuel et le formate dans un document PDF propre et lisible." },
          { question: "Puis-je personnaliser la sortie PDF ?", answer: "Actuellement, l'outil crée un PDF formaté standard. Pour une personnalisation avancée, envisagez d'utiliser des modèles ou des outils de post-traitement." },
          { question: "Y a-t-il une limite de taille de fichier ?", answer: "Il n'y a pas de limite stricte, mais les très gros fichiers XML peuvent prendre plus de temps à traiter. Tout le traitement est fait localement dans votre navigateur." }
        ]
      }
    },

    toolDelete: "Supprimer des pages",
    toolDeleteDesc: "Enlever les pages inutiles.",
    toolFlatten: "Non modifiable",
    toolFlattenDesc: "Aplatir le PDF.",
    toolPdfPageRemover: "Suppresseur de pages PDF",
    toolPdfPageRemoverDesc: "Enlever des pages du PDF.",
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
    toolOcr: "OCR PDF",
    toolOcrDesc: "Extraire texte des scans.",
    toolCbrToPdf: "CBR en PDF",
    toolCbrToPdfDesc: "Convertir BD en PDF.",
    toolSign: "Signer le PDF",
    toolSignDesc: "Signer des documents en toute sécurité.",
    toolPdfToWord: "PDF en Word",
    toolPdfToWordDesc: "Convertir PDF en Docx modifiable.",
    toolWordToPdf: "Word en PDF",
    toolWordToPdfDesc: "Convertir Word docx en PDF.",
    toolCrop: "Recadrer PDF",
    toolCropDesc: "Ajuster les marges.",
    toolOrganize: "Organiser PDF",
    toolOrganizeDesc: "Réorganiser ou supprimer des pages.",
    toolCompress: "Compresser PDF",
    toolCompressDesc: "Réduire la taille.",
    toolMerge: "Fusionner PDF",
    toolMergeDesc: "Combiner plusieurs PDFs.",
    toolSplit: "Diviser PDF",
    toolSplitDesc: "Séparer en pages.",
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

    selectPagesHeader: "Sélectionnez les pages :",
    selected: "sélectionnées",
    rotateLeft: "Gauche",
    rotateRight: "Droite",
    rotateAllLeft: "Tout Pivoter Gauche",
    rotateAllRight: "Tout Pivoter Droite",
    resetRotations: "Réinitialiser",
    selectPagesToFill: "Sélectionnez les pages à scanner :",
    selectPagesForOcr: "Sélectionnez les pages pour l'OCR :",
    ocrProgress: "Reconnaissance du texte...",

    // Tool Specific Inputs
    deletePagesInfo: "Cliquez sur les pages à supprimer. Utilisez la touche \"maj\" pour les plages.",
    totalPages: "Nombre de pages",
    pagesToRemove: "Pages à supprimer",
    signPagesInfo: "Placez votre signature ou vos initiales sur le document.",
    addSignature: "Ajouter Signature",
    addInitials: "Ajouter Initiales",
    signUpload: "Téléverser",
    select: "Sélectionner",
    pan: "Panoramique",
    newSignature: "Nouvelle signature",
    newInitials: "Nouvelles initiales",

    btnRemove: "Supprimer",
    btnRotate: "Appliquer",
    btnFlatten: "Rendre non modifiable",
    btnCrop: "Recadrer PDF",
    btnConvert: "Convertir le fichier",
    btnMakeFillable: "Détecter et Remplir",
    btnCancel: "Annuler",
    btnExtractText: "Extraire le Texte",
    btnSearchablePdf: "Créer PDF Recherchable",
    btnSave: "Enregistrer",

    working: "On y travaille...",
    workingDesc: "On scanne pour les champs et on arrange ça.",
    doneTitle: "C'est tiguidou !",
    doneDesc: "Votre fichier est prêt.",
    download: "Télécharger",
    doAnother: "En faire un autre",
    backToHome: "Retour aux outils",

    errorTitle: "Ah zut !",
    genericError: "Quelque chose a mal tourné. Désolé !",
    fileTypeErr: "Désolé, mais on n'accepte pas ce type de fichier.",
    readErr: "Désolé, on n'a pas pu lire ce fichier.",
    passwordErr: "Ce PDF est protégé par mot de passe. Veuillez le déverrouiller d'abord.",
    corruptPdfErr: "Le fichier PDF semble corrompu ou invalide.",
    conversionErr: "Échec de la conversion du fichier. Il est peut-être trop complexe ou endommagé.",
    emptyEpubErr: "Impossible d'extraire le texte de cet EPUB.",

    navHowTo: "Aide",
    navSupport: "Soutenir local",
    navPricing: "Tarifs",
    footerEditGroup: "Modifier & Optimiser",
    footerConvertGroup: "Convertir PDF",
    footerGuidesGroup: "Guides & Aide",
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
    privacyText1: "Chez pdfcanada.ca, vos affaires sont vos affaires. Parce qu'on traite les fichiers localement, vos documents ne sont jamais envoyés sur nos serveurs.",
    privacyText2: "On n'utilise pas de cookies pour vous suivre. On ne vend pas vos données. C'est juste vous et votre PDF.",

    termsTitle: "Conditions d'utilisation",
    termsText1: "En utilisant ce service, vous acceptez d'être gentil.",
    termsText2: "S'il vous plaît, n'utilisez pas nos outils pour des trucs illégaux.",
    termsText3: "Service fourni 'tel quel'. Si ça brise, on est vraiment désolé.",

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
    }
  }
};