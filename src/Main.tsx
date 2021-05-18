import React, { useState } from 'react';
import livinghall from '../src/assets/images/livinghall.jpeg';
import bedroom from '../src/assets/images/bedroom.jpg';
import office from '../src/assets/images/office.jpg';
import cafe from '../src/assets/images/cafe.jpg';
import logo from '../src/assets/images/logo.png'
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const smallImageStyle = {
  height: '90px', width: '90px', float: 'left', marginLeft: '10px', marginRight: '10px'
} as any;

const HomeComponent = () => {
  const [selectedImage, setSelectedImage] = useState(livinghall)
  const imagesArray = [{ name: 'livinghall', image: livinghall }, { name: 'bedroom', image: bedroom }, { name: 'office', image: office }, { name: 'cafe', image: cafe }];
  const backgroundOptions = [
    {
      displayName: 'Living Hall',
      imageName: 'livinghall'
    },
    {
      displayName: 'Bedroom',
      imageName: 'bedroom'
    },
    {
      displayName: 'Office',
      imageName: 'office'
    },
    {
      displayName: 'Cafe',
      imageName: 'cafe'
    },
  ];

  const textSize = [
    {
      displayName: '12 inch * 10 inch - single line',
      size: 1
    },
    {
      displayName: '18 inch * 12 inch - single line',
      size: 1
    }, {
      displayName: '24 inch * 12 inch - single line',
      size: 1
    }, {
      displayName: '30 inch * 12 inch - single line',
      size: 1
    }, {
      displayName: '36 inch * 12 inch - single line',
      size: 1
    }, {
      displayName: '48 inch * 12 inch - single line',
      size: 1
    }, {
      displayName: '60 inch * 12 inch - single line',
      size: 1
    }, {
      displayName: '24 inch * 24 inch - two lines',
      size: 2
    }, {
      displayName: '30 inch * 24 inch - two lines',
      size: 2
    }, {
      displayName: '36 inch * 24 inch - two lines',
      size: 2
    }, {
      displayName: '48 inch * 24 inch - two lines',
      size: 2
    },
    {
      displayName: '36 inch * 36 inch - three lines',
      size: 3
    }
  ];

  const colorCode = [
    {
      colorName: 'Pink',
      colorCode: '#e35cee'
    },
    {
      colorName: 'Red',
      colorCode: '#e7402e'
    },
    {
      colorName: 'Orange',
      colorCode: '#f09d29'
    },
    {
      colorName: 'Yellow',
      colorCode: '#faf926'
    },
    {
      colorName: 'Green',
      colorCode: '#7ff046'
    },
    {
      colorName: 'Blue',
      colorCode: '#0066f2'
    },
    {
      colorName: 'Sky Blue',
      colorCode: '#5bb9eb'
    },
    {
      colorName: 'Purple',
      colorCode: '#2304df'
    },
    {
      colorName: 'Light Pink',
      colorCode: '#f4c9d0'
    },
    {
      colorName: 'Cool White',
      colorCode: '#fdfffe'
    },
    {
      colorName: 'Warm White',
      colorCode: '#fcfabd'
    },
  ]

  const [inputTextSize, setInputTextSize] = useState(1);
  const [firstTextBoxValue, setFirstTextBoxValue] = useState('Line-1');
  const [secondTextBoxValue, setSecondTextBoxValue] = useState('Line-2');
  const [thirdTextBoxValue, setThirdTextBoxValue] = useState('Line-3');
  const [textColor, setTextColor] = useState('white')
  const [selectedColorName, setSelectedColorName] = useState('White')
  const [textPosition, setTextPosition] = useState('400px')
  const [textFont, setTextFont] = useState('cursive')
  const [fontSize, SetFontSize] = useState('medium')
  const [isSizeChart, setIsSIzeChart] = useState(false);

  const setImage = (image: any) => {
    setSelectedImage(image)
  }

  const selectedBackground = (item: any) => {
    const abc = imagesArray.find(element => element.name === item) as any;
    setSelectedImage(abc.image)
  }

  const selectedInputSize = (item: any) => {
    console.log(item);
    setFirstTextBoxValue('Line-1')
    setSecondTextBoxValue('Line-2')
    setThirdTextBoxValue('Line-3')
    setInputTextSize(parseInt(item))
  }

  const firstInputText = (value: any) => {
    setFirstTextBoxValue('')
    setFirstTextBoxValue(value)
  }

  const secondInputText = (value: any) => {
    setSecondTextBoxValue('')
    setSecondTextBoxValue(value)
  }

  const thirdInputText = (value: any) => {
    setThirdTextBoxValue('')
    setThirdTextBoxValue(value)
  }

  const changeTextColor = (item: any) => {
    const { colorName, colorCode } = item
    setTextColor(colorCode);
    setSelectedColorName(colorName);
  }

  const selectedFontSize = (size: any) => {
    SetFontSize(size)
  }

  const sizeChartModal = () => {
    setIsSIzeChart(!isSizeChart)
    console.log('isSizeChart', isSizeChart);

  }

  return (
    <>
      {
        isSizeChart &&
        <Modal
          show={true}
          size="lg"
          onHide={() => sizeChartModal()}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              <span>Create Your Sign</span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5 style={{ marginLeft: '40%' }}><a>Shape Guide</a></h5>
            <hr style={{ marginBottom: '1px solid black' }}></hr>
            <img src="https://cdn.kiwisizing.com/dueals-1617874763698.png" style={{ float: 'none', height: 'auto', width: '600px', borderRadius: '13px' }} />
            <hr style={{ marginBottom: '1px solid black' }}></hr>
            <h5 style={{ marginLeft: '40%' }}><a>Size Guide</a></h5>
            <div style={{ overflowY: 'auto' }}>
              <img src="https://cdn.kiwisizing.com/dueals-1615895578400.jpeg" style={{ float: 'none', height: 'auto', width: 'auto', borderRadius: '13px', marginBottom: '10px' }} />
              <img src="https://cdn.kiwisizing.com/dueals-1615895600288.jpeg" style={{ float: 'none', height: 'auto', width: 'auto', borderRadius: '13px', marginBottom: '10px' }} />
              <img src="https://cdn.kiwisizing.com/dueals-1617874525063.jpeg" style={{ float: 'none', height: 'auto', width: 'auto', borderRadius: '13px', marginBottom: '10px' }} />
              <img src="https://cdn.kiwisizing.com/dueals-1617874540451.jpeg" style={{ float: 'none', height: 'auto', width: 'auto', borderRadius: '13px', marginBottom: '10px' }} />
              <img src="https://cdn.kiwisizing.com/dueals-1617874559623.jpeg" style={{ float: 'none', height: 'auto', width: 'auto', borderRadius: '13px', marginBottom: '10px' }} />
              <img src="https://cdn.kiwisizing.com/dueals-1617874591426.jpeg" style={{ float: 'none', height: 'auto', width: 'auto', borderRadius: '13px', marginBottom: '10px' }} />
              <img src="https://cdn.kiwisizing.com/dueals-1617874605734.jpeg" style={{ float: 'none', height: 'auto', width: 'auto', borderRadius: '13px', marginBottom: '10px' }} />
              <img src="https://cdn.kiwisizing.com/dueals-1617874656282.jpeg" style={{ float: 'none', height: 'auto', width: 'auto', borderRadius: '13px', marginBottom: '10px' }} />
              <img src="https://cdn.kiwisizing.com/dueals-1617874630454.jpeg" style={{ float: 'none', height: 'auto', width: 'auto', borderRadius: '13px', marginBottom: '10px' }} />
              <img src="https://cdn.kiwisizing.com/dueals-1617874710350.jpeg" style={{ float: 'none', height: 'auto', width: 'auto', borderRadius: '13px', marginBottom: '10px' }} />
              <img src="https://cdn.kiwisizing.com/dueals-1617874731106.jpeg" style={{ float: 'none', height: 'auto', width: 'auto', borderRadius: '13px', marginBottom: '10px' }} />
              <img src="https://cdn.kiwisizing.com/dueals-1617874745928.jpeg" style={{ float: 'none', height: 'auto', width: 'auto', borderRadius: '13px', marginBottom: '10px' }} />
            </div>
            <hr style={{ marginBottom: '2px solid black' }}></hr>
            <h5 style={{ marginLeft: '40%' }}><a>Color Guide</a></h5>
            <hr style={{ marginBottom: '1px solid black' }}></hr>
            <div>
              <img src="https://cdn.kiwisizing.com/dueals-1615361216977.jpeg" style={{ float: 'none', height: 'auto', width: '600px', borderRadius: '13px' }} />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => sizeChartModal()}>
              Close
          </Button>
          </Modal.Footer>
        </Modal>
      }
      <div style={{ background: 'black', borderBottom: '1px solid white', overflowX: 'hidden' }}>
        <img src={logo} style={{ marginLeft: 'auto', marginRight: '100%', maxHeight: '90px' }} />
        <div style={{marginLeft:'500px'}}>
          <a style={{ color: 'white', marginRight: '15px' }}>Home</a>
          <a style={{ color: 'white', marginRight: '15px' }}>Customize</a>
          <a style={{ color: 'white', marginRight: '15px' }}>Contact Us</a>
          <a style={{ color: 'white', marginRight: '15px' }}>Download Our App</a>
        </div>
      </div>
      <div className="form-group" style={{ background: 'black', height: '100vh', display: 'flex' }}>
        <div style={{ width: '80%' }}>
          <img className={'image-margin'} src={selectedImage} style={{ height: '300px', marginTop: '60px' }} />
          {(inputTextSize === 1 || inputTextSize === 2 || inputTextSize === 3) && <div
            style={{
              color: 'white', position: 'absolute', top: '170px', left: textPosition,
              textShadow: `1px 1px 2px ${textColor}, 0 0 1em ${textColor}, 0 0 1.7em ${textColor}`,
              fontFamily: textFont, fontSize
            }}
          >{firstTextBoxValue}</div>}
          {(inputTextSize === 2 || inputTextSize === 3) && <div style={{
            color: 'white', position: 'absolute', top: '190px', left: textPosition,
            textShadow: `1px 1px 2px ${textColor}, 0 0 1em ${textColor}, 0 0 1.7em ${textColor}`, fontFamily: textFont, fontSize
          }}>{secondTextBoxValue}</div>}
          {inputTextSize === 3 && <div style={{
            color: 'white', position: 'absolute', top: '210px', left: textPosition,
            textShadow: `1px 1px 2px ${textColor}, 0 0 1em ${textColor}, 0 0 1.7em ${textColor}`, fontFamily: textFont, fontSize
          }}>{thirdTextBoxValue}</div>}
          <div className={'small-image-margin '} >
            {
              imagesArray.map((item: any): any => <img src={item.image} style={smallImageStyle} onClick={() => setImage(item.image)} />)
            }
          </div>
        </div>
        <div style={{ width: '100%' }}>
          <div style={{ height: '100%', marginLeft: '0px', float: 'left' }}>
            <div style={{ color: 'white' }} className='animateText'>Please Choose Different SIze TO Enter More Letters</div>
            <h2 style={{ color: 'white' }}>Create Your Own Sign</h2>
            <h4 style={{ color: 'white', position: 'absolute', marginLeft: '15px', marginRight: 'auto', top: '170px', marginBottom: '10px' }}>Rs 4,198.00</h4><br />
            <div style={{ marginBottom: '10px' }}>
              <label style={{ color: 'white', marginLeft: '15px' }}>Background:</label>
              <select onChange={(e) => { selectedBackground(e.target.value) }} style={{ width: '200px' }}>
                {
                  backgroundOptions.map((item: any): any => <option value={item.imageName} onClick={(e: any) => selectedBackground(e.target.value)}>{item.displayName}</option>)
                }
              </select>
              <label style={{ color: 'white', marginLeft: '15px' }}>Change Size</label>
              <select style={{ width: '200px' }} onChange={(e) => selectedInputSize(e.target.value)}>
                {
                  textSize.map(item => <option value={item.size}>{item.displayName}</option>)
                }
              </select>
            </div>
            <div style={{ float: 'left', marginBottom: '10px' }}>
              {(inputTextSize === 1 || inputTextSize === 2 || inputTextSize === 3) && <><label style={{ color: 'white' }}>Enter Your Text</label>
                <input type='text' onChange={(e) => firstInputText(e.target.value)} value={firstTextBoxValue === 'Line-1' ? '' : firstTextBoxValue} /></>}<br />
              {(inputTextSize === 2 || inputTextSize === 3) && <><label style={{ color: 'white' }}>Enter Your Text</label>
                <input type='text' onChange={(e) => secondInputText(e.target.value)} value={secondTextBoxValue === 'Line-2' ? '' : secondTextBoxValue} /></>}<br />
              {inputTextSize === 3 && <><label style={{ color: 'white' }}>Enter Your Text</label>
                <input type='text' onChange={(e) => thirdInputText(e.target.value)} value={thirdTextBoxValue === 'Line-3' ? '' : thirdTextBoxValue} /></>}<br /><br />
              <label style={{ position: 'relative', color: 'white' }}>Text Alignment - </label>
              <span>
                <svg onClick={() => setTextPosition('400px')} style={{ background: 'white', borderRadius: 10, marginLeft: '5px', marginRight: '5px' }} xmlns="http://www.w3.org/2000/svg" width="46" height="26" fill="currentColor" className="bi bi-text-center" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M4 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                </svg>
                <svg onClick={() => setTextPosition('500px')} style={{ background: 'white', borderRadius: 10, marginLeft: '5px', marginRight: '5px' }} xmlns="http://www.w3.org/2000/svg" width="46" height="26" fill="currentColor" className="bi bi-text-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                </svg>
                <svg onClick={() => setTextPosition('210px')} style={{ background: 'white', borderRadius: 10, marginLeft: '5px', marginRight: '5px' }} xmlns="http://www.w3.org/2000/svg" width="46" height="26" fill="currentColor" className="bi bi-text-left" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                </svg>
              </span>
              <br /><br />
              <label style={{ color: 'white' }}>Select Size - </label>
              <input type='button' onClick={() => { selectedFontSize('small') }} value='Regular' />
              <input type='button' onClick={() => { selectedFontSize('medium') }} value='Medium' />
              <input type='button' onClick={() => { selectedFontSize('large') }} value='Large' /><br /><br />
              <span style={{ marginTop: '5px', marginBottom: '5px' }}>
                <label style={{ color: 'white' }}>Color* -</label><label style={{ color: textColor, marginBottom: '15px' }}> {selectedColorName}</label><br /><br />
                {
                  colorCode.map(item => <span style={{ background: item.colorCode, borderRadius: '50%', height: '25px', width: '25px', display: 'inline-block', marginLeft: '5px', marginRight: '5px' }} onClick={() => changeTextColor(item)}></span>)
                }
              </span><br /><br />
              <label style={{ color: 'white', marginLeft: '15px' }}>Choose Font - </label>
              <span style={{ color: textColor, fontFamily: 'cursive', marginLeft: '10px', marginRight: '10px' }} onClick={() => setTextFont('cursive')}>cursive</span>
              <span style={{ color: textColor, fontFamily: 'fantasy', marginLeft: '10px', marginRight: '10px' }} onClick={() => setTextFont('fantasy')}>fantasy</span>
              <span style={{ color: textColor, fontFamily: 'monospace', marginLeft: '10px', marginRight: '10px' }} onClick={() => setTextFont('monospace')}>monospace</span>
              <span style={{ color: textColor, fontFamily: 'sans-serif', marginLeft: '10px', marginRight: '10px' }} onClick={() => setTextFont('sans-serif')}>sans-serif</span>
              <span style={{ color: textColor, fontFamily: 'Pacifico', marginLeft: '10px', marginRight: '10px' }} onClick={() => setTextFont('Pacifico')}>Pacifico</span><br />
              <span style={{ color: textColor, fontFamily: 'Caveat', marginLeft: '10px', marginRight: '10px' }} onClick={() => setTextFont('Caveat')}>Caveat</span>
              <span style={{ color: textColor, fontFamily: 'Dancing Script', marginLeft: '10px', marginRight: '10px' }} onClick={() => setTextFont('Dancing Script')}>Dancing Script</span>
              <span style={{ color: textColor, fontFamily: 'Great Vibes', marginLeft: '10px', marginRight: '10px' }} onClick={() => setTextFont('Great Vibes')}>Great Vibes</span>
              <span style={{ color: textColor, fontFamily: 'Parisienne', marginLeft: '10px', marginRight: '10px' }} onClick={() => setTextFont('Parisienne')}>Parisienne</span><br />
              <span style={{ color: textColor, fontFamily: 'Satisfy', marginLeft: '10px', marginRight: '10px' }} onClick={() => setTextFont('Satisfy')}>Satisfy</span>
              <span style={{ color: textColor, fontFamily: 'Homemade Apple', marginLeft: '10px', marginRight: '10px' }} onClick={() => setTextFont('Homemade Apple')}>Homemade Apple</span>
              <span style={{ color: textColor, fontFamily: 'Marck Script', marginLeft: '10px', marginRight: '10px' }} onClick={() => setTextFont('Marck Script')}>Marck Script</span>
              <span style={{ color: textColor, fontFamily: 'Tangerine', marginLeft: '10px', marginRight: '10px' }} onClick={() => setTextFont('Tangerine')}>Tangerine</span>
              <span style={{ color: textColor, fontFamily: 'Yellowtail', marginLeft: '10px', marginRight: '10px' }} onClick={() => setTextFont('Yellowtail')}>Yellowtail</span><br /><br />
              <a onClick={() => { sizeChartModal() }} style={{ color: 'white' }}>Size/ Shape Guide</a><br />
              <input type='button' value='Add To Cart' style={{ background: 'black', color: 'white', width: '400px', marginTop: '10px', marginBottom: '10px' }} /><br />
              <input type='button' value='Checkout' style={{ width: '400px', }} /><br />
            </div><br />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeComponent;
