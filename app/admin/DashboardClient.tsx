'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardClient({ initialAuth, initialEnquiries }: { initialAuth: boolean, initialEnquiries: any[] }) {
  const [isAuthenticated, setIsAuthenticated] = useState(initialAuth);
  const [password, setPassword] = useState('');
  const [enquiries, setEnquiries] = useState(initialEnquiries);
  const [loginError, setLoginError] = useState('');
  const router = useRouter();
  
  const [deleteId, setDeleteId] = useState<string | null>(null);

  useEffect(() => {
    setEnquiries(initialEnquiries);
    if (initialAuth) setIsAuthenticated(true);
  }, [initialEnquiries, initialAuth]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        setIsAuthenticated(true);
        router.refresh(); // Refresh to load data
      } else {
        setLoginError('Invalid password');
      }
    } catch (err) {
      setLoginError('An error occurred. Please try again.');
    }
  };

  const confirmDelete = async () => {
    if (!deleteId) return;

    try {
      const res = await fetch(`/api/admin/enquiries/${deleteId}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        setEnquiries(enquiries.filter(eq => eq.id !== deleteId));
        setDeleteId(null);
      } else {
        alert('Failed to delete enquiry');
        setDeleteId(null);
      }
    } catch (err) {
      alert('An error occurred while deleting.');
      setDeleteId(null);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/logout', { method: 'POST' });
      setIsAuthenticated(false);
      setEnquiries([]);
      router.refresh(); // Refresh to reset server state
    } catch (err) {
      console.error('Logout failed', err);
    }
  };

  if (!isAuthenticated) {
    return (
      <div style={{ padding: '4rem', display: 'flex', justifyContent: 'center', minHeight: '100vh', backgroundColor: 'var(--color-base)' }}>
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', background: 'var(--color-base-2)', padding: '2rem', borderRadius: '8px', maxWidth: '400px', width: '100%' }}>
          <h1 style={{ fontFamily: 'var(--font-heading)', margin: 0, color: 'var(--color-contrast)' }}>Admin Login</h1>
          <input
            type="password"
            placeholder="Admin Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid var(--color-contrast-3)', background: 'var(--color-base)', color: 'var(--color-contrast)' }}
            required
          />
          {loginError && <p style={{ color: 'red', margin: 0 }}>{loginError}</p>}
          <button type="submit" className="btn">Login</button>
        </form>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem', minHeight: '100vh', backgroundColor: 'var(--color-base)', color: 'var(--color-contrast)', position: 'relative' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontFamily: 'var(--font-heading)', margin: 0 }}>Admin Dashboard - Enquiries</h1>
        <button 
          onClick={handleLogout}
          style={{ padding: '0.5rem 1rem', background: 'var(--color-contrast-3)', color: 'var(--color-contrast)', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Logout
        </button>
      </div>
      
      {enquiries.length === 0 ? (
        <p>No enquiries found.</p>
      ) : (
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', background: 'var(--color-base-2)', borderRadius: '8px', overflow: 'hidden' }}>
            <thead style={{ backgroundColor: 'var(--color-contrast-3)', color: 'var(--color-contrast)' }}>
              <tr>
                <th style={{ padding: '1rem' }}>Date</th>
                <th style={{ padding: '1rem' }}>Name</th>
                <th style={{ padding: '1rem' }}>Email</th>
                <th style={{ padding: '1rem' }}>Phone</th>
                <th style={{ padding: '1rem' }}>Company</th>
                <th style={{ padding: '1rem' }}>Role</th>
                <th style={{ padding: '1rem' }}>Postcode</th>
                <th style={{ padding: '1rem' }}>Message</th>
                <th style={{ padding: '1rem' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {enquiries.map((enq) => (
                <tr key={enq.id} style={{ borderBottom: '1px solid var(--color-contrast-3)' }}>
                  <td style={{ padding: '1rem' }}>{new Date(enq.createdAt).toLocaleDateString()}</td>
                  <td style={{ padding: '1rem' }}>{enq.name}</td>
                  <td style={{ padding: '1rem' }}>{enq.email}</td>
                  <td style={{ padding: '1rem' }}>{enq.phone || '-'}</td>
                  <td style={{ padding: '1rem' }}>{enq.company || '-'}</td>
                  <td style={{ padding: '1rem' }}>{enq.role || '-'}</td>
                  <td style={{ padding: '1rem' }}>{enq.postcode || '-'}</td>
                  <td style={{ padding: '1rem', maxWidth: '300px', wordWrap: 'break-word' }}>{enq.message}</td>
                  <td style={{ padding: '1rem' }}>
                    <button
                      onClick={() => setDeleteId(enq.id)}
                      style={{ padding: '0.5rem 1rem', background: '#e3342f', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {deleteId && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000
        }}>
          <div style={{
            background: 'var(--color-base)', padding: '2rem', borderRadius: '8px', width: '90%', maxWidth: '400px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', textAlign: 'center'
          }}>
            <h2 style={{ marginTop: 0, fontFamily: 'var(--font-heading)' }}>Confirm Deletion</h2>
            <p style={{ marginBottom: '2rem' }}>Are you sure you want to permanently delete this enquiry? This action cannot be undone.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <button 
                onClick={() => setDeleteId(null)}
                style={{ padding: '0.5rem 1.5rem', background: 'var(--color-contrast-3)', color: 'var(--color-contrast)', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
              >
                Cancel
              </button>
              <button 
                onClick={confirmDelete}
                style={{ padding: '0.5rem 1.5rem', background: '#e3342f', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
