"use client";

import { Button, modal, TextInput } from "@bds-web/ui";
import { useState } from "react";

const Home = () => {
  const [text, setText] = useState("");
  const errorMessage =
    !!text.trim() && text.length < 5 ? "Text must be at least 5 characters long." : "";

  return (
    <div className="w-full h-screen p-4 flex flex-col gap-4">
      <h1 className="text-h1 text-blue-light">BDS Tester</h1>
      <div className="w-full flex-1 overflow-scroll border border-greyscale-20 rounded-xl p-4">
        <div className="w-full flex flex-col items-start gap-4 overflow-scroll pb-10">
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
          <button onClick={() => modal.open({ title: "Test Modal", content: <div>Modal Content</div> })}>open modal</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
