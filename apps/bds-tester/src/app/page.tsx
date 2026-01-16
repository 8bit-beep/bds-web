"use client";

import { Button, Dropdown, DropdownItem, modal, TextInput } from "@bds-web/ui";
import { useState } from "react";

const Home = () => {
  const [text, setText] = useState("");
  const errorMessage =
    !!text.trim() && text.length < 5
      ? "Text must be at least 5 characters long."
      : "";

  const [selected, setSelected] = useState<DropdownItem | null>(null);

  return (
    <div className="w-full h-screen p-4 flex flex-col gap-4">
      <h1 className="text-h1 text-blue-light">BDS Tester</h1>
      <div className="w-full flex-1 overflow-scroll border border-greyscale-20 rounded-xl p-4">
        <div className="w-full flex flex-col items-start gap-4 pb-10">
          {/* 테스트 공간 */}
          <Button buttonSize="small" buttonType="primary" showIcon>
            Click Me
          </Button>
          <TextInput
            label="Name"
            placeholder="Enter your name"
            value={text}
            onChange={(e) => setText(e.target.value)}
            errorMessage={errorMessage}
          />
          <button
            onClick={() =>
              modal.open({
                title: "Test Modal",
                content: <div>Modal Content</div>,
              })
            }>
            open modal
          </button>
          <Dropdown
            onSelect={(option) => setSelected(option)}
            selected={selected}
            options={[
              { name: "출석", value: "ATTEND" },
              { name: "미출석", value: "NOT_ATTEND" },
              { name: "외박", value: "SLEEP" },
              { name: "외출", value: "OUTGOING" },
              { name: "방과후", value: "AFTER_SCHOOL" },
            ]}
            dropdownSize="small"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
