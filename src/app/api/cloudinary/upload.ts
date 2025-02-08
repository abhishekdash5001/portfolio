import cloudinary from 'cloudinary';
cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

//   export async function POST(req: Request) {
//     try {
//       const formData = await req.formData();
//       const file = formData.get('file');
  
//       if (!file || !(file instanceof Blob)) {
//         return new Response('No file uploaded', { status: 400 });
//       }
  
//       // Upload the file to Cloudinary
//       const result = await cloudinary.v2.uploader.upload(file.stream() as string, {
//         folder: 'your-folder-name', // Optional: Specify a folder in Cloudinary
//         use_filename: true,
//         unique_filename: true,
//       });
  
//       // Return the image URL
//       return new Response(
//         JSON.stringify({ url: result.secure_url, public_id: result.public_id }),
//         {
//           status: 200,
//           headers: { 'Content-Type': 'application/json' },
//         }
//       );
//     } catch (error) {
//       return new Response('Error uploading image', { status: 500 });
//     }
//   }