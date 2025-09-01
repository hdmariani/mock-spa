import CTAButton from "../components/CTAButton";

export default function Home() {
  return (
    <div className="grid gap-8 text-center">
      <h2 className="text-3xl font-bold">Welcome!</h2>
      <p className="max-w-2xl mx-auto">
        This is a <strong>mock SPA</strong> built for testing GTM & GA4. 
        Try clicking buttons and filling forms to test tracking events.
      </p>
      <div className="flex justify-center gap-4">
        <CTAButton data-gtm-cta = "free_trial" label="Start Free Trial" />
        <CTAButton data-gtm-cta = "learn_more" label="Learn More" />
      </div>
    </div>
  );
}
