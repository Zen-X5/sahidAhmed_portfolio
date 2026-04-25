import { Container } from "@/components/layout";

export default function FooterSection() {
  return (
    <footer className="border-t border-zinc-800 py-8">
      <Container>
        <p className="text-sm text-zinc-500">© {new Date().getFullYear()} Sahid Ahmed</p>
      </Container>
    </footer>
  );
}
