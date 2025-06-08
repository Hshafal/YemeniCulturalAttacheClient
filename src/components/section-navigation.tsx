import { Link } from "react-router-dom"

const sections = [
  { id: "ancient-history", title: "تاريخ اليمن" },
  { id: "geography", title: "جغرافية اليمن" },
  { id: "cuisine", title: "المطبخ اليمني " },
  { id: "clothing", title: "الملابس اليمنية التقليدية" },
  { id: "folk-arts", title: "الفنون و الحرف الشعبية" },
  { id: "music and dance", title: "الموسيقى و الرقص اليمني" },
]

interface SectionNavigationProps {
  currentSection: string
}

export function SectionNavigation({ currentSection }: SectionNavigationProps) {
  return (
    <nav className="bg-muted py-6">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">استكشف الأقسام الأخرى</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {sections.map((section) => (
            <li key={section.id}>
              <Link
                to={`/${section.id}`}
                className={`block p-4 rounded-xl bg-white shadow-md hover:bg-accent hover:text-accent-foreground transition-colors ${section.id === currentSection ? "bg-accent text-accent-foreground" : ""
                  }`}
              >
                {section.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
