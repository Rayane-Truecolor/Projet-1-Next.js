import { Seo } from "@/ui/components/seo";
import { Button } from "@/ui/design-system/button/button";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import { Typography } from "@/ui/design-system/typography/typography";
import { RiAncientGateFill, RiUser6Fill } from "react-icons/ri";

export default function Home() {
  return (
    <>
      <Seo title="Coders Monkeys" description="Description..." />
<div className="max-w-6xl mx-auto space-y-5 py-10">
      {/*Typography*/}
      <div className="space-y-5">
        <Typography>Coders Monkeys</Typography>
        <Typography theme="primary" variant="h1" component="div">
          Coders Monkeys
        </Typography>
        <Typography theme="secondary" variant="lead" component="div">
          Coders Monkeys
        </Typography>
        <Typography variant="body-sm" component="div">
          Coders Monkeys
        </Typography>
        <Typography variant="caption4" component="div">
          Coders Monkeys
        </Typography>
        <Typography variant="caption4" weight="medium" component="div">
          Coders Monkeys
        </Typography>
      </div>

      <div className="flex items-start gap-7">
        {/*Spinners*/}
        <div className="space-y-2">
          <Typography variant="caption2" weight="medium">
            Spinners
          </Typography>

          <div className="flex items-center gap-2 p-5 border border-gray-400 rounded">
            <Spinner size="small" />
            <Spinner />
            <Spinner size="large" />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-4 p-10">
          <Button isLoading size="small">
            Accent
          </Button>

          <Button isLoading size="small" icon={{ icon: RiUser6Fill }}>
            Accent
          </Button>

          <Button
            isLoading
            size="small"
            icon={{ icon: RiUser6Fill }}
            iconPosition="left"
          >
            Accent
          </Button>

          <Button isLoading size="small" variant="secondary">
            {" "}
            Secondary{" "}
          </Button>
          <Button isLoading size="small" variant="outline">
            {" "}
            Accent{" "}
          </Button>
          <Button isLoading size="small" variant="disabled" disabled>
            {" "}
            Accent{" "}
          </Button>
          <Button
            isLoading
            size="small"
            variant="ico"
            icon={{ icon: RiUser6Fill }}
          />
        </div>

        <div className="flex items-center gap-4 p-10">
          <Button>Accent</Button>
          <Button variant="secondary"> Secondary </Button>
          <Button variant="outline"> Accent </Button>
          <Button variant="disabled" disabled>
            {" "}
            Accent{" "}
          </Button>
          <Button variant="ico" icon={{ icon: RiUser6Fill }} />
        </div>

        <div className="flex items-center gap-4 p-10">
          <Button size="large">Accent</Button>
          <Button size="large" variant="secondary">
            {" "}
            Secondary{" "}
          </Button>
          <Button size="large" variant="outline">
            {" "}
            Accent{" "}
          </Button>
          <Button size="large" variant="disabled" disabled>
            {" "}
            Accent{" "}
          </Button>
          <Button size="large" variant="ico" icon={{ icon: RiUser6Fill }} />
          <Button
            size="large"
            variant="ico"
            icon={{ icon: RiUser6Fill }}
            iconTheme="gray"
          />
          <Button
            size="large"
            variant="ico"
            icon={{ icon: RiUser6Fill }}
            iconTheme="secondary"
          />
        </div>
      </div>
      </div>
    </>
  );
}
