"use client";

import { Button } from "@bds-web/ui";

const Home = () => {
  return (
    <div className="w-full h-screen p-4 flex flex-col gap-4">
      <h1 className="text-h1 text-blue-light">BDS Tester</h1>
      <div className="w-full h-full overflow-scroll border border-greyscale-20 rounded-xl p-4">
        {/* 테스트 공간 */}
        <Button buttonSize="small" buttonType="primary" showIcon>Click Me</Button>
      </div>
    </div>
  )
}

export default Home