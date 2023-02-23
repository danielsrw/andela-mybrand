import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, About, Signup, Login, CreatePost, EditPost, BlogMain, Blog, Search, Profile, Contact } from "./components/";
import { Dashboard } from './admin/'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/new" element={<CreatePost />} />
          <Route exact path="/edit/:id" element={<EditPost />} />
          <Route exact path="/blog" element={<BlogMain />} />
          <Route exact path="/blog/:id" element={<Blog />} />
          <Route exact path="/search/:query" element={<Search />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/contact" element={<Contact />} />

          {/* ADMIN ROUTES */}

          <Route exact path="/admin/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;