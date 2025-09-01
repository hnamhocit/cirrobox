import Section from "../Section";
import App from "./App";

const Apps = () => {
  return (
    <Section title="Applications">
      <div className="grid grid-cols-6 gap-7">
        {Array.from({ length: 12 }).map((_, index) => (
          <App key={index} />
        ))}
      </div>
    </Section>
  );
};

export default Apps;
