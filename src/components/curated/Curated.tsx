import { Heading } from "../typography/Typography";
import { Paragraph } from "../typography/Typography";
import Card from "../card/Card";

const Curated = (props: {
  header_text: string;
  paragraph_text: string;
  children: any;
}) => {
  return (
    <section className="mt-10 ">
      <Heading text={props.header_text} size="text-[18px]" />
      <Paragraph text={props.paragraph_text} />
      <div className="mt-3 flex flex-wrap gap-3 lg:gap-[7px] xl:gap-2">{props.children}</div>
    </section>
  );
};

export default Curated;
