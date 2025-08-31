import CTAButton from "../components/CTAButton";

export default function About() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">About This Demo</h2>
      <p>
        This mock site simulates user interactions for analytics and tag manager tracking.
      </p>
      <CTAButton label="Read Documentation" />
    </div>
  );
}
