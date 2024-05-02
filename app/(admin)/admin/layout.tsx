export const metadata = {
    title: "Admin  | Storify",
    description: "Your new online shopping experience by Storify",
};

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
};

export default AdminLayout;
