import React from 'react';
import { ArrowLeft, CheckCircle, Shield, Zap, Globe, Image as ImageIcon } from 'lucide-react';
import { Language } from '../utils/i18n';

interface HeicToPdfBlogProps {
  lang: Language;
  onNavigate: (view: any, path?: string) => void;
}

export const HeicToPdfBlog: React.FC<HeicToPdfBlogProps> = ({ lang, onNavigate }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <button
          onClick={() => onNavigate('HOME')}
          className="inline-flex items-center gap-2 text-gray-600 hover:text-canada-red mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Home
        </button>

        <article className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              How to Convert HEIC to PDF: Complete Guide for 2025
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Everything you need to know about converting HEIC files to PDF format - from iPhone photos to professional documents
            </p>
            <div className="flex items-center gap-4 mt-6 text-sm text-gray-500">
              <span>Last updated: December 2024</span>
              <span>•</span>
              <span>8 min read</span>
            </div>
          </header>

          {/* Quick Action CTA */}
          <div className="bg-gradient-to-r from-canada-red to-canada-darkRed rounded-xl p-6 mb-12 text-white">
            <h3 className="text-2xl font-bold mb-2">Need to Convert HEIC to PDF Right Now?</h3>
            <p className="mb-4 text-white/90">Use our free online converter - no signup required, completely secure</p>
            <button
              onClick={() => onNavigate('TOOL_PAGE', '/heic-to-pdf')}
              className="bg-white text-canada-red px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-all inline-flex items-center gap-2"
            >
              <ImageIcon size={20} />
              Convert HEIC to PDF Now
            </button>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-xl p-6 mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Table of Contents</h2>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#what-is-heic" className="hover:text-canada-red transition-colors">• What is HEIC Format?</a></li>
              <li><a href="#why-convert" className="hover:text-canada-red transition-colors">• Why Convert HEIC to PDF?</a></li>
              <li><a href="#how-to-convert" className="hover:text-canada-red transition-colors">• How to Convert HEIC to PDF</a></li>
              <li><a href="#online-converter" className="hover:text-canada-red transition-colors">• Using Online HEIC to PDF Converter</a></li>
              <li><a href="#iphone" className="hover:text-canada-red transition-colors">• Converting iPhone HEIC Photos</a></li>
              <li><a href="#multiple-files" className="hover:text-canada-red transition-colors">• Combine Multiple HEIC to PDF</a></li>
              <li><a href="#quality" className="hover:text-canada-red transition-colors">• Maintaining Quality</a></li>
              <li><a href="#troubleshooting" className="hover:text-canada-red transition-colors">• Troubleshooting Common Issues</a></li>
              <li><a href="#faq" className="hover:text-canada-red transition-colors">• Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <section id="what-is-heic" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What is HEIC Format?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                HEIC (High Efficiency Image Container) is Apple's modern image format introduced with iOS 11. It's the default format for photos taken on iPhones and iPads since 2017. HEIC files offer superior compression compared to traditional JPEG files while maintaining excellent image quality.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                While HEIC is excellent for storing photos on Apple devices, it can cause compatibility issues when sharing files with Windows users or uploading to certain websites. This is where converting HEIC to PDF becomes incredibly useful.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                <p className="text-blue-900">
                  <strong>Did you know?</strong> HEIC files are typically 50% smaller than JPEG files with the same visual quality, saving valuable storage space on your device.
                </p>
              </div>
            </section>

            <section id="why-convert" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Convert HEIC to PDF?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Converting HEIC files to PDF format offers numerous advantages:
              </p>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-bold text-gray-900">Universal Compatibility</h4>
                      <p className="text-sm text-gray-600 mt-1">PDF works on all devices and platforms without special software</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-bold text-gray-900">Professional Sharing</h4>
                      <p className="text-sm text-gray-600 mt-1">Send photos as organized documents for work or presentations</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-bold text-gray-900">Combine Multiple Images</h4>
                      <p className="text-sm text-gray-600 mt-1">Merge several HEIC photos into one PDF document</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-bold text-gray-900">Preserve Quality</h4>
                      <p className="text-sm text-gray-600 mt-1">Maintain image quality during conversion process</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="how-to-convert" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Convert HEIC to PDF</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                There are several methods to convert HEIC files to PDF. Here's a comprehensive breakdown of each approach:
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Method 1: Online HEIC to PDF Converter (Recommended)</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Using an online converter is the fastest and most convenient method. Here's how to do it with pdfcanada.ca:
              </p>
              <ol className="list-decimal list-inside space-y-3 mb-6 text-gray-700">
                <li className="leading-relaxed">
                  <strong>Visit the converter:</strong> Go to <a href="/heic-to-pdf" onClick={(e) => { e.preventDefault(); onNavigate('TOOL_PAGE', '/heic-to-pdf'); }} className="text-canada-red hover:underline">pdfcanada.ca/heic-to-pdf</a>
                </li>
                <li className="leading-relaxed">
                  <strong>Upload your HEIC file:</strong> Click the upload button or drag and drop your .heic file
                </li>
                <li className="leading-relaxed">
                  <strong>Wait for processing:</strong> The conversion happens instantly in your browser
                </li>
                <li className="leading-relaxed">
                  <strong>Download your PDF:</strong> Click the download button to save your converted PDF file
                </li>
              </ol>

              <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
                <p className="text-green-900">
                  <strong>Privacy First:</strong> Our converter processes files entirely in your browser. Your HEIC files never leave your device, ensuring complete privacy and security.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Method 2: Change HEIC File to PDF on iPhone</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You can convert HEIC to PDF directly on your iPhone using the built-in Files app:
              </p>
              <ol className="list-decimal list-inside space-y-3 mb-6 text-gray-700">
                <li>Save your HEIC photo to the Files app</li>
                <li>Long-press the HEIC file and select "Convert to PDF"</li>
                <li>Your PDF will be created in the same location</li>
              </ol>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Method 3: Change HEIC to PDF on Mac</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Mac users can use Preview to convert HEIC to PDF:
              </p>
              <ol className="list-decimal list-inside space-y-3 mb-6 text-gray-700">
                <li>Open your HEIC file in Preview</li>
                <li>Go to File → Export</li>
                <li>Select "PDF" from the Format dropdown</li>
                <li>Click Save</li>
              </ol>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Method 4: Convert HEIC to PDF on Windows</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Windows doesn't natively support HEIC files, so using an online converter like pdfcanada.ca is your best option. No software installation required!
              </p>
            </section>

            <section id="online-converter" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Using an Online HEIC to PDF Converter</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                When choosing an online HEIC to PDF converter, consider these important factors:
              </p>

              <div className="space-y-4 my-6">
                <div className="flex items-start gap-3">
                  <Shield className="text-canada-red mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-900">Privacy & Security</h4>
                    <p className="text-gray-700">Look for converters that process files locally in your browser, not on remote servers. pdfcanada.ca processes everything client-side for maximum privacy.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="text-canada-red mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-900">Speed</h4>
                    <p className="text-gray-700">Browser-based converters are typically faster than those requiring server uploads and downloads.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="text-canada-red mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-900">No Sign-up Required</h4>
                    <p className="text-gray-700">The best converters work immediately without requiring account creation or email verification.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">HEIC to PDF Converter vs Other Tools</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-3 text-left">Feature</th>
                      <th className="border border-gray-300 p-3 text-left">pdfcanada.ca</th>
                      <th className="border border-gray-300 p-3 text-left">iLovePDF</th>
                      <th className="border border-gray-300 p-3 text-left">Adobe</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3">Privacy (Local Processing)</td>
                      <td className="border border-gray-300 p-3 text-green-600 font-bold">✓</td>
                      <td className="border border-gray-300 p-3 text-red-600">✗</td>
                      <td className="border border-gray-300 p-3 text-red-600">✗</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3">Free to Use</td>
                      <td className="border border-gray-300 p-3 text-green-600 font-bold">✓</td>
                      <td className="border border-gray-300 p-3 text-yellow-600">Limited</td>
                      <td className="border border-gray-300 p-3 text-red-600">Paid</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">No Sign-up Required</td>
                      <td className="border border-gray-300 p-3 text-green-600 font-bold">✓</td>
                      <td className="border border-gray-300 p-3 text-yellow-600">Optional</td>
                      <td className="border border-gray-300 p-3 text-red-600">✗</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3">Speed</td>
                      <td className="border border-gray-300 p-3 text-green-600 font-bold">Instant</td>
                      <td className="border border-gray-300 p-3">Moderate</td>
                      <td className="border border-gray-300 p-3">Moderate</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="iphone" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Converting iPhone HEIC Photos to PDF</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                iPhone users frequently need to convert their HEIC photos to PDF for various reasons:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                <li>Sharing photos with Android or Windows users</li>
                <li>Uploading to websites that don't support HEIC</li>
                <li>Creating photo documents for official purposes</li>
                <li>Archiving photos in a more compatible format</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Step-by-Step: Convert Photo HEIC to PDF</h3>
              <div className="bg-gray-50 rounded-lg p-6 my-6">
                <ol className="space-y-4 text-gray-700">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-canada-red text-white rounded-full flex items-center justify-center font-bold">1</span>
                    <div>
                      <strong>Transfer Photos:</strong> Send your HEIC photos from iPhone to your computer via AirDrop, iCloud, or email
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-canada-red text-white rounded-full flex items-center justify-center font-bold">2</span>
                    <div>
                      <strong>Open Converter:</strong> Visit pdfcanada.ca/heic-to-pdf in your browser
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-canada-red text-white rounded-full flex items-center justify-center font-bold">3</span>
                    <div>
                      <strong>Upload Files:</strong> Select your HEIC files from your downloads or photo folder
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-canada-red text-white rounded-full flex items-center justify-center font-bold">4</span>
                    <div>
                      <strong>Download PDF:</strong> Save the converted PDF to your device
                    </div>
                  </li>
                </ol>
              </div>
            </section>

            <section id="multiple-files" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Combine Multiple HEIC Files to PDF</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Need to combine multiple HEIC photos into a single PDF document? Here's how:
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Currently, pdfcanada.ca converts one HEIC file at a time to maintain optimal quality and performance. To combine multiple HEIC images into one PDF:
              </p>
              <ol className="list-decimal list-inside space-y-3 mb-6 text-gray-700">
                <li>Convert each HEIC file to PDF individually</li>
                <li>Use a PDF merger tool to combine the PDFs</li>
                <li>Download your final combined PDF</li>
              </ol>
              <p className="text-gray-700 leading-relaxed">
                This two-step process ensures maximum quality retention and gives you more control over the final document layout.
              </p>
            </section>

            <section id="quality" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Maintaining Quality During HEIC to PDF Conversion</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Quality preservation is crucial when converting HEIC to PDF. Here's what happens during the conversion:
              </p>
              <div className="bg-blue-50 rounded-lg p-6 my-6">
                <h4 className="font-bold text-blue-900 mb-2">Technical Details:</h4>
                <ul className="space-y-2 text-blue-800">
                  <li>• HEIC files are first decoded to preserve full color information</li>
                  <li>• Images are converted to JPEG format (industry standard for PDF photos)</li>
                  <li>• Quality is maintained at 80% to balance file size and clarity</li>
                  <li>• Original dimensions and aspect ratio are preserved</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Tips for Best Quality Results:</h3>
              <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                <li>Start with high-quality HEIC files</li>
                <li>Avoid converting the same file multiple times</li>
                <li>Use the original HEIC file, not screenshots</li>
                <li>Ensure good lighting in original photos</li>
              </ul>
            </section>

            <section id="troubleshooting" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Troubleshooting Common Issues</h2>

              <div className="space-y-6">
                <div className="border-l-4 border-canada-red pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Problem: "File not supported" error</h4>
                  <p className="text-gray-700">
                    <strong>Solution:</strong> Ensure your file has the .heic extension. Some devices save files as .heif - these need to be renamed to .heic first.
                  </p>
                </div>

                <div className="border-l-4 border-canada-red pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Problem: Conversion is slow</h4>
                  <p className="text-gray-700">
                    <strong>Solution:</strong> Large HEIC files (&gt;10MB) may take a few seconds. Close other browser tabs to free up memory. Browser-based conversion is still faster than server-based alternatives.
                  </p>
                </div>

                <div className="border-l-4 border-canada-red pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Problem: PDF looks different from original</h4>
                  <p className="text-gray-700">
                    <strong>Solution:</strong> HEIC uses advanced compression. The PDF conversion maintains 80% quality which is imperceptible to most users. For absolute quality, consider keeping original HEIC files as backups.
                  </p>
                </div>

                <div className="border-l-4 border-canada-red pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Problem: Can't open HEIC file on Windows</h4>
                  <p className="text-gray-700">
                    <strong>Solution:</strong> Windows 10/11 require the "HEIF Image Extensions" from Microsoft Store to view HEIC files. Alternatively, convert directly to PDF using pdfcanada.ca without needing to view the original.
                  </p>
                </div>
              </div>
            </section>

            <section id="faq" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">How do I convert HEIC to PDF for free?</h4>
                  <p className="text-gray-700">
                    Use pdfcanada.ca's free HEIC to PDF converter. Simply upload your .heic file, and it will be converted instantly in your browser. No registration, no watermarks, no hidden fees.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">How do I change a file from HEIC to PDF?</h4>
                  <p className="text-gray-700">
                    Visit an online converter like pdfcanada.ca, upload your HEIC file, and download the converted PDF. The process takes seconds and works on any device with a web browser.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">Can I convert HEIC JPG to PDF?</h4>
                  <p className="text-gray-700">
                    Yes! If you have HEIC files, our converter handles them directly. If you've already converted HEIC to JPG, you can use any JPG to PDF converter for the second step.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">Is Adobe better for converting HEIC to PDF?</h4>
                  <p className="text-gray-700">
                    Adobe Acrobat is a premium tool with many features, but for simple HEIC to PDF conversion, free online tools like pdfcanada.ca work just as well. Our converter processes files locally for better privacy and doesn't require expensive subscriptions.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">How do you convert HEIC to PDF on Mac?</h4>
                  <p className="text-gray-700">
                    On Mac, you can use Preview (built-in) or use pdfcanada.ca for faster batch conversions. Preview works well for single files, while online converters are better for multiple conversions.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">What's the difference between .heic and .heif?</h4>
                  <p className="text-gray-700">
                    Both are part of the HEIF (High Efficiency Image Format) standard. .heic is specifically used by Apple devices, while .heif is the generic extension. Our converter accepts .heic files.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">Can I convert multiple HEIC files to one PDF?</h4>
                  <p className="text-gray-700">
                    Yes! Convert each HEIC file individually to PDF, then use a PDF merger tool to combine them into a single document. This gives you better control over page order and layout.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">Is HEIC to PDF conversion safe?</h4>
                  <p className="text-gray-700">
                    When using pdfcanada.ca, yes - completely safe. All conversion happens in your browser, meaning your files never leave your device. Unlike server-based converters, your private photos stay private.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">Why can't I open HEIC files on my PC?</h4>
                  <p className="text-gray-700">
                    HEIC is an Apple format with limited Windows support. Instead of installing codecs, it's easier to convert HEIC to PDF - a universally compatible format that works on all devices.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">Will converting HEIC to PDF reduce quality?</h4>
                  <p className="text-gray-700">
                    Minimal quality loss occurs (similar to HEIC to JPEG conversion). Our converter maintains 80% quality which is visually identical to the original for most purposes. For archival quality, keep original HEIC files as backups.
                  </p>
                </div>
              </div>
            </section>

            {/* Final CTA */}
            <section className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white text-center my-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Convert Your HEIC Files?</h2>
              <p className="text-xl mb-6 text-gray-300">
                Fast, secure, and completely free - no signup required
              </p>
              <button
                onClick={() => onNavigate('TOOL_PAGE', '/heic-to-pdf')}
                className="bg-canada-red hover:bg-canada-darkRed text-white px-8 py-4 rounded-full font-bold text-lg transition-all inline-flex items-center gap-3 shadow-xl"
              >
                <ImageIcon size={24} />
                Start Converting Now
              </button>
              <p className="text-sm text-gray-400 mt-4">
                Proudly Canadian 🇨🇦 | 100% Private | Always Free
              </p>
            </section>

            {/* Related Articles */}
            <section className="border-t border-gray-200 pt-8 mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Related Guides</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <button
                  onClick={() => onNavigate('TOOL_PAGE', '/epub-to-pdf')}
                  className="text-left p-4 border border-gray-200 rounded-lg hover:border-canada-red transition-colors"
                >
                  <h4 className="font-bold text-gray-900 mb-1">EPUB to PDF Converter</h4>
                  <p className="text-sm text-gray-600">Convert ebooks to PDF format</p>
                </button>
                <button
                  onClick={() => onNavigate('TOOL_PAGE', '/make-pdf-fillable')}
                  className="text-left p-4 border border-gray-200 rounded-lg hover:border-canada-red transition-colors"
                >
                  <h4 className="font-bold text-gray-900 mb-1">Make PDF Fillable</h4>
                  <p className="text-sm text-gray-600">Add form fields to your PDFs</p>
                </button>
              </div>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
};
