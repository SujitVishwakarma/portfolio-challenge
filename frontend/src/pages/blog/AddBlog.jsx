import React, { useState } from "react";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000",
  headers: { "Content-Type": "application/json" },
});

export default function AddBlog({ onCancel, onCreated }) {
  // Primitive fields
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [image, setImage] = useState("");
  const [author, setAuthor] = useState("Admin");
  const [readTime, setReadTime] = useState("5min");
  const [status, setStatus] = useState("draft");

  // Array fields
  const [content, setContent] = useState([""]);
  const [bulletPoints, setBulletPoints] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);

  // UI state
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // Helpers to manage arrays
  const updateArrayItem = (arr, setter, index, value) => {
    const next = [...arr];
    next[index] = value;
    setter(next);
  };

  const addArrayItem = (arr, setter, value = "") => setter([...arr, value]);

  const removeArrayItem = (arr, setter, index) => {
    const next = arr.filter((_, i) => i !== index);
    setter(next);
  };

  const cleanArr = (arr) =>
    Array.isArray(arr) ? arr.map((s) => String(s || "").trim()).filter(Boolean) : [];

  const resetForm = () => {
    setTitle("");
    setExcerpt("");
    setImage("");
    setAuthor("Admin");
    setReadTime("5min");
    setStatus("draft");
    setContent([""]);
    setBulletPoints([]);
    setCategories([]);
    setTags([]);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!title.trim()) {
      setError("Title is required");
      return;
    }

    const payload = {
      title: title.trim(),
      excerpt: excerpt.trim(),
      image: image.trim(),
      author: author.trim(),
      readTime: readTime.trim(),
      status,
      content: cleanArr(content),
      bulletPoints: cleanArr(bulletPoints),
      categories: cleanArr(categories),
      tags: cleanArr(tags),
    };

    setSubmitting(true);
    try {
      const res = await api.post("/api/posts", payload);
      if (onCreated) onCreated(res.data);
      resetForm();
    } catch (err) {
      const msg =
        err?.response?.data?.message ||
        err?.message ||
        "Failed to create post. Please try again.";
      setError(msg);
    } finally {
      setSubmitting(false);
    }
  };

  // Basic neutral styles (feel free to replace with Mantine inputs)
  const S = {
    label: { display: "block", fontWeight: 600, marginBottom: 6 },
    input: {
      width: "100%",
      padding: "10px 12px",
      border: "1px solid #ddd",
      borderRadius: 8,
      outline: "none",
    },
    textarea: {
      width: "100%",
      padding: "10px 12px",
      border: "1px solid #ddd",
      borderRadius: 8,
      minHeight: 80,
      resize: "vertical",
      outline: "none",
    },
    row: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 },
    smallBtn: {
      padding: "6px 10px",
      fontSize: 13,
      background: "#f5f5f5",
      border: "1px solid #e5e5e5",
      borderRadius: 6,
      cursor: "pointer",
    },
    dangerBtn: {
      padding: "6px 10px",
      fontSize: 13,
      background: "#ffecec",
      border: "1px solid #ffd5d5",
      borderRadius: 6,
      cursor: "pointer",
      color: "#c00",
    },
    addBtn: {
      padding: "6px 10px",
      fontSize: 13,
      background: "#eef7ff",
      border: "1px solid #d6e9ff",
      borderRadius: 6,
      cursor: "pointer",
    },
    primaryBtn: {
      padding: "10px 14px",
      fontWeight: 600,
      background: "#111827",
      color: "#fff",
      border: "1px solid #111827",
      borderRadius: 8,
      cursor: "pointer",
    },
    secondaryBtn: {
      padding: "10px 14px",
      fontWeight: 600,
      background: "#fff",
      color: "#111827",
      border: "1px solid #e5e7eb",
      borderRadius: 8,
      cursor: "pointer",
    },
    sectionTitle: { fontSize: 13, fontWeight: 700, color: "#374151", margin: "12px 0 6px" },
    footer: { display: "flex", gap: 12, justifyContent: "flex-end", marginTop: 16 },
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 style={{ margin: "0 0 12px" }}>Add Blog</h3>

      <div style={{ marginBottom: 12 }}>
        <label style={S.label}>Title</label>
        <input
          style={S.input}
          placeholder="Enter blog title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          maxLength={180}
          required
        />
      </div>

      <div style={{ marginBottom: 12 }}>
        <label style={S.label}>Excerpt</label>
        <textarea
          style={S.textarea}
          placeholder="Short summary for listing"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          maxLength={300}
        />
      </div>

      <div style={S.row}>
        <div>
          <label style={S.label}>Author</label>
          <input
            style={S.input}
            placeholder="Author name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div>
          <label style={S.label}>Read Time</label>
          <input
            style={S.input}
            placeholder="e.g. 5min"
            value={readTime}
            onChange={(e) => setReadTime(e.target.value)}
          />
        </div>
      </div>

      <div style={{ marginTop: 12 }}>
        <label style={S.label}>Status</label>
        <select style={S.input} value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="draft">draft</option>
          <option value="published">published</option>
        </select>
      </div>

      <div style={{ marginTop: 12 }}>
        <label style={S.label}>Image URL</label>
        <input
          style={S.input}
          placeholder="/yogMania.png or https://..."
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>

      {/* Content paragraphs */}
      <div style={{ marginTop: 16 }}>
        <div style={S.sectionTitle} className="text-white">Content paragraphs</div>
        {content.map((val, idx) => (
          <div key={idx} style={{ display: "flex", gap: 8, marginBottom: 8 }}>
            <textarea
              style={{ ...S.textarea, flex: 1 }}
              placeholder={`Paragraph ${idx + 1}`}
              value={val}
              onChange={(e) => updateArrayItem(content, setContent, idx, e.target.value)}
            />
            <button
              type="button"
              onClick={() => removeArrayItem(content, setContent, idx)}
            >
              Remove
            </button>
          </div>
        ))}
        <button type="button"  onClick={() => addArrayItem(content, setContent, "")}>
          + Add paragraph
        </button>
      </div>

      {/* Bullet points */}
      <div style={{ marginTop: 16 }}>
        <div style={S.sectionTitle}>Bullet points</div>
        {bulletPoints.map((val, idx) => (
          <div key={idx} style={{ display: "flex", gap: 8, marginBottom: 8 }}>
            <input
              style={{ ...S.input, flex: 1 }}
              placeholder={`Bullet ${idx + 1}`}
              value={val}
              onChange={(e) => updateArrayItem(bulletPoints, setBulletPoints, idx, e.target.value)}
            />
            <button
              type="button"
              
              onClick={() => removeArrayItem(bulletPoints, setBulletPoints, idx)}
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
    
          onClick={() => addArrayItem(bulletPoints, setBulletPoints, "")}
        >
          + Add bullet
        </button>
      </div>

      {/* Categories */}
      <div style={{ marginTop: 16 }}>
        <div style={S.sectionTitle}>Categories</div>
        {categories.map((val, idx) => (
          <div key={idx} style={{ display: "flex", gap: 8, marginBottom: 8 }}>
            <input
              style={{ ...S.input, flex: 1 }}
              placeholder={`Category ${idx + 1}`}
              value={val}
              onChange={(e) => updateArrayItem(categories, setCategories, idx, e.target.value)}
            />
            <button
              type="button"

              onClick={() => removeArrayItem(categories, setCategories, idx)}
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => addArrayItem(categories, setCategories, "")}
        >
          + Add category
        </button>
      </div>

      {/* Tags */}
      <div style={{ marginTop: 16 }}>
        <div style={S.sectionTitle}>Tags</div>
        {tags.map((val, idx) => (
          <div key={idx} style={{ display: "flex", gap: 8, marginBottom: 8 }}>
            <input
              style={{ ...S.input, flex: 1 }}
              placeholder={`Tag ${idx + 1}`}
              value={val}
              onChange={(e) => updateArrayItem(tags, setTags, idx, e.target.value)}
            />
            <button
              type="button"
              onClick={() => removeArrayItem(tags, setTags, idx)}
            >
              Remove
            </button>
          </div>
        ))}
        <button type="button"  onClick={() => addArrayItem(tags, setTags, "")}>
          + Add tag
        </button>
      </div>

      {error && (
        <div style={{ marginTop: 16, color: "crimson" }}>
          {error}
        </div>
      )}

      <div style={S.footer}>
        <button
          type="button"
          style={S.secondaryBtn}
          onClick={() => {
            resetForm();
            if (onCancel) onCancel();
          }}
          disabled={submitting}
        >
          Cancel
        </button>
        <button type="submit" style={S.primaryBtn} disabled={submitting}>
          {submitting ? "Saving..." : "Create Post"}
        </button>
      </div>
    </form>
  );
}
