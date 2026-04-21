import { InterviewsContent } from "@/components/pages/interviews-content"

export const metadata = {
  title: "Executive Interviews | WenX Investment",
  description: "Watch interviews with industry leaders sharing insights on Saudi investment",
}

export default function InterviewsPage() {
  return (
    <main className="pt-16 lg:pt-20">
      <InterviewsContent />
    </main>
  )
}
