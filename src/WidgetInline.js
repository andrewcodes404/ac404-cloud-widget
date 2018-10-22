import React from 'react';

class WidgetInline extends React.Component {

    componentDidMount() {
        this.uploadWidget()
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
                ///this will run the widget before the render() and create an arror
                // inlineContainer: document.getElementById('myWidgetContainer'),

                // this way works 👇
                inlineContainer: '#myWidgetContainer'
                
            },
            (error, result) => {
                console.log(result);

                if (result && result.event === "success") {
                    console.log('image uplaod success 👏');
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