import Typography from "@/app/Components/ui-kit/typography";
import GlassContainer from "@/app/Components/ui-kit/glassContainer";

export default function UiKitPage() {
  return (
    <>
    <div>
      <Typography variant="h1">Get Started Free</Typography>
      <br />
      <Typography variant="h2">
        Launch-ready landing pages. Zero effort.
      </Typography>
      <br />
      <Typography variant="h3">
        Create beautiful, high-converting landing pages in minutes. No design or
        coding skills needed.
      </Typography>
      <br />
      <Typography variant="body-1">Next</Typography>
      <br />
      <Typography variant="body-2">
        Enter your number to receive instant access
      </Typography>
      <br />
      <Typography variant="body-3">
        By signing up, you agree to our Terms of Service
      </Typography>
    </div>
    {/* Components */}
    <div>
        <div className="bg-[url(https://cdn.pixabay.com/photo/2026/01/04/08/24/moon-10051671_640.jpg)] bg-cover bg-center bg-no-repeat">
        <GlassContainer>
            <Typography variant="h1">Get Started Free</Typography>
            <br />
            <Typography variant="h2">
              Launch-ready landing pages. Zero effort.
            </Typography>
            <br />
            <Typography variant="h3">
              Create beautiful, high-converting landing pages in minutes. No
              design or coding skills needed.
            </Typography>
            <br />
            <Typography variant="body-1">Next</Typography>
            <br />
            <Typography variant="body-2">
              Enter your number to receive instant access
            </Typography>
            <br />
            <Typography variant="body-3">
              By signing up, you agree to our Terms of Service
            </Typography>
        </GlassContainer>
        </div>
    </div>
    </>
  );
}
