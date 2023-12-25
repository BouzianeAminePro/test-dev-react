import React, { Children, useCallback, useMemo, useState } from "react";

import "./Tab.css";

export default function Tab({ children }) {
  const [currentTab, setCurrentTab] = useState(null);

  const tabsHeaders = useMemo(
    () =>
      Children.map(children, (child) => child).filter(
        (child) => child.type.name === "TabHeader"
      ),
    [children]
  );

  const tabsContent = useMemo(
    () =>
      Children.map(children, (child) => child).filter(
        (child) => child.type.name === "TabContent"
      ),
    [children]
  );

  const currentContent = useMemo(
    () => currentTab ?? tabsContent[0],
    [tabsContent, currentTab]
  );

  const updateCurrentTab = useCallback(
    (tabHeader) => {
      setCurrentTab(
        tabsContent.find(
          (tabContent) => tabContent.props.filter === tabHeader.props.filter
        )
      );
    },
    [tabsContent]
  );

  return (
    <div className="tab-container">
      <div className="tab-header-container">
        {tabsHeaders.map((tabHeader, index) => (
          <div
            className="tab-header"
            key={index}
            onClick={() => updateCurrentTab(tabHeader)}
          >
            {tabHeader}
          </div>
        ))}
      </div>
      <div className="content">{currentContent}</div>
    </div>
  );
}
