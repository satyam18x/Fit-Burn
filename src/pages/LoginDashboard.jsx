import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PlayCircle, DownloadCloud, Activity, Users, Settings } from 'lucide-react';

const LoginDashboard = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const isSuccess = queryParams.get('status') === 'success';
  
  const [isLoggedIn, setIsLoggedIn] = useState(isSuccess);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return (
      <div className="section-padding" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF0F5' }}>
        <div className="card" style={{ width: '100%', maxWidth: '400px', padding: '2.5rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Member Login</h2>
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Email Address</label>
              <input type="email" required placeholder="you@example.com" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #F48FB1', outline: 'none' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Password</label>
              <input type="password" required placeholder="••••••••" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #F48FB1', outline: 'none' }} />
            </div>
            <div style={{ textAlign: 'right' }}>
              <a href="#" style={{ color: 'var(--color-primary)', fontSize: '0.9rem', fontWeight: '600' }}>Forgot Password?</a>
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem' }}>Sign In</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#FFF0F5', minHeight: '100vh' }}>
      {/* Dashboard Top bar */}
      <div style={{ backgroundColor: 'var(--color-dark)', color: 'white', padding: '1rem 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', color: 'white' }}>Welcome back, Jessica!</h2>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <span style={{ fontSize: '0.9rem', opacity: 0.8 }}>21-Day Fat Burn Challenge</span>
            <button className="btn" style={{ background: 'transparent', border: 'none', color: 'white' }} onClick={() => setIsLoggedIn(false)}>Logout</button>
          </div>
        </div>
      </div>

      <div className="container section-padding">
        <div className="grid" style={{ gridTemplateColumns: '2.5fr 1fr', gap: '2rem' }}>
          
          {/* Main Content Area */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            {/* Today's Workout */}
            <div className="card" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><PlayCircle color="var(--color-primary)" /> Today's Workout: Full Body HIIT</h3>
                <span style={{ background: 'var(--color-accent)', color: 'var(--color-primary)', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>Week 2 - Day 3</span>
              </div>
              <div style={{ width: '100%', paddingTop: '56.25%', backgroundColor: '#2D0A1E', position: 'relative', borderRadius: '8px', overflow: 'hidden' }}>
                {/* Placeholder for Video Player */}
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                  <div style={{ textAlign: 'center' }}>
                    <PlayCircle size={64} style={{ opacity: 0.8, marginBottom: '1rem', cursor: 'pointer' }} />
                    <p>Click to Play Video</p>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-end' }}>
                <button className="btn btn-primary">Mark as Completed</button>
              </div>
            </div>

            {/* Weekly Module List */}
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ marginBottom: '1.5rem' }}>This Week's Schedule</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { day: 'Day 1', label: 'Lower Body Strength', completed: true },
                  { day: 'Day 2', label: 'Upper Body & Core', completed: true },
                  { day: 'Day 3', label: 'Full Body HIIT', completed: false, active: true },
                  { day: 'Day 4', label: 'Active Recovery / Stretch', completed: false },
                  { day: 'Day 5', label: 'Cardio Burn', completed: false },
                ].map((mod, i) => (
                  <li key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: mod.active ? 'var(--color-accent)' : '#F8BBD0', border: '1px solid #F48FB1', borderRadius: '8px', alignItems: 'center' }}>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                      <span style={{ fontWeight: 'bold', width: '50px' }}>{mod.day}</span>
                      <span>{mod.label}</span>
                    </div>
                    {mod.completed ? <span style={{ color: '#E91E8C', fontWeight: 'bold' }}>✓ Done</span> : (mod.active ? <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>Let's Go</span> : <span style={{ color: '#F48FB1' }}>Pending</span>)}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            {/* Progress Tracker */}
            <div className="card" style={{ padding: '1.5rem' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}><Activity color="var(--color-primary)" size={20} /> Progress Tracker</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ fontSize: '0.85rem', color: '#2D0A1E', display: 'block', marginBottom: '0.25rem' }}>Log Current Weight (kg)</label>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <input type="number" placeholder="e.g. 65" style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #F48FB1' }} />
                    <button className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Log</button>
                  </div>
                </div>
                <div style={{ marginTop: '1rem', textAlign: 'center', padding: '1rem', background: '#FFF0F5', borderRadius: '8px' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--color-dark)' }}>2.5kg</div>
                  <div style={{ fontSize: '0.8rem', color: '#2D0A1E' }}>Lost so far</div>
                </div>
              </div>
            </div>

            {/* Diet Plan */}
            <div className="card" style={{ padding: '1.5rem' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}><DownloadCloud color="var(--color-primary)" size={20} /> Nutrition & Diet</h4>
              <p style={{ fontSize: '0.9rem', color: '#2D0A1E', marginBottom: '1rem' }}>Stick to the Week 2 macros to optimize your recovery and burn.</p>
              <button className="btn btn-outline" style={{ width: '100%', color: 'var(--color-dark)', borderColor: '#F48FB1', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                <DownloadCloud size={16} /> Download Week 2 Meal Plan
              </button>
            </div>

            {/* Community */}
            <div className="card" style={{ padding: '1.5rem', background: 'var(--color-dark)', color: 'white' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'white' }}><Users color="var(--color-primary)" size={20} /> Community Support</h4>
              <p style={{ fontSize: '0.9rem', color: '#F8BBD0', marginBottom: '1.5rem' }}>Share your wins, struggles, and get advice directly from Coach Sarah.</p>
              <a href="#" className="btn" style={{ backgroundColor: '#E91E8C', color: 'white', width: '100%', textAlign: 'center', display: 'block' }}>
                Join WhatsApp Group
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginDashboard;
