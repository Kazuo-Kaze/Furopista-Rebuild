import First from "../components/First";
import { HorizontalScrollProvider } from "../context/HorizontalScroll.context";

export default function Home() {
  return (
    <HorizontalScrollProvider
      options={{ smooth: true, direction: "horizontal" }}
    >
      <div data-scroll-container>
        <div></div>
        <First />
      </div>
    </HorizontalScrollProvider>
  );
}
