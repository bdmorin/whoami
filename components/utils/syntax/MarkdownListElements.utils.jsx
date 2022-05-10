export default function MarkdownListElements(props) {
  return (
    <>
      <span className="text-[#8464c6]">-</span>{" "}
      <span>
        [<span className="text-[#54c59f]">{props.name}</span>](
        <span className="text-[#8464c6]">
          <a href={props.link}>{props.link}</a>
        </span>
        )
      </span>
      <br />
    </>
  );
}
