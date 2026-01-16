import { X } from "lucide-react";
import { useState } from "react";

const Modal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "Commercial",
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Request Sent!\n\nName: ${formData.name}\nType: ${formData.type}\n\n(This is a demo interaction)`);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={20} />
        </button>
        
        <h3 className="modal-title">Request a Quote</h3>
        <p className="modal-subtitle">Start your project with NovaBuild.</p>
        
        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-group">
            <label>Name</label>
            <input 
              type="text" 
              placeholder="Full Name" 
              required 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          
          <div className="form-group">
            <label>Email</label>
            <input 
              type="email" 
              placeholder="name@company.com" 
              required 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>Project Type</label>
            <select
              value={formData.type}
              onChange={(e) => setFormData({...formData, type: e.target.value})}
            >
              <option>Commercial Structure</option>
              <option>Industrial Complex</option>
              <option>Infrastructure Audit</option>
              <option>BIM Consultation</option>
            </select>
          </div>

          <button type="submit" className="btn btn--primary modal-submit">
            Send Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
