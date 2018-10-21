import React from 'react';

class WidgetModal extends React.Component {

    uploadWidget = () => {
        window.cloudinary.openUploadWidget(
            {
                cloud_name: 'my_cloud_name',
                upload_preset: "preset1",
                maxImageWidth: 1200,
                maxImageHeight: 1200,
                maxFiles: 12,
                sources: ['local', 'camera', 'facebook', 'instagram', 'dropbox']
            },
            (error, result) => {
                console.log(result);

                if (result && result.event === "success") {
                    console.log('image uplaod success 👏 - ');
                }

                if (error) {
                    console.log("🔥 error from cloudinary = ", error);
                }

            }
        );
    }
    render() {
        return (
            <div>
                <p>WidgetModal</p>
                <button onClick={() => { this.uploadWidget() }}>cloud widget</button>
            </div>
        );
    }
}
export default WidgetModal