import NGOListGroup from "./NGOListGroup";

const { default: Section } = require("../Section/Section");

const NGOList = ({ data }) => {
  return (
    <Section title={data.ngoListTitle}>
      <div>
        {data.ngoListGroup.map((group) => {
          return <NGOListGroup key={group.ngoListType} data={group} />;
        })}
      </div>
    </Section>
  );
};

export default NGOList;
