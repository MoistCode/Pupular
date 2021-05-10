/* eslint-disable no-console */
import * as faker from 'faker';

import User from '../src/entity/User';

const MAX_NUM_OF_TEST_USERS = 150;

const PET_ICONS = [
  'https://images.dog.ceo/breeds/doberman/n02107142_1901.jpg',
  'https://images.dog.ceo/breeds/ovcharka-caucasian/IMG_20200205_163615.jpg',
  'https://images.dog.ceo/breeds/labradoodle/labradoodle-forrest.png',
  'https://images.dog.ceo/breeds/komondor/n02105505_1293.jpg',
  'https://images.dog.ceo/breeds/dachshund/harry-646905_640.jpg',
  'https://images.dog.ceo/breeds/newfoundland/n02111277_5955.jpg',
  'https://images.dog.ceo/breeds/cattledog-australian/IMG_1042.jpg',
  'https://images.dog.ceo/breeds/schipperke/n02104365_9041.jpg',
  'https://images.dog.ceo/breeds/malinois/n02105162_5954.jpg',
  'https://images.dog.ceo/breeds/chihuahua/n02085620_3877.jpg',
  'https://images.dog.ceo/breeds/eskimo/n02109961_5066.jpg',
  'https://images.dog.ceo/breeds/havanese/00100trPORTRAIT_00100_BURST20191103202017556_COVER.jpg',
  'https://images.dog.ceo/breeds/pyrenees/n02111500_3835.jpg',
  'https://images.dog.ceo/breeds/sheepdog-english/Finnigan_Old_English_Sheepdog_sml.jpg',
  'https://images.dog.ceo/breeds/doberman/n02107142_11717.jpg',
  'https://images.dog.ceo/breeds/terrier-scottish/n02097298_7629.jpg',
  'https://images.dog.ceo/breeds/mix/Polo.jpg',
  'https://images.dog.ceo/breeds/spaniel-brittany/n02101388_3536.jpg',
  'https://images.dog.ceo/breeds/schnauzer-miniature/n02097047_5837.jpg',
  'https://images.dog.ceo/breeds/mix/jim_03.jpg',
  'https://images.dog.ceo/breeds/hound-ibizan/n02091244_1045.jpg',
  'https://images.dog.ceo/breeds/terrier-irish/n02093991_4678.jpg',
  'https://images.dog.ceo/breeds/terrier-scottish/n02097298_7517.jpg',
  'https://images.dog.ceo/breeds/waterdog-spanish/20180714_201544.jpg',
  'https://images.dog.ceo/breeds/deerhound-scottish/n02092002_5617.jpg',
  'https://images.dog.ceo/breeds/labradoodle/labradoodle-forrest.png',
  'https://images.dog.ceo/breeds/spaniel-cocker/n02102318_2030.jpg',
  'https://images.dog.ceo/breeds/stbernard/n02109525_10215.jpg',
  'https://images.dog.ceo/breeds/clumber/n02101556_4875.jpg',
  'https://images.dog.ceo/breeds/pointer-germanlonghair/hans1.jpg',
  'https://images.dog.ceo/breeds/chihuahua/n02085620_2517.jpg',
  'https://images.dog.ceo/breeds/malinois/n02105162_5785.jpg',
  'https://images.dog.ceo/breeds/keeshond/n02112350_6952.jpg',
  'https://images.dog.ceo/breeds/setter-english/n02100735_10086.jpg',
  'https://images.dog.ceo/breeds/lhasa/n02098413_18307.jpg',
  'https://images.dog.ceo/breeds/leonberg/n02111129_187.jpg',
  'https://images.dog.ceo/breeds/terrier-yorkshire/n02094433_7495.jpg',
  'https://images.dog.ceo/breeds/rottweiler/n02106550_8776.jpg',
  'https://images.dog.ceo/breeds/groenendael/n02105056_7305.jpg',
  'https://images.dog.ceo/breeds/terrier-westhighland/n02098286_4011.jpg',
  'https://images.dog.ceo/breeds/wolfhound-irish/n02090721_1835.jpg',
  'https://images.dog.ceo/breeds/komondor/n02105505_3617.jpg',
  'https://images.dog.ceo/breeds/elkhound-norwegian/n02091467_2080.jpg',
  'https://images.dog.ceo/breeds/terrier-scottish/n02097298_2863.jpg',
  'https://images.dog.ceo/breeds/retriever-chesapeake/n02099849_4767.jpg',
  'https://images.dog.ceo/breeds/mix/penny.jpg',
  'https://images.dog.ceo/breeds/hound-afghan/n02088094_12563.jpg',
  'https://images.dog.ceo/breeds/komondor/n02105505_1293.jpg',
  'https://images.dog.ceo/breeds/chihuahua/n02085620_10621.jpg',
  'https://images.dog.ceo/breeds/terrier-yorkshire/n02094433_2748.jpg',
  'https://images.dog.ceo/breeds/deerhound-scottish/n02092002_11428.jpg',
  'https://images.dog.ceo/breeds/springer-english/n02102040_1300.jpg',
  'https://images.dog.ceo/breeds/affenpinscher/n02110627_11345.jpg',
  'https://images.dog.ceo/breeds/springer-english/n02102040_4625.jpg',
  'https://images.dog.ceo/breeds/bullterrier-staffordshire/n02093256_3529.jpg',
  'https://images.dog.ceo/breeds/setter-irish/n02100877_511.jpg',
  'https://images.dog.ceo/breeds/basenji/n02110806_4179.jpg',
  'https://images.dog.ceo/breeds/boxer/n02108089_11875.jpg',
  'https://images.dog.ceo/breeds/schnauzer-miniature/n02097047_2511.jpg',
  'https://images.dog.ceo/breeds/terrier-scottish/n02097298_9677.jpg',
  'https://images.dog.ceo/breeds/frise-bichon/jh-ezio-2.jpg',
  'https://images.dog.ceo/breeds/terrier-russell/iguet3.jpeg',
  'https://images.dog.ceo/breeds/finnish-lapphund/mochilamvan.jpg',
  'https://images.dog.ceo/breeds/puggle/IMG_074816.jpg',
  'https://images.dog.ceo/breeds/weimaraner/n02092339_176.jpg',
  'https://images.dog.ceo/breeds/havanese/00100trPORTRAIT_00100_BURST20191103202017556_COVER.jpg',
  'https://images.dog.ceo/breeds/vizsla/n02100583_3021.jpg',
  'https://images.dog.ceo/breeds/dachshund/Dash_Dachshund_With_Hat.jpg',
  'https://images.dog.ceo/breeds/dalmatian/cooper1.jpg',
  'https://images.dog.ceo/breeds/terrier-yorkshire/n02094433_10124.jpg',
  'https://images.dog.ceo/breeds/spaniel-welsh/n02102177_716.jpg',
  'https://images.dog.ceo/breeds/weimaraner/n02092339_75.jpg',
  'https://images.dog.ceo/breeds/germanshepherd/n02106662_10858.jpg',
  'https://images.dog.ceo/breeds/kuvasz/n02104029_1287.jpg',
  'https://images.dog.ceo/breeds/spaniel-welsh/n02102177_3289.jpg',
  'https://images.dog.ceo/breeds/redbone/n02090379_1489.jpg',
  'https://images.dog.ceo/breeds/cotondetulear/100_2013.jpg',
  'https://images.dog.ceo/breeds/vizsla/n02100583_12047.jpg',
  'https://images.dog.ceo/breeds/terrier-australian/n02096294_7370.jpg',
  'https://images.dog.ceo/breeds/saluki/n02091831_6406.jpg',
  'https://images.dog.ceo/breeds/bulldog-english/mami.jpg',
  'https://images.dog.ceo/breeds/poodle-standard/n02113799_801.jpg',
  'https://images.dog.ceo/breeds/terrier-border/n02093754_6453.jpg',
  'https://images.dog.ceo/breeds/whippet/n02091134_9398.jpg',
  'https://images.dog.ceo/breeds/ovcharka-caucasian/IMG_20200206_195949.jpg',
  'https://images.dog.ceo/breeds/schnauzer-giant/n02097130_5432.jpg',
  'https://images.dog.ceo/breeds/spaniel-welsh/n02102177_1210.jpg',
  'https://images.dog.ceo/breeds/chow/n02112137_4650.jpg',
  'https://images.dog.ceo/breeds/newfoundland/n02111277_3560.jpg',
  'https://images.dog.ceo/breeds/retriever-chesapeake/n02099849_1575.jpg',
  'https://images.dog.ceo/breeds/cairn/n02096177_13328.jpg',
  'https://images.dog.ceo/breeds/pointer-german/n02100236_965.jpg',
  'https://images.dog.ceo/breeds/clumber/n02101556_4386.jpg',
  'https://images.dog.ceo/breeds/setter-english/n02100735_5978.jpg',
  'https://images.dog.ceo/breeds/pitbull/IMG_20190826_121528_876.jpg',
  'https://images.dog.ceo/breeds/australian-shepherd/pepper2.jpg',
  'https://images.dog.ceo/breeds/whippet/n02091134_15245.jpg',
  'https://images.dog.ceo/breeds/ovcharka-caucasian/IMG_20190826_112025.jpg',
  'https://images.dog.ceo/breeds/germanshepherd/n02106662_2884.jpg',
  'https://images.dog.ceo/breeds/vizsla/n02100583_3274.jpg',
  'https://images.dog.ceo/breeds/labrador/n02099712_854.jpg',
  'https://images.dog.ceo/breeds/terrier-russell/jack1.jpg',
  'https://images.dog.ceo/breeds/terrier-sealyham/n02095889_1445.jpg',
  'https://images.dog.ceo/breeds/havanese/00100trPORTRAIT_00100_BURST20191030212452971_COVER.jpg',
  'https://images.dog.ceo/breeds/hound-basset/n02088238_6708.jpg',
  'https://images.dog.ceo/breeds/terrier-silky/n02097658_9407.jpg',
  'https://images.dog.ceo/breeds/terrier-toy/n02087046_1004.jpg',
  'https://images.dog.ceo/breeds/affenpinscher/n02110627_13590.jpg',
  'https://images.dog.ceo/breeds/schipperke/n02104365_10139.jpg',
  'https://images.dog.ceo/breeds/saluki/n02091831_1565.jpg',
  'https://images.dog.ceo/breeds/keeshond/n02112350_8279.jpg',
  'https://images.dog.ceo/breeds/newfoundland/n02111277_182.jpg',
  'https://images.dog.ceo/breeds/terrier-scottish/n02097298_3238.jpg',
  'https://images.dog.ceo/breeds/terrier-silky/n02097658_1270.jpg',
  'https://images.dog.ceo/breeds/frise-bichon/4.jpg',
  'https://images.dog.ceo/breeds/chihuahua/n02085620_8636.jpg',
  'https://images.dog.ceo/breeds/pomeranian/n02112018_1659.jpg',
  'https://images.dog.ceo/breeds/ridgeback-rhodesian/n02087394_7263.jpg',
  'https://images.dog.ceo/breeds/schnauzer-giant/n02097130_3268.jpg',
  'https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg',
  'https://images.dog.ceo/breeds/labrador/n02099712_7142.jpg',
  'https://images.dog.ceo/breeds/havanese/00100trPORTRAIT_00100_BURST20191112123933390_COVER.jpg',
  'https://images.dog.ceo/breeds/mastiff-tibetan/n02108551_5050.jpg',
  'https://images.dog.ceo/breeds/terrier-fox/n02095314_2964.jpg',
  'https://images.dog.ceo/breeds/retriever-golden/n02099601_1743.jpg',
  'https://images.dog.ceo/breeds/bouvier/n02106382_469.jpg',
  'https://images.dog.ceo/breeds/terrier-yorkshire/n02094433_7702.jpg',
  'https://images.dog.ceo/breeds/schipperke/n02104365_6140.jpg',
  'https://images.dog.ceo/breeds/labrador/n02099712_3769.jpg',
  'https://images.dog.ceo/breeds/poodle-standard/n02113799_923.jpg',
  'https://images.dog.ceo/breeds/terrier-american/n02093428_12219.jpg',
  'https://images.dog.ceo/breeds/terrier-dandie/n02096437_3982.jpg',
  'https://images.dog.ceo/breeds/puggle/IMG_192117.jpg',
  'https://images.dog.ceo/breeds/clumber/n02101556_7566.jpg',
  'https://images.dog.ceo/breeds/african/n02116738_7105.jpg',
  'https://images.dog.ceo/breeds/chihuahua/n02085620_949.jpg',
  'https://images.dog.ceo/breeds/pekinese/n02086079_7959.jpg',
  'https://images.dog.ceo/breeds/cotondetulear/IMG_20160830_202631573.jpg',
  'https://images.dog.ceo/breeds/dhole/n02115913_3800.jpg',
  'https://images.dog.ceo/breeds/affenpinscher/n02110627_13665.jpg',
  'https://images.dog.ceo/breeds/husky/n02110185_7879.jpg',
  'https://images.dog.ceo/breeds/pinscher-miniature/n02107312_2571.jpg',
  'https://images.dog.ceo/breeds/pembroke/n02113023_6826.jpg',
  'https://images.dog.ceo/breeds/spaniel-blenheim/n02086646_4220.jpg',
  'https://images.dog.ceo/breeds/cattledog-australian/IMG_4386.jpg',
  'https://images.dog.ceo/breeds/pekinese/n02086079_14748.jpg',
  'https://images.dog.ceo/breeds/schipperke/n02104365_3649.jpg',
  'https://images.dog.ceo/breeds/hound-blood/n02088466_7486.jpg',
  'https://images.dog.ceo/breeds/dingo/n02115641_14495.jpg',
  'https://images.dog.ceo/breeds/dhole/n02115913_4144.jpg',
];

/**
 * Generates the specified number of test users and add them into the database.
 * Does not generate any if number of users has reached that max.
 *
 * @param connection {Connection}
 */
export default async function generateUser({ connection }) {
  console.log('Checking to see if we have any users...');

  const users = await connection.manager.find(User);
  const usersToGenerate = MAX_NUM_OF_TEST_USERS - users.length;
  const promises = [];

  console.log(`Generating ${usersToGenerate} users...`);

  for (let i = 0; i < usersToGenerate; i += 1) {
    const user = new User();
    user.username = faker.internet.userName();
    user.userIcon = PET_ICONS[i];
    console.log(`Generating User: ${user.username}`);
    promises.push(connection.manager.save(user));
  }

  await Promise.all(promises);

  console.log('All done with users!');

  return connection.manager.find(User);
}
