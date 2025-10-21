import { Image, Upload, FolderOpen, Trash2, Edit, Download, CheckCircle2, AlertCircle } from 'lucide-react'

export default function GalleryPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="glass-card p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-atom-primary to-electric p-3 shadow-glow">
            <Image className="w-full h-full text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold gradient-text">Gallery Management</h1>
            <p className="text-card-text mt-2">Upload and organize event photos</p>
          </div>
        </div>
        <p className="text-card-text leading-relaxed">
          The gallery system allows you to create photo albums, upload images, and showcase club activities 
          and events in an organized, visually appealing manner.
        </p>
      </section>

      {/* Upload Images */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold gradient-text">Uploading Images</h2>
        <div className="space-y-4">
          {[
            { step: 'Navigate to Gallery', detail: 'Go to admin panel → Gallery → Upload Images' },
            { step: 'Select Album', detail: 'Choose existing album or create new one' },
            { step: 'Choose Images', detail: 'Select multiple images from your computer (JPG, PNG, GIF)' },
            { step: 'Add Captions', detail: 'Optionally add descriptions to each image' },
            { step: 'Upload', detail: 'Click upload button and wait for completion' }
          ].map((step, idx) => (
            <div key={idx} className="glass-card p-6 animate-slide-down" style={{ animationDelay: `${idx * 50}ms` }}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-atom-primary to-electric flex items-center justify-center text-white font-bold flex-shrink-0">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="font-semibold gradient-text mb-2">{step.step}</h3>
                  <p className="text-card-text text-sm">{step.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Album Management */}
      <section className="glass-card p-8">
        <h2 className="text-3xl font-bold gradient-text mb-6">Creating and Managing Albums</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold gradient-text flex items-center gap-2">
              <FolderOpen className="w-5 h-5" />
              Album Creation
            </h3>
            <div className="space-y-3">
              {[
                'Click "Create New Album" button',
                'Enter album title (e.g., "Tech Fest 2024")',
                'Add album description',
                'Set album cover image',
                'Choose visibility (Public/Private)',
                'Save and start adding photos'
              ].map((step, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-card-text text-sm">{step}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold gradient-text flex items-center gap-2">
              <Edit className="w-5 h-5" />
              Album Actions
            </h3>
            <div className="space-y-3">
              {[
                'Edit album details and settings',
                'Reorder images in album',
                'Move images between albums',
                'Delete images from album',
                'Download entire album as ZIP',
                'Share album link with members'
              ].map((action, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-electric shimmer mt-2" />
                  <span className="text-card-text text-sm">{action}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image Management */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold gradient-text">Image Management Features</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { icon: Upload, label: 'Bulk Upload', desc: 'Upload multiple images at once', color: 'from-blue-500 to-cyan-500' },
            { icon: Edit, label: 'Edit Details', desc: 'Modify captions and metadata', color: 'from-purple-500 to-pink-500' },
            { icon: Download, label: 'Download', desc: 'Download original images', color: 'from-green-500 to-teal-500' },
            { icon: Trash2, label: 'Delete', desc: 'Remove unwanted images', color: 'from-red-500 to-orange-500' }
          ].map((action, idx) => {
            const Icon = action.icon
            return (
              <div key={idx} className="glass-card p-4 text-center group hover:scale-105 transition-transform">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${action.color} p-2.5 mb-3 mx-auto shadow-glow`}>
                  <Icon className="w-full h-full text-white" />
                </div>
                <h4 className="font-semibold text-white mb-1">{action.label}</h4>
                <p className="text-card-text text-xs">{action.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Image Specifications */}
      <section className="glass-card p-8">
        <h2 className="text-3xl font-bold gradient-text mb-6">Image Requirements & Best Practices</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold gradient-text">Technical Requirements</h3>
            <div className="space-y-3">
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-white mb-2">Supported Formats</h4>
                <p className="text-card-text text-sm">JPG, JPEG, PNG, GIF</p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-white mb-2">Maximum File Size</h4>
                <p className="text-card-text text-sm">5MB per image (recommended: under 2MB)</p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-white mb-2">Recommended Dimensions</h4>
                <p className="text-card-text text-sm">1920x1080px (landscape) or 1080x1920px (portrait)</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold gradient-text">Best Practices</h3>
            <div className="space-y-2">
              {[
                'Compress images before uploading to reduce load time',
                'Use descriptive filenames before uploading',
                'Add captions to provide context',
                'Organize images into relevant albums',
                'Use high-quality, well-lit photos',
                'Maintain consistent image aspect ratios per album',
                'Remove blurry or low-quality images',
                'Update gallery regularly with new event photos'
              ].map((tip, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-card-text text-sm">{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Display Options */}
      <section className="glass-card p-8">
        <h2 className="text-3xl font-bold gradient-text mb-6">Gallery Display Options</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { option: 'Grid View', desc: 'Display images in a responsive grid layout' },
            { option: 'Masonry View', desc: 'Pinterest-style cascading grid layout' },
            { option: 'Slideshow View', desc: 'Automatic slideshow with transitions' },
            { option: 'Lightbox', desc: 'Full-screen image viewer with navigation' },
            { option: 'Thumbnail View', desc: 'Small previews with click-to-expand' },
            { option: 'Album Cover View', desc: 'Display albums with cover images' }
          ].map((option, idx) => (
            <div key={idx} className="p-4 rounded-lg bg-white/5 border border-white/10">
              <h4 className="font-semibold text-white mb-2">{option.option}</h4>
              <p className="text-card-text text-sm">{option.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tips */}
      <section className="glass-card p-6 border-l-4 border-blue-500">
        <div className="flex items-start gap-4">
          <AlertCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Gallery Management Tips</h3>
            <div className="space-y-2">
              {[
                'Upload event photos within 24-48 hours while the event is still fresh',
                'Create separate albums for different events rather than mixing them',
                'Use watermarks if you want to protect your images',
                'Regularly backup your gallery images to external storage',
                'Get consent before posting photos with identifiable people',
                'Delete duplicate or similar images to keep gallery clean',
                'Use album descriptions to tell the story behind each collection'
              ].map((tip, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2" />
                  <span className="text-card-text text-sm">{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
