import { useState } from "react";

import {
  CalciteAction,
  CalciteActionBar,
  CalciteAlert,
  CalciteButton,
  CalciteFlow,
  CalciteFlowItem,
  CalciteNotice,
  CalciteShell,
  CalciteShellPanel,
  CalciteTooltip
} from "@esri/calcite-components-react";

export default function App() {
  const [isPanelOpen, setIsPanelOpen] = useState(true);
  const [isAlertOpen, setIsAlertOpen] = useState(true);

  return (
    <div className="App">
      <CalciteShell content-behind={true}>
        <div slot="header" style={{ display: "flex", flexDirection: "row" }}>
          <h2 id="header-title" style={{ paddingLeft: "10px", flexGrow: 1 }}>
            Header app
          </h2>
        </div>

        <CalciteShellPanel
          id="primary-panel"
          slot="primary-panel"
          data-action-id="primary-panel"
          detached={false}
          widthScale="m"
          collapsed={isPanelOpen ? undefined : true}
        >
          <CalciteActionBar slot="action-bar">
            <CalciteAction
              key={0}
              id={"home"}
              data-action-id={"home"}
              icon={"home"}
              text={"Home"}
              onClick={() => {
                setIsPanelOpen(!isPanelOpen);
              }}
            />
          </CalciteActionBar>
          <CalciteFlow id="calcite-flow-node">
            <CalciteFlowItem
              heading="Heading Parent"
              width-scale="m"
              data-panel-id="parent-panel"
              description="Some summary text"
              widthScale="m"
              closed={isPanelOpen ? undefined : true} // set in prod to true
            >
              <CalciteAction
                icon="reset"
                text-enabled
                text="Reset"
                slot="header-menu-actions"
              ></CalciteAction>
              <CalciteButton
                id={`btn-show-scenario-details`}
                onClick={(evt) => {
                  console.log(
                    "Btn text: ",
                    (evt.currentTarget as HTMLCalciteButtonElement).innerText
                  );
                }}
                slot="footer-actions"
                width="full"
                //disabled={true}
              >
                Show details
              </CalciteButton>

              <CalciteTooltip
                label="Example label"
                reference-element={`btn-show-scenario-details`}
                placement="bottom"
              >
                <span>This is a tooltip</span>
              </CalciteTooltip>
              <CalciteNotice
                active={true}
                icon={"information"}
                scale="s"
                style={{ marginTop: "5px" }}
              >
                <span slot="message">This is a notice component</span>
              </CalciteNotice>
            </CalciteFlowItem>
            <CalciteFlowItem heading="Child Parent"></CalciteFlowItem>
          </CalciteFlow>
        </CalciteShellPanel>
      </CalciteShell>
      <CalciteAlert
        open={isAlertOpen ? true : undefined}
        label="boo"
        onCalciteAlertClose={() => {
          setIsAlertOpen(!isAlertOpen);
        }}
      >
        <div slot="title">Alert title</div>
        <div slot="message">Headlines: </div>
        <a slot="link" href="https://nos.nl">
          Dutch News website
        </a>
      </CalciteAlert>
    </div>
  );
}
