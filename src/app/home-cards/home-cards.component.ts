import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-cards',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home-cards.component.html',
  styleUrl: './home-cards.component.css'
})
export class HomeCardsComponent {

  cards = [  
    { cat: 'Ethnic Wear', discount: '20% Off', img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQAapOv-djDWPkXG7Ua408HX4c4Y4D6UUw44xmnGAqIrq9b4GzfC0Rn-pW4Oy_GpGJbm_6KxsfAdOYq-whd7Ph8Dbcu2UElvY31fDDZno96&usqp=CAE' },  
    { cat: 'Festive Sarees', discount: '25% Off', img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTha7kOsQOU6E8-vO5Wj8Jvt0IUDIjpMtEqgYd9kfSHfHAf2eRYlbQ7FpCC28463YfT4b9IiXFHDETrG1Ab_eANfblbzwWD4XRA7kH3hhE&usqp=CAE' },  
    { cat: 'Designer Kurtas', discount: '30% Off', img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTulfc25qT0leOeNUauzpIOzC8a4YiB25riTo0FhPZr699n91UvFzT2BIfCXxFcXwTdlF1PUfXMWnV1W4TjL-Js6ICkEIjD0JoMvNeagXv4&usqp=CAE' },  
    { cat: 'Sherwanis', discount: '15% Off', img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS-W6c1NQsnT8zyiRhgK-A3xX1SwnBZqpceh6sHi7X_rxLfn5eyA4pV0xg53PfjqtHMSpOimFaeoSd0YWz9z7F28lfGd2yD4r73sxnmtAxU1x7leqLyJ_XVvg&usqp=CAE' },  
    { cat: 'Lehengas', discount: '35% Off', img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQcKFQ5tXPJmop8Qd9Km0Db5Zcrnjqmh3_LxK_85I4Li3JLez6oiSST1v3fgNaAf-QTmpRcV0GHNF-lNgk2k_NZASq0a6m0_XI226F-ucjn7I4MVWJofaY1ZQ&usqp=CAE' },  
    { cat: 'Indo-Western Dresses', discount: '28% Off', img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRjOaESll-pRtmKUDQddQSV4zFmNLPKbD1iX45sdo1CxNYYZjKcSPNoFS2GtKPQ0oeAq7XOKfJQdM_RTifk3ne4EtMa10pNBQYG1dVJIm0c4TAAKrJ38tvq&usqp=CAE' },  
    { cat: 'Jodhpuri Suits', discount: '18% Off', img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTnjf58q9Nu5AI8roeBLyr8E0B-bgabFfO5z1g-1Y0ucUvTX7m8kxKglN4n9Qvs1ScZLlI1vJdYuW6TSH1-mcgu-trwqt-YHVbJEKWOjIFLMwUtesAJ-KCZcA&usqp=CAE' },  
    { cat: 'Anarkali Suits', discount: '22% Off', img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTfTy6_djdcNBd6Oux8UXTFyDc13YVjPod5WXf4f_OEYkcaXizImj__g9QZ8SjrZzi2xbceB_W9yhOEqyKS2R7O-3f3NY0ZZYCE9SaAGPY&usqp=CAE' },  
    { cat: 'Dhoti Kurta', discount: '20% Off', img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRi2JrqHxJ12oqF2D4zemRWuFzRsW6tuODy5erw1Rzu5pHg1-p7uknY0tYRDqKf22pRFA1mbTCpCqj19PQKo-KbsDkgPMacJbt8mh70Kbo&usqp=CAE' },  
    { cat: 'Pathani Suits', discount: '25% Off', img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTk6Mw-u40yVJ_BpzcJl1O7nyu4G27vjdBk1PIjOe0qfsAy4iEUFXibLbtGw5soUt49j0oUBKVEPvyVCLuw70xje8k0aL0ixhn-foejQRGF2tj0kO9lfO1y&usqp=CAE' },  
    { cat: 'Bridal Wear', discount: '40% Off', img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQUTDVDbcQydHOF6-jC1LA4Q7F_WDOO7RRXZfMDYI-K3iYMKtatkAx0BTZ2NNSEHs3iK8YW43bEPpJ0uieDq9sMxIrBf0lSX1AOuO7OtLkezV_Uwj5ocpHO&usqp=CAE' },  
    { cat: 'Festival Accessories', discount: '15% Off', img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTnZ5df9ch4pGVVsLiF80Yz0D-JS_ACiO5KUliReVu8Hg9j0sc6YbCnpLpgVMuHP2A1IWXWUXxVfnhmr1TCh0_WQZW2wiAGHdU8jE9YS3pLWDjmauzMDY3fcA&usqp=CAE' },  
    { cat: 'Smartphones', discount: '10% Off', img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR2OIsKu_ehWDEdlL579X0P8dsSdbQTCG4EyFW7goey4Xmz7cL6aDeVtJ455Dpg503xXdHFnYRXrPeiUEGxfMdkMxC454IyFsUo9DmxWwk&usqp=CAE' },  
    { cat: 'Laptops', discount: '15% Off', img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTvwaMg4NdEcSQr4TWI9mLwGkwvzIa2skzsw_3cUMd7AqpnJzge0PW3E7WvF4QDUn6c2z-BGXPlEdKf_k2WVyqS8Kht4zXoVhpYIMbpHrfjUdRLXsAeJXTPbw&usqp=CAE' },  
    { cat: 'Smartwatches', discount: '12% Off', img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSl3zzW1hI_AOC2qirbgtOrUcwFIg9XEIS7atV26xvrTzNrfGNsR8h0a_z4u72FmUsm8sX5ra0m_B0ZxP7j3tozZHXqd5H4zekI2hrtaPg&usqp=CAE' },  
    { cat: 'Wireless Earbuds', discount: '18% Off', img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS_Wpi_AFOh-tQ3QamTVGd1i4r3ZFXeiqJUN94lKkfeK-wlX22M5PVH0cSjuodxEOejK5y0ffjds4fuMjduf_MUlyV-9LEk569daLG-EQM&usqp=CAE' },  
    { cat: 'Gaming Consoles', discount: '22% Off', img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSuTn6L59CSHqi-RjpcSdp7MgQhAcj5kPzIffWAkyWRPTFvKGPPpnt5_KeJnk8mZQFFjXA_ImNIthSJEv2x7STroAo5_QRBhz1Njbyp70JE' },  
    { cat: 'DSLR Cameras', discount: '20% Off', img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSTrAWbb2J5qpbcnimHMoJPTYl2Y7WSr3KfxxknPOJpbhc7gYwWGcYddEq0JQuSZbTZZeClfLqQFNNTF8x97Ympp94GWfIEREXUmOnElulMHcgEQNYkQjRP' },  
    { cat: 'VR Headsets', discount: '25% Off', img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR-MKCNpQGpGXbyL0QSalyX15JPLhXCpfgmn92aohRYoaLygk1frlmoXfvaJNbQyE0WCSrJGaSr6Rxu6N6BVUzrWe8NYNCe9xTWW73-zQKuRSAPd4i1LAYz' },  
    { cat: 'Bluetooth Speakers', discount: '15% Off', img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRLi0j_Yuo4WNbPMpWV_Ty2Ewci7ZeDEOcWqzAPL3ZJs1HfKVg3iretZF53PMPMjXqPmAsaxuU70D3dpbBG-Lm4X_IGgGQ5sr3nSqLTnpg' },  
    { cat: 'Nike', discount: '30% Off', img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQWds1KbQWD1ZJHNQ3USa0OWcoHisv99KKH0mnQ7CvZ9GST5CN_-schbUdMy1nSEDyntRBpL66G4EV-0no7gWx7c6NwwUP3HqW1DWFk6f8&usqp=CAE' },
    { cat: 'Adidas', discount: '25% Off', img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQUvLxHvtRUcfSIUES39QXJkeoCX5vdX5z7BiGBZDLH8PNpth7CVqZByqd_ZFSgo7gJC6IT1kqPNO03W_OnH6_BpgWDlQ4PIBJXklF1qzmcMo4c7eRCnn7gN3s&usqp=CAE' },
    { cat: 'H&M Shirt', discount: '15% Off', img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRfIcOhpgvl8k6rAqdCPpeM6VqSEGcDwVNTNxMY_1KzhUc_TqGg-nYadCiXf5sB2hCKiNTqXq2t6tF3aeJi3RxC3tLTjRv0tOZ10Vcbxylb7m4jEPWckqOA&usqp=CAE' },
    { cat: 'Levi’s Jeans', discount: '20% Off', img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQx3_6tti7xCWYNecUNGBzCwV5jZQq1aPxRPW42iC1RSUzL82Iw_iyLdXQ0at9AMkIQGZN0yKjEG6qhSp-I3nImz6tLqWKeTuyIQssYGdRc&usqp=CAE' },
    // { cat: 'Puma Sneakers', discount: '18% Off', img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRpf4XxIFOlz7U9aDc6GttHX8pVe483PQe_bZv9he9ZXAsGCxbDKfzdqNh8GCr4mT9C8i6SGQPFQjq2LT_fKPO5QywNyBpRqLZ9LvFAZ5cWMt_JJEtLXMsLyg&usqp=CAE' }

  ];

}
