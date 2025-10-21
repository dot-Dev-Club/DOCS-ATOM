import { HelpCircle, ChevronDown } from 'lucide-react'
import { useState } from 'react'

interface FAQItemProps {
  question: string
  answer: string
  idx: number
}

function FAQItem({ question, answer, idx }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className="glass-card p-6 animate-fade-in cursor-pointer hover:shadow-electric transition-all"
      style={{ animationDelay: `${idx * 30}ms` }}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4 flex-1">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-atom-primary to-electric flex items-center justify-center flex-shrink-0">
            <HelpCircle className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-white mb-2">{question}</h3>
            {isOpen && (
              <p className="text-card-text leading-relaxed animate-slide-down">{answer}</p>
            )}
          </div>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-electric flex-shrink-0 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </div>
    </div>
  )
}

export default function FAQPage() {
  const faqs = [
    {
      category: 'Getting Started',
      questions: [
        {
          q: 'What are the system requirements to run the ATOM Club website?',
          a: 'You need PHP 7.4 or higher, MySQL 5.7 or higher, Apache or Nginx web server, and at least 512MB RAM. For development, you\'ll also need Composer and Git.'
        },
        {
          q: 'How do I access the admin panel for the first time?',
          a: 'Navigate to yourwebsite.com/admin and login with the default credentials (username: admin, password: admin123). Make sure to change these immediately after first login for security.'
        },
        {
          q: 'Can I install this on shared hosting?',
          a: 'Yes, the website can run on shared hosting as long as it meets the minimum requirements (PHP 7.4+, MySQL 5.7+). Some features may perform better on VPS or dedicated hosting.'
        }
      ]
    },
    {
      category: 'Content Management',
      questions: [
        {
          q: 'How do I create a new page or blog post?',
          a: 'Login to the admin panel, go to Content → Add New. Fill in the title and content, configure settings, and click Publish. You can also save as draft to continue editing later.'
        },
        {
          q: 'What image formats are supported for uploads?',
          a: 'The website supports JPG, JPEG, PNG, and GIF formats. Maximum file size is 5MB per image. For best performance, optimize images before uploading and keep them under 2MB.'
        },
        {
          q: 'How do I organize content into categories?',
          a: 'When creating or editing content, you\'ll find a Categories section in the editor. You can select existing categories or create new ones. Categories help organize and filter content.'
        }
      ]
    },
    {
      category: 'Events',
      questions: [
        {
          q: 'How do I create and manage events?',
          a: 'Go to admin panel → Events → Add New Event. Fill in event details including title, date, time, location, and description. You can enable registration and set capacity limits.'
        },
        {
          q: 'Can attendees register for events online?',
          a: 'Yes, enable the registration feature when creating an event. Users can register through the event page, and you can manage registrations from the admin panel.'
        },
        {
          q: 'How do I export the list of event attendees?',
          a: 'In the admin panel, go to Events, select your event, click on "View Attendees", then use the Export button to download the list as CSV or Excel file.'
        }
      ]
    },
    {
      category: 'User Management',
      questions: [
        {
          q: 'What are the different user roles?',
          a: 'There are three main roles: Administrator (full access), Editor (can manage content and events), and Member (basic access to member features). Each role has specific permissions.'
        },
        {
          q: 'How do I add new admin users?',
          a: 'Go to admin panel → Users → Add New User. Fill in the details, select "Administrator" role, and save. The new user will receive login credentials via email.'
        },
        {
          q: 'Can I temporarily disable a user account?',
          a: 'Yes, go to Users, find the user, click Edit, and change their status to "Inactive". This prevents them from logging in without deleting their account data.'
        }
      ]
    },
    {
      category: 'Gallery',
      questions: [
        {
          q: 'How many images can I upload at once?',
          a: 'You can select and upload multiple images simultaneously. The number depends on your server configuration, but typically 10-20 images at once works well.'
        },
        {
          q: 'How do I create photo albums?',
          a: 'Go to admin panel → Gallery → Create Album. Give it a name and description, then you can upload images to that album. Albums help organize photos by event or theme.'
        },
        {
          q: 'Can visitors download images from the gallery?',
          a: 'This depends on your gallery settings. You can enable or disable downloads per album. If enabled, visitors will see a download button on each image.'
        }
      ]
    },
    {
      category: 'Customization',
      questions: [
        {
          q: 'How do I change the website colors and logo?',
          a: 'Go to admin panel → Appearance → Theme Settings. Here you can upload a new logo, change primary and secondary colors, and customize other visual elements.'
        },
        {
          q: 'Can I add custom CSS to modify the design?',
          a: 'Yes, go to Appearance → Custom CSS. You can add your own CSS code to override default styles. Changes take effect immediately.'
        },
        {
          q: 'How do I change the homepage layout?',
          a: 'Go to Settings → Homepage Settings. You can choose which sections to display, reorder them, and configure what content appears in each section.'
        }
      ]
    },
    {
      category: 'Security',
      questions: [
        {
          q: 'How often should I change my admin password?',
          a: 'It\'s recommended to change your admin password every 3-6 months, or immediately if you suspect unauthorized access. Use strong passwords with 12+ characters.'
        },
        {
          q: 'What should I do if I forget my admin password?',
          a: 'Use the "Forgot Password" link on the login page to receive a reset link via email. Alternatively, a database administrator can reset it directly in the database.'
        },
        {
          q: 'How do I enable HTTPS for my website?',
          a: 'You need an SSL certificate from your hosting provider or use Let\'s Encrypt for free SSL. Once installed, update your website URL in admin settings to use https://.'
        }
      ]
    },
    {
      category: 'Technical',
      questions: [
        {
          q: 'How do I backup my website?',
          a: 'Use the backup tool in admin panel → Settings → Backup, or manually backup your database (via phpMyAdmin) and files (via FTP). Store backups in multiple locations.'
        },
        {
          q: 'The website is running slow. What can I do?',
          a: 'Enable caching in admin settings, optimize images, remove unused plugins, and ensure your hosting has adequate resources. Consider using a CDN for static assets.'
        },
        {
          q: 'How do I update to the latest version?',
          a: 'Backup your site first, then download the latest version, replace core files (keeping your customizations), run database migrations if needed, and test thoroughly.'
        }
      ]
    },
    {
      category: 'Email & Notifications',
      questions: [
        {
          q: 'Why are emails not being sent?',
          a: 'Check SMTP settings in admin panel → Settings → Email. Verify your SMTP credentials, server address, and port are correct. Test with the built-in email test feature.'
        },
        {
          q: 'How do I customize email templates?',
          a: 'Go to Settings → Email Templates. You can edit the subject and body of various system emails like registration confirmations, password resets, and event notifications.'
        },
        {
          q: 'Can I send bulk emails to all members?',
          a: 'Yes, go to Users → Send Email. You can filter recipients by role or status, compose your message, and send to multiple users at once.'
        }
      ]
    },
    {
      category: 'Mobile & Responsive',
      questions: [
        {
          q: 'Is the website mobile-friendly?',
          a: 'Yes, the website is fully responsive and adapts to all screen sizes including smartphones, tablets, and desktops. All features work on mobile devices.'
        },
        {
          q: 'Can I manage the website from my phone?',
          a: 'Yes, the admin panel is mobile-responsive. You can login and perform most administrative tasks from your smartphone or tablet browser.'
        }
      ]
    }
  ]

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="glass-card p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-atom-primary to-electric p-3 shadow-glow">
            <HelpCircle className="w-full h-full text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold gradient-text">Frequently Asked Questions</h1>
            <p className="text-card-text mt-2">Find answers to common questions</p>
          </div>
        </div>
        <p className="text-card-text leading-relaxed">
          Browse through our comprehensive FAQ to find answers to the most commonly asked questions about 
          the ATOM Club website. Click on any question to reveal the answer.
        </p>
      </section>

      {/* FAQ Categories */}
      {faqs.map((category, catIdx) => (
        <section key={catIdx} className="space-y-4">
          <h2 className="text-3xl font-bold gradient-text">{category.category}</h2>
          <div className="space-y-3">
            {category.questions.map((faq, qIdx) => (
              <FAQItem
                key={qIdx}
                question={faq.q}
                answer={faq.a}
                idx={qIdx}
              />
            ))}
          </div>
        </section>
      ))}

      {/* Still Have Questions */}
      <section className="glass-card p-8 text-center">
        <HelpCircle className="w-16 h-16 text-electric mx-auto mb-6" />
        <h2 className="text-3xl font-bold gradient-text mb-4">Still Have Questions?</h2>
        <p className="text-card-text leading-relaxed mb-6 max-w-2xl mx-auto">
          If you couldn't find the answer you were looking for, don't hesitate to reach out. 
          Our support team is here to help you with any questions or issues.
        </p>
        <div className="flex items-center justify-center gap-4">
          <button className="metallic-button">
            Contact Support
          </button>
          <button className="glass-card px-6 py-3 rounded-xl hover:shadow-glow transition-all">
            View Documentation
          </button>
        </div>
      </section>
    </div>
  )
}
