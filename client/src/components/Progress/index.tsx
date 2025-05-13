import React, { useState } from "react";
import moment from "moment";

import Timeline, {
  TimelineHeaders,
  SidebarHeader,
  DateHeader,
} from "react-calendar-timeline";

import generateFakeData from "./generate-fake-data.tsx";

const keys = {
  groupIdKey: "id",
  groupTitleKey: "title",
  groupRightTitleKey: "rightTitle",
  itemIdKey: "id",
  itemTitleKey: "title",
  itemDivTitleKey: "title",
  itemGroupKey: "group",
  itemTimeStartKey: "start",
  itemTimeEndKey: "end",
  groupLabelKey: "title",
};

const Progress = () => {
  const { groups, items } = generateFakeData(150);
  const defaultTimeStart = moment().startOf("day").toDate();
  const defaultTimeEnd = moment().startOf("day").add(1, "day").toDate();

  const [state] = useState({
    groups,
    items,
    defaultTimeStart,
    defaultTimeEnd,
  });

  return (
    <Timeline
      groups={state.groups}
      items={state.items}
      keys={keys}
      sidebarContent={<div>Above The Left</div>}
      itemsSorted
      itemTouchSendsClick={false}
      stackItems
      itemHeightRatio={0.75}
      showCursorLine
      canMove={false}
      canResize={false}
      defaultTimeStart={state.defaultTimeStart}
      defaultTimeEnd={state.defaultTimeEnd}
    >
      <TimelineHeaders className="sticky">
        <SidebarHeader>
          {({ getRootProps }) => <div {...getRootProps()}>Left</div>}
        </SidebarHeader>
        <DateHeader unit="primaryHeader" />
        <DateHeader />
      </TimelineHeaders>
    </Timeline>
  );
};

export default Progress;
