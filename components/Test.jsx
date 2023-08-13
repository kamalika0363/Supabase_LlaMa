import React from "react";
import { Button } from "../../components/Button";
import { Send } from "../../icons/Send";
import "./style.css";

export const Desktop = () => {
  return (
    <div className="desktop">
      <div className="div-2">
        <div className="frame">
          <img
            className="img"
            alt="Frame"
            src="https://generation-sessions.s3.amazonaws.com/970370988dffa1957f91d7758230381a/img/frame-1.svg"
          />
          <div className="text-wrapper-2">Supabase LlaMa</div>
          <img
            className="img"
            alt="Ellipse"
            src="https://generation-sessions.s3.amazonaws.com/970370988dffa1957f91d7758230381a/img/ellipse-6.svg"
          />
        </div>
        <div className="overlap">
          <div className="overlap-group">
            <p className="p">All the links would be posted here</p>
          </div>
          <div className="frame-2">
            <div className="div-wrapper">
              <p className="text-wrapper-3">Add a link or text</p>
            </div>
            <Button
              buttonBaseIcon={<Send className="send-1" />}
              buttonBaseSizeMdIconLeadingClassName="design-component-instance-node"
              className="button-instance"
              destructive={false}
              hierarchy="primary"
              icon="only"
              size="lg"
              state="default"
            />
          </div>
        </div>
        <div className="overlap-group-2">
          <div className="overlap-2">
            <div className="text-wrapper-4">Summarized Data</div>
          </div>
          <div className="overlap-3">
            <div className="text-wrapper-5">LlaMa Meta AI</div>
          </div>
          <div className="frame-3">
            <div className="div-wrapper">
              <div className="text-wrapper-3">Summarize it!!</div>
            </div>
            <Button
              buttonBaseIcon={<Send className="send-1" />}
              buttonBaseSizeMdIconLeadingClassName="design-component-instance-node"
              className="button-instance"
              destructive={false}
              hierarchy="primary"
              icon="only"
              size="lg"
              state="default"
            />
          </div>
        </div>
        <div className="group">
          <div className="frame-4">
            <div className="frame-5">
              <img
                className="ellipse"
                alt="Ellipse"
                src="https://generation-sessions.s3.amazonaws.com/970370988dffa1957f91d7758230381a/img/ellipse-2@2x.png"
              />
              <img
                className="ellipse"
                alt="Ellipse"
                src="https://generation-sessions.s3.amazonaws.com/970370988dffa1957f91d7758230381a/img/ellipse-3@2x.png"
              />
              <img
                className="ellipse"
                alt="Ellipse"
                src="https://generation-sessions.s3.amazonaws.com/970370988dffa1957f91d7758230381a/img/ellipse-1@2x.png"
              />
              <img
                className="ellipse"
                alt="Ellipse"
                src="https://generation-sessions.s3.amazonaws.com/970370988dffa1957f91d7758230381a/img/ellipse-4@2x.png"
              />
            </div>
            <div className="frame-6">
              <div className="text-wrapper-6">Sign Out</div>
              <img
                className="icon-log-out"
                alt="Icon log out"
                src="https://generation-sessions.s3.amazonaws.com/970370988dffa1957f91d7758230381a/img/---icon--log-out-@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;