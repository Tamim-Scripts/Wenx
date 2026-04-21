import { ClientLayout } from "@/components/client-layout"
import { MediaContent } from "@/components/pages/media-content"

export const metadata = {
  title: "Media & Publications | WenX Investment",
  description: "Stay updated with our latest insights and articles about Saudi investment",
}

export default function MediaPage() {
  return (
    <ClientLayout>
      <MediaContent />
    </ClientLayout>
  )
}
