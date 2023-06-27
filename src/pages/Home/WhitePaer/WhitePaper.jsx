import React from 'react';
import paper from "../../../assets/paper.png"

const WhitePaper = () => {
    return (
        <div
       
        className='flex flex-col lg:flex-row lg:p-16 ml-16 lg:mr-8 gap-8 text-white'>
            <div>
                <img src={paper} alt="" />
            </div>
            <div className=' lg:w-3/4 lg:mt-8'>
                <h2 className='text-3xl font-bold mb-6'>Whitepper</h2>
                <p className='para'>Pellentesque erat tellus, malesuada id felis quis, hendrerit feugiat purus. Nunc elit nisi, consectetur sed quam id, vestibulum rhoncus enim. Aenean vulputate dui dui, in molestie massa scelerisque in. Vivamus tincidunt velit eget ex venenatis pretium in sit amet sapien. Cras ac sollicitudin nisi. Sed laoreet tincidunt feugiat. Phasellus leo odio, dapibus ac pretium <br />
                    <br />Sed ac sapien cursus, suscipit erat nec, iaculis massa. Nunc ultrices enim et nunc dignissim dignissim.  
                </p>
                <button className='btn text-white bg-orange-500 mt-6'>Download Whitepaper</button>
            </div>
        </div>
    );
};

export default WhitePaper;