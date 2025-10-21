import { Calendar, Plus, Edit, Trash2, Users, Clock, CheckCircle2, AlertCircle } from 'lucide-react'

export default function EventsPage() {
  const eventFeatures = [
    {
      title: 'Event Creation',
      icon: Plus,
      color: 'from-blue-500 to-cyan-500',
      items: ['Add event details', 'Set date and time', 'Upload event images', 'Configure registration']
    },
    {
      title: 'Registration Management',
      icon: Users,
      color: 'from-purple-500 to-pink-500',
      items: ['Track attendees', 'Export attendee lists', 'Send confirmations', 'Manage capacity']
    },
    {
      title: 'Event Categories',
      icon: Calendar,
      color: 'from-green-500 to-teal-500',
      items: ['Workshop', 'Seminar', 'Competition', 'Social gathering']
    }
  ]

  const createEventSteps = [
    {
      step: 'Access Event Manager',
      details: 'Go to admin panel → Events → Add New Event'
    },
    {
      step: 'Enter Event Details',
      details: 'Fill in event title, description, and detailed information'
    },
    {
      step: 'Set Date & Time',
      details: 'Choose event date, start time, and end time'
    },
    {
      step: 'Add Location',
      details: 'Enter venue name and address (or mark as online event)'
    },
    {
      step: 'Upload Images',
      details: 'Add featured image and additional gallery photos'
    },
    {
      step: 'Configure Registration',
      details: 'Enable registration, set capacity limit, deadline'
    },
    {
      step: 'Set Category & Tags',
      details: 'Choose event category and add relevant tags'
    },
    {
      step: 'Publish Event',
      details: 'Save as draft or publish immediately'
    }
  ]

  const eventFields = [
    { name: 'Event Title', type: 'Required', example: 'AI & Machine Learning Workshop' },
    { name: 'Description', type: 'Required', example: 'Detailed event description with agenda' },
    { name: 'Event Date', type: 'Required', example: '2024-03-15' },
    { name: 'Start Time', type: 'Required', example: '10:00 AM' },
    { name: 'End Time', type: 'Required', example: '4:00 PM' },
    { name: 'Venue/Location', type: 'Required', example: 'Computer Lab, Building A' },
    { name: 'Registration Limit', type: 'Optional', example: '50 participants' },
    { name: 'Registration Deadline', type: 'Optional', example: '2024-03-10' },
    { name: 'Category', type: 'Required', example: 'Workshop' },
    { name: 'Featured Image', type: 'Required', example: 'Event banner (1200x600px)' },
    { name: 'Contact Email', type: 'Optional', example: 'events@atomclub.com' },
    { name: 'External Link', type: 'Optional', example: 'Registration form or details' }
  ]

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="glass-card p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-atom-primary to-electric p-3 shadow-glow">
            <Calendar className="w-full h-full text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold gradient-text">Event Management</h1>
            <p className="text-card-text mt-2">Create and manage club events</p>
          </div>
        </div>
        <p className="text-card-text leading-relaxed">
          The event management system allows you to create, organize, and track club events, 
          handle registrations, and keep members informed about upcoming activities.
        </p>
      </section>

      {/* Event Features */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold gradient-text">Event Management Features</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {eventFeatures.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div
                key={idx}
                className="glass-card p-6 animate-slide-down"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} p-3 mb-4 shadow-glow`}>
                  <Icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 gradient-text">{feature.title}</h3>
                <div className="space-y-2">
                  {feature.items.map((item, iIdx) => (
                    <div key={iIdx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-electric shimmer" />
                      <span className="text-card-text text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Creating Events */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold gradient-text">Creating a New Event</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {createEventSteps.map((step, idx) => (
            <div
              key={idx}
              className="glass-card p-5 animate-fade-in"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-atom-primary to-electric flex items-center justify-center text-white font-bold flex-shrink-0">
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold gradient-text mb-2">{step.step}</h3>
                  <p className="text-card-text text-sm">{step.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Event Form Fields */}
      <section className="glass-card p-8">
        <h2 className="text-3xl font-bold gradient-text mb-6">Event Form Fields</h2>
        <div className="space-y-3">
          {eventFields.map((field, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10 animate-fade-in"
              style={{ animationDelay: `${idx * 30}ms` }}
            >
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-white">{field.name}</h4>
                  <span className={`px-2 py-1 rounded text-xs ${field.type === 'Required' ? 'bg-red-500/20 text-red-400' : 'bg-blue-500/20 text-blue-400'}`}>
                    {field.type}
                  </span>
                </div>
                <p className="text-card-text text-sm">{field.example}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Managing Registrations */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold gradient-text">Managing Event Registrations</h2>
        <div className="glass-card p-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold gradient-text flex items-center gap-2">
                <Users className="w-5 h-5" />
                Registration Features
              </h3>
              <div className="space-y-3">
                {[
                  'View all registered attendees',
                  'Export attendee list (CSV/Excel)',
                  'Send email to all attendees',
                  'Approve/reject registrations',
                  'Track attendance on event day',
                  'Generate attendance certificates'
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span className="text-card-text text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold gradient-text flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Attendee Information
              </h3>
              <div className="space-y-3">
                {[
                  'Name and email address',
                  'Registration date and time',
                  'Payment status (if applicable)',
                  'Custom registration fields',
                  'Attendance status',
                  'Certificate download status'
                ].map((info, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-electric shimmer" />
                    <span className="text-card-text text-sm">{info}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Actions */}
      <section className="glass-card p-8">
        <h2 className="text-3xl font-bold gradient-text mb-6">Event Actions</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { icon: Edit, label: 'Edit Event', desc: 'Modify event details', color: 'from-blue-500 to-cyan-500' },
            { icon: Users, label: 'View Attendees', desc: 'See registration list', color: 'from-purple-500 to-pink-500' },
            { icon: Calendar, label: 'Duplicate Event', desc: 'Create similar event', color: 'from-green-500 to-teal-500' },
            { icon: Trash2, label: 'Delete Event', desc: 'Remove event', color: 'from-red-500 to-orange-500' }
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

      {/* Event Calendar View */}
      <section className="glass-card p-8">
        <h2 className="text-3xl font-bold gradient-text mb-6">Event Calendar View</h2>
        <div className="space-y-4">
          <p className="text-card-text leading-relaxed">
            The event calendar provides a visual overview of all scheduled events:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { view: 'Month View', desc: 'See all events in a monthly calendar grid' },
              { view: 'Week View', desc: 'Detailed view of events for the current week' },
              { view: 'List View', desc: 'Simple chronological list of upcoming events' }
            ].map((view, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-5 h-5 text-electric" />
                  <h4 className="font-semibold text-white">{view.view}</h4>
                </div>
                <p className="text-card-text text-sm">{view.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="glass-card p-6 border-l-4 border-blue-500">
        <div className="flex items-start gap-4">
          <AlertCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Event Management Tips</h3>
            <div className="space-y-2">
              {[
                'Create events at least 2 weeks in advance for better attendance',
                'Use high-quality, relevant images for event banners',
                'Send reminder emails 3 days and 1 day before the event',
                'Keep event descriptions clear and include agenda if applicable',
                'Set realistic registration limits based on venue capacity',
                'Update event status (Upcoming, Ongoing, Completed) regularly',
                'Collect feedback after events to improve future planning'
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
    </div>
  )
}
