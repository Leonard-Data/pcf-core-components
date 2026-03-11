import { AccordionComponent } from "@syncfusion/ej2-react-navigations";
import * as React from "react";
import "./styles/theme.css";
import { IWsAccordion } from "./types";

/**
 * Renders WsAccordion component.
 *
 * @param {IWsAccordion} props - The props for the Accordion component.
 * @returns {JSX.Element} - The rendered Accordion component.
 */
export const WsAccordionComponent: React.FC<IWsAccordion> = React.memo((props: IWsAccordion) => {

  const accordionRef = React.useRef<AccordionComponent>(null);

  return (
    <>
      {props.items.length > 0 && (
        <AccordionComponent
          ref={accordionRef}
          width={props.width}
          height={props.height}
          enableRtl={props.enableRtl}
          items={props.items}
          expandMode={props.expandMode}
          animation={{
            expand: props.accordionConfig?.animation?.expand,
            collapse: props.accordionConfig?.animation?.collapse
          }}
          expandedIndices={props.accordionConfig?.expandedIndices || []}
        >
        </AccordionComponent>
      )}
      {props.items.length === 0 && (props.renderNoDataSource())}
    </>
  );
});

WsAccordionComponent.displayName = "WsAccordionComponent";
