import React from 'react';

class WidgetInline extends React.Component {

    componentDidMount() {
        this.uploadWidget()
        // document.getElementById("myWidgetContainer").innerHTML = "test string";   
    }

    uploadWidget = () => {
        window.cloudinary.openUploadWidget(
            {
                cloud_name: 'my_cloud_name',
                upload_preset: "preset1",
                maxImageWidth: 1200,
                maxImageHeight: 1200,
                maxFiles: 12,
                sources: ['local', 'camera', 'facebook', 'instagram', 'dropbox'],
                inlineContainer: document.getElementById('myWidgetContainer'),
                
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
                <p>WidgetInline</p>
                <div id="myWidgetContainer"></div>
            </div>
        );
    }
}

export default WidgetInline