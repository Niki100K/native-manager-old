import ActiveMode_Image from '../../assets/app/ActiveMode-Image.jpg'
import ActiveOrdersScreen_Image from '../../assets/app/ActiveOrdersScreen-Image.jpg'
import CategoryScreen_Image from '../../assets/app/CategoryScreen-Image.jpg'
import CategoryScreenItems_Image from '../../assets/app/CategoryScreenItems-Image.jpg'
import DeactiveMode_Image from '../../assets/app/DeactiveMode-Image.jpg'
import HomeScreen_Image from '../../assets/app/HomeScreen-Image.jpg'
import OrderScreen_Update_Image from '../../assets/app/OrderScreen_Update-Image.jpg'
import OrderScreen_Image from '../../assets/app/OrderScreen-Image.jpg'
import TotalScreen_ActiveMode_Image from '../../assets/app/TotalScreen_ActiveMode-Image.jpg'
import TotalScreen_Image from '../../assets/app/TotalScreen-Image.jpg'
const InstructionsScreenJS = () => {
    const data = [
        {
          header: '1. How to create an order:',
          text: [
            'By pressing the image of an item, you create data. This data will be saved even if you close or restart the App.',
            'When you want to see your total items, press the circle in the bottom-right corner. After this, you will see all items you added in the data.',
            'There you can manage: "add," "remove," or "delete" existing items. At the bottom, you can see your total Items and Price. By pressing the button "Finish," you need to confirm that. If you add, remove, or delete an item, then "Confirm" will restart.',
            'When you have already created an Order, you will see a new button on the right side of the "Header" called "Active Orders."',
          ],
          img: [
            HomeScreen_Image,
            CategoryScreen_Image,
            CategoryScreenItems_Image,
            TotalScreen_Image,
          ]
        },
        {
          header: '2. How to add existing items to an order:',
          text: [
            'When you press the button "Active Orders," you will see all your running orders, sorted by creation time.',
            'To add existing items to an active order, you can press "Manage." After this, you will see all items in this order and can see your total items and price.',
            'There, by pressing the image of an item, you add a quantity of 1 to this product. (Important: If you leave this screen, all progress by adding new existing items will disappear.)',
            'When you add new existing items, the button "Finish" is going to disappear and will be replaced with the "Update" button.',
            'To update your Order, you need to press "Update" and confirm.'
          ],
          img: [
            ActiveOrdersScreen_Image,
            OrderScreen_Image,
            OrderScreen_Update_Image,
          ]
        },
        {
          header: '3. How to add new items to an order:',
          text: [
            'If you want to add new items to an existing order, go to "Active Orders" and press the "Add" button. After pressing this button, you will be sent to the "Home" page.',
            'When you choose a category, you will see the button "Mode Activated" on the top-left, which means all products you choose will be added to the existing order.',
            'After you add all new products, go to the "Total" screen, and you will see the new products. At the bottom, there will be 4 things: New Items (length of new items), Items (length of new and existing items), Total (total price of new products), Total Price (total of new and existing products).',
            'Important: By pressing "Clear," you do not deactivate mode.',
            'After you confirm these new items, the mode will be deactivated, and you can check the chosen order. If everything is successful, new items will be placed there.',
            'Important: If on active mode you add an existing item, let\'s say water "500ml" with quantity 2 and on the chosen order already have water "500ml" with quantity 6. This will sum 2 and 6, and after you confirm the update, you will see on the chosen order the water "500ml" will be with quantity 8.',
          ],
          img: [
            ActiveMode_Image,
            DeactiveMode_Image,
            TotalScreen_ActiveMode_Image
          ]
        },
    ]
  return {
    data
  }
}

export default InstructionsScreenJS
