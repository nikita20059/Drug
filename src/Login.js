
// import { useState, useEffect } from "react";

// function Login() {
    
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [file, setFile] = useState(null);
//     const [pdfs, setPdfs] = useState([]);
//     const [remarks, setRemarks] = useState({});
//     const [editingRemarkId, setEditingRemarkId] = useState(null);

//     const handleOnSubmit = async (e) => {
//         e.preventDefault();

//         const formData = new FormData();
//         formData.append("name", name);
//         formData.append("email", email);
//         formData.append("pdf", file);

//         let result = await fetch("http://localhost:5000/register", {
//             method: "POST",
//             body: JSON.stringify({ name, email }),
//             headers: { "Content-Type": "application/json" }
//         });

//         result = await result.json();

//         if (result) {
//             let uploadResult = await fetch("http://localhost:5000/upload", {
//                 method: "POST",
//                 body: formData
//             });

//             uploadResult = await uploadResult.json();

//             if (uploadResult) {
//                 alert("Data and PDF uploaded successfully");
//                 setEmail("");
//                 setName("");
//                 setFile(null);
//                 fetchPdfs();
//             }
//         }
//     };

//     const fetchPdfs = async () => {
//         let result = await fetch("http://localhost:5000/pdfs");
//         result = await result.json();
//         setPdfs(result);
//     };

//     const openPdf = async (id, filename) => {
//         let response = await fetch(`http://localhost:5000/pdf/${id}`);
//         let blob = await response.blob();
//         let pdfUrl = URL.createObjectURL(blob);
//         window.open(pdfUrl, "_blank");
//     };

//     const downloadPdf = async (id, filename) => {
//         let response = await fetch(`http://localhost:5000/pdf/${id}`);
//         let blob = await response.blob();
//         let url = window.URL.createObjectURL(blob);
//         let a = document.createElement("a");
//         a.href = url;
//         a.download = filename;
//         document.body.appendChild(a);
//         a.click();
//         a.remove();
//     };

//     const approvePdf = async (id) => {
//         await fetch(`http://localhost:5000/approve/${id}`, { method: "PUT" });
//         fetchPdfs();
//     };

//     const rejectPdf = async (id) => {
//         // Send a request to mark the PDF as rejected
//         await fetch(`http://localhost:5000/reject/${id}`, {
//             method: "PUT",
//             body: JSON.stringify({ remark: "" }), // Initially empty remark
//             headers: { "Content-Type": "application/json" },
//         });

//         setRemarks((prev) => ({ ...prev, [id]: "" }));
//         fetchPdfs();
//     };

//     const submitRemark = async (id) => {
//         if (!remarks[id].trim()) {
//             alert("Please enter a remark before submitting.");
//             return;
//         }

//         await fetch(`http://localhost:5000/reject/${id}`, {
//             method: "PUT",
//             body: JSON.stringify({ remark: remarks[id] }),
//             headers: { "Content-Type": "application/json" }
//         });

//         fetchPdfs();
//     };

//     const editRemark = (id, currentRemark) => {
//         setRemarks((prev) => ({ ...prev, [id]: currentRemark }));
//         setEditingRemarkId(id);
//     };

//     const updateRemark = async (id) => {
//         await fetch(`http://localhost:5000/updateRemark/${id}`, {
//             method: "PUT",
//             body: JSON.stringify({ remark: remarks[id] }),
//             headers: { "Content-Type": "application/json" }
//         });

//         setEditingRemarkId(null);
//         fetchPdfs();
//     };

//     useEffect(() => {
//         fetchPdfs();
//     }, []);

//     return (
//         <div>
//             <h1>React WebApp - PDF Upload & Display</h1>

//             <form onSubmit={handleOnSubmit}>
//                 <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
//                 <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//                 <input type="file" accept="application/pdf" onChange={(e) => setFile(e.target.files[0])} required />
//                 <button type="submit">Submit</button>
//             </form>

//             <button onClick={fetchPdfs} style={{ marginTop: "10px" }}>Fetch PDFs</button>

//             <h2>Uploaded PDFs</h2>
//             {pdfs.length > 0 ? (
//                 <table border="1" cellPadding="10">
//                     <thead>
//                         <tr>
//                             <th>#</th>
//                             <th>Filename</th>
//                             <th>Title</th>
//                             <th>Status</th>
//                             <th>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {pdfs.map((pdf, index) => (
//                             <tr key={index}>
//                                 <td>{index + 1}</td>
//                                 <td>{pdf.filename}</td>
//                                 <td>{pdf.title || "Untitled"}</td>
//                                 <td>
//                                     {pdf.status} 
//                                     {pdf.status === "Rejected" && (
//                                         <>
//                                             <span> ({pdf.remark}) </span>
//                                             {editingRemarkId !== pdf._id && (
//                                                 <button onClick={() => editRemark(pdf._id, pdf.remark)}>Edit</button>
//                                             )}
//                                         </>
//                                     )}
//                                 </td>
//                                 <td>
//                                     <button onClick={() => openPdf(pdf._id, pdf.filename)}>Open PDF</button>
//                                     <button onClick={() => downloadPdf(pdf._id, pdf.filename)}>Download PDF</button>
                                    
//                                     {pdf.status === "Pending" && (
//                                         <>
//                                             <button onClick={() => approvePdf(pdf._id)}>Approve</button>
//                                             <button onClick={() => rejectPdf(pdf._id)}>Reject</button>
//                                         </>
//                                     )}

//                                     {editingRemarkId === pdf._id && (
//                                         <>
//                                             <input 
//                                                 type="text" 
//                                                 placeholder="Edit remark" 
//                                                 value={remarks[pdf._id]} 
//                                                 onChange={(e) => setRemarks({ ...remarks, [pdf._id]: e.target.value })} 
//                                             />
//                                             <button onClick={() => updateRemark(pdf._id)}>Update</button>
//                                         </>
//                                     )}
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             ) : (
//                 <p>No PDFs uploaded yet.</p>
//             )}
//         </div>
//     );
// }

// export default Login;

import React from "react";
import "./Login.css";

const Login = () => {
        const thumbnail = "/thumbnail.png";

  return (

    <>
    <div className="loog">

    <div className="login-container">
      <div className="login-box">
        <h2>LOGIN</h2>
        <p>Let’s get Started</p>

        <div className="input-group">
          <span className="icon">👤</span>
          <input type="text" placeholder="Username" />
        </div>

        <div className="input-group">
          <span className="icon">🔒</span>
          <input type="password" placeholder="Password" />
        </div>

        <button className="login-btn">Login Now</button>

        <p className="or-text">Login with Others</p>

        <button className="social-btn google">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" />
          Login with <b>Google</b>
        </button>

        <button className="social-btn facebook">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="Facebook" />
          Login with <b>Facebook</b>
        </button>
      </div>

      <div className="illustration">
        <img src={thumbnail} alt="Illustration" />
      </div>
    </div>
    </div>
    </>
  );
};

export default Login;
