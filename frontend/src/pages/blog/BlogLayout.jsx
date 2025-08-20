import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import BlogComments from "./BlogComments";
import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button } from "@mantine/core";
import AddBlog from "./AddBlog";

export default function BlogLayout() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div className="max-w-6xl mx-auto px-4 py-6 text-slate-100">
      <div className="text-xs text-slate-400">Home • Blog Details</div>
      <h1 className="text-4xl font-extrabold tracking-tight my-3 pb-8">
        ✹BLOG DETAILS ✹
      </h1>

      <div className="mb-6">
        <button
          variant="default"
          onClick={open}
          className="bg-primary-cardClr px-4 py-2 rounded-2xl"
        >
          Add Blog
        </button>
      </div>
      <Drawer
        opened={opened}
        onClose={close}
        title="Add Blog"
        position="right"
        styles={{
          content: { backgroundColor: "#323232", color: "#FFFFFF" },
          header: { backgroundColor: "#323232", color: "#1f1f1f" },
          title: { color: "white" },
          close: { color: "white" },
        }}
      >
        {/* Drawer content */}
        <AddBlog onCancel={close} />
      </Drawer>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
        <main className="space-y-4">
          <Outlet />
          <BlogComments />
        </main>
        <div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
