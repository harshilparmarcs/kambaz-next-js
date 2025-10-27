
import Lab4Provider from "./Provider";

export default function Lab4Layout({ children }: { children: React.ReactNode }) {
  return <Lab4Provider>{children}</Lab4Provider>;
}