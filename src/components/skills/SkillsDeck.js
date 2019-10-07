import { render } from 'react-dom';
import React, { useState } from 'react';
import { useSprings, animated, interpolate } from 'react-spring';
import { useGesture } from 'react-use-gesture';

import './skills.css';

const cards = [
  'https://lh3.googleusercontent.com/TBjYImjDLNcSvDwTATLvzhrlFn5MKypAJvlyZP_ayzLHul83xrXg7fZSYY0jROYe18s_oyyU4NjrEX_lowOR0RUQgd4iLXkNDB0tlPOXZg9HetwKGPS6p0FNZXo0o-n47BgeaLed4hX573kf-VdCeGBQu1yjn6DCFxP4Gx2rrQlzEbdvajS_JN016UmA99fbY3lz6GBUyZO_uzriQgQjF1sn3VdG3fkt-ow4ORn9MBB_a5YsqbCUwfFC-evcEnF84oTAFsuVA3QAf2hclmuiUlFUFQxYQ0dRA1hxMh_aU-pDvyC_fYtAxgRNdyk9JkJKauyg1f3OBcrYT2V0zmfjBGt-O9A_fbgLOqNvT1McLUPh-VH4WqqOCioklgOCDf1duV2UqVWUewjAKIHnJbD4ycLXtKvsj6g7bfpxpDJQuZ_99BjSmKMZqsk0S72jNvvLceniONe4rjXLOpngT0PDh_tDbiSWyohNxQ85gIUm0AYSSFtOD0cpENk6HSSrDHSZbJmYZhXh2TclL0it165gxbvkhkaNIAlAYfW1cFog_jPj8oT0un-g_tOY9MZhiqdMDblbgDaqyPsVT-1Uz1CX-wMfPOVwShT6OJgWbRqOIr85AmNTM9-L2gpRhipTm7EtgA0EqmmSvp9sAGvadI2tVftmrmLSpWQ=w300-h500-no',
  'https://lh3.googleusercontent.com/k87oIgihxQkwEPLF0FLYZJvYAHauOwbiFd4_rt5n3dL-WqPqi3lSxDQAsxgDzg-Uq_ii8iF4hiCA-eJh48UnnmuJ9rjAmfNpDGbfGiOab4dM22cBoa0g65_X8_7rbU5AJ-naNGOvRRBZDCBpPwbZg9LfffUL_AYWjcG7uRmRyXXFvmuuwGc-sr4MjPXvYK9wMBgllbztWp7xXCjVGxD8qCpTjdq39-BVSgb8NM5EaQZ9V1LxGBs2vUlVdgmZH3CvmroZufNOUUFsNXwAdXTv8NKEvy0vq9q43oPQ8ExeHc8iwbd2WyfzeFTcpOV0PyKQL7Wrmb67VYS2g6UV-TYzEY5r8iyP_-FH2NtWUtyrdLaaWR0Reaeg7nx_UXpwVF_YDHA0b36-YV8QkcnJqUefoabeLCZH0Grlhro40smR0Btg63D3rrWwHcQd5nDTK1HqMItjMZxaV2V7soZ8C4kRzSvH1zVH18Y94kCdsithh49tI5dcXzs5PrlxiTTcLL8uqjLvwjgWQY6vpG74iW3_avmw_v8QxPjQhBwgP7IcFth9pB1GVGEpT0uEcd27EIANJV7JMk-T37E92pFKewMzKK0FiV2u7Q-qP2Mf6AM6vbRxAE70CCm9VUfBkHD0N2mS9-nm7xMhd_x_sclLflHO3XlAplh-RC0=w300-h500-no',
  'https://lh3.googleusercontent.com/XEfUDnPNtGodP93dnHhoK_OX7FzZKxNR5ZxS6kXFrpk5k_GcBVW_3wvL-M72oPWKr9Ex_WbpCSMi8-jBN7b_oPGJ3ja4zUDI0MyS9g6VkFTTKerkfMOc3WeAtkKnUw8lNEwpz6FOZDOhBcjjjpnW3zLwMQafGocOXoyPm60bPx9_ENB-k6KjyAnR-S9ileFf74fUHTqEyA2Y5jObpL15GtrgS-AwIYvG1QsbaJxRaU7YF5t5oR5_jOtLRjHexFbqBH-ko5ARaGzBMZydpS1KQGO5dWQts7f7qeZ_HNBfvkxQ4tNnvOYa_Ey7sVD3ENvsc9MjG06GXJeYUaIBNNiV7fU5n_oYTZuTyQ8UrLnFXCmHZP7bbi50ih5W4Fcgx-iHkw4xdcusBWHgx913m8X--lCqQbW8x5uujBBjnMyUNFpWsBeTzG6I2LpUM7POCm7qgqDPu1jp2b9SiXso1u5ISXe6udAq6yFl1sDxrFxC5t-DIcrIg-0_kHq9nsNDzB-WZBE3IRZB0ZpZp4s_orbWOMggOOOd20top8Tn-xoNfuLQ4ZRhDeRX8gkLYzq8xuAFLJKswRV1gm9LawG7T5aHAT17wyvfISVREIrFfJWl3KLhRF1vhh3qMIdSowxJC_myE9UGoxfLSLy0qTHBxj99Ixz8Bxwn7uk=w300-h500-no',
  'https://lh3.googleusercontent.com/qSbQ_U2PhDZIOIuMLRPcXqQyteZzzItU_O_rQTrzQZThfzC1Taxd7LGZWbtzAQFU234Izjh57rqxNnCObTyhk83LQdRyysmIQjLypc8nqg2mizfKsAVOSu2fxDGVcWSz8Nm1QaEZT9i9wgfdLfTxO3t3Vq8AcTutteXor_1Fv2UlJzy-mCC99mrFy46yKXf1bEefw3CSKG11dFI9u7cqhWbjfcZkjx5OLkcbqYLRUSYTqOqoj5OALTbBX2WSxIAoJQVy3-Ue8AVwqh_arcUccNFJyiSr0J_aPqZq2fEiPOAgQL2Dw6XwBoMqtudrmDjVAWM8ghrIQ6n7JxOKftNASB1XaFIYXtffWU52euFXrBrQdY16L_vKyQHR1txmxJgr9hq3GWxNEbZE9bzm0fhhfr7LYAJlVjrPb60CxTlQg503xUPv--Y0lJQipzPAGaBQyms7B3o_3rxTM9MfrStbgVVU92x-htKJMinHGsbEXcrmCAi_AlyiwTRVMujc-rSqxQCvBMSCyFcW4vbomcyTD6GqJm8Bn4ewVQxrm0uxrri8GrJWNXy1y27WNPGrZj3VxOGvF-YjlhOHvuofBeQK2Djka4phH_8ySLkjWmTxNzEq461r2zN_GLZiBUHL31CaL7zyHGboZol9k04yZtXR4byAJXDncko=w300-h500-no',
  'https://lh3.googleusercontent.com/qg0yJVcGZDBV1RcAHJPVrFDZ6R26RLie5dvH-94uJk0tyKnTBo_7ObQrC4r7YbyONXn3jglboY5qTkdWekiXVldU8pXbvrgyZgwgy8eRqgqviXme8yuAEJpywcim8Z5-wAsWuMI_aQ30LWZgYvv2hCg3GZstFnEeDFUtuKViC4t3nqHlzB5nAGcs5IvRkkxxzl-p9vyRoCbyNCagYj5XfRWyS3c6Bqv1328U14W4xzQsW37Fv2NPlICAp5U99bDToNcxUkj8H8t5qVA7C95RYkH-RwqXr6AShsfQx1asU4h9L7_M0yrRtTYvWsQz5GHv79u11muIymhn1Ap11rX3NJ1TrtW5ti6i2c89_wjmG4P5XQC-p084ugdg44AtstSCWpYF_rIQf7kPaIGArLF9uPwCSG95DuBQ3doLzEAmIybfngRivrN8-GHFNJvBXTl8Dzs__b-MvU-bsZl59ei9cEVxMpvilvLWts1N2LcBqhmneeVP1eRjXoPdlE8argxpoxXa-6xfjxrbgPeJlJTALGPFzhElo84wKpyUKaTbascIPUwu4KbebKi6o_A0bYd_J5pxS7-9yEgTaCSeaiM_8yVjUL8AGMv0rVVRf88_PzV5aDowwIPSrv39EJlBI32t96Wp6jyGiBqLtzvJXZDi5sqVM0lsbWw=w300-h500-no',
  'https://lh3.googleusercontent.com/lZP0MkEp9chpTkxuJGCprEjtkfg5FE6h3nbyLc-RCiRM7rF_19tDYUwz73eB1QK7BuPQFRMCjHSMEUBucaHRW63l_UyH5U7GhXIeosceab1ydwGbFkospILn9Igz1mfV_oxNHDcydPdMMMs0DvMIRsZR7Lqpcbxm3tRS5I2fsVggqc9Tu6HCn9P2cZ-8JlO5oDD4kZLsM0rtNy4u_dbj9m6MsMz-puDMyfcKbPfLLpHeGuxVxeiYNS5fWyWJmooPfSvLTqWt5ALh5QdAPhAZLmlPvzupPWtOENrE3-Ezqxr9dNZ6EPVbLEDDRDFVK9Ahxt9L0QrdkmeEOteGKbiPBBtUq9kZj6CCj3o5N4bLrHluXlT1yVaP95T4Adh9aAlD41SG1DfcsqSz6J57d_VS-JDXQ-ZiSlvDXF_d7NZtWqXYVGaRcgpod7qi4OfAZJCnyUX20atPd3rDxsUGoRiRe5Di4cUymqjL3hlB-DrPEnlxzK_yMFjvKGD8bYpi-dKRzzHDw3Gsw93FzVGayTdkELX1VcM4pp3XygQeJYJQqt5yKkPEpElmIPDmioGgInNr1ydesl5tBdVNyJokW8_CuibUhCL4iactxPBRG8MV60I8_hzCiQpXDQbV4BF8z3XxRQP3TJfXpBMzuIEYUoNf9yVw_c5nc0Q=w300-h500-no',
  'https://lh3.googleusercontent.com/w8fVG9hwuL6iS2Y0D7wTZmWdfBvnZExnGVqLU82QW76y1-d8Zg1I0mxyuIKDmNd_3q_OfEBESRIynMNq6pST2yvTAO9-8uzRNTBTEXrRHrL6ub8GDjxdSCxspcQXp6gGJX2jllN2p23IvdkUOzgYaG4dk3KFJZCqwz9bE1xl5oWjkldbVxTDKyEznPcytAG6rkIe7e8pU83X281YLKU0IjNkAvseA8DWhOl_1BRH4OozCembCh5LhS91GqRkhFiAKzLFDsWMG-pk4PTkQnvTlDWHjID4SLah6jdgcbhbI6CQngbx07GNmOF6pq5s5TzociIVtxShU7eO4bUB50tio52tt9X7IrJviX1SqHhtNMy_T1vAp96kKKyr9lU-D3KUJ2Kc-qLFkFba8WTXJIvIAOqkUwvCmiToYB_YJpSEJ3QxbMPPFNL1D8pt1nR1ZJXDdh4iyNglZYteLG_J9ar3EyX8jA4ZXMb1hbScjmrtmfpcOaLUATbbLgwr0lPWtILgrNOudXuFUx0myEow34zxx6w15y6vnWMKiC5Wv0Mb1TUDPtp4mY_nK6zfMPehcS-uEsOX1xTAZzmWNrDHI4ODmkNef4fuztKEUGVqbvmQGDah1E8q8KaC1YgqS_z7BgpetCzAr9aV035pvwBDnV-yNFwV17lfli8=w300-h500-no',
  'https://lh3.googleusercontent.com/kw_puJTuCBsfGgPSUUWYht3zpEDwxx4xmp-YfDoXf5WrRLxaXl3HHGiXJkXGq4Kw9wHmqUSvlaj5ML84QVrWrqYUo6mKE8qb3V7RE96MtyOXkUUiNIqBlVC1LZrEdHXJHNuZH1Gl5Pufjl-iQjeiq-NKzHSP4zdLuroyUw3fv2e7AnlxRklsU4Y6L1CzUI_tJ63_E-_Rx2_GspGRjiCGQdQwA_ll6wsfxXHBBsN5QDVcBEGm3V_602EUJBDaXPn4ub5uX5t_nws08OV28NVHpxDdsjoK2_Rgfy35kBLGksNcua6uGAY6Xd13zmrS_kboYk2FOx7mF16ayrFXJsZ3RiU6VAdyG6nEelllqXlk6m-MwQ74z53sqfWfjily-EAHy5U-ttkH-4CaO8LXbHqPCEb8xSD9bbZvgIhWGDDp2mUuhlugtBqeHt8z1zEAcBTePxs1zqW_yry9ZsXpRLfEHwlBXDm_3RWFtOJvzOEnd7Uh1Uoj46jxNE90t27yduKOVXuOhV4zb6HQTZuZNMIx6b0vpvZf0H_7ijnM_t0XMWUXnN0fxDuySqcfyEo4ws8Qe8VGnZutY6HK6bi9VV5nb6XEoY6AOUb2m7FNnY3jued-WdTT2o0sG8fS_99jmosiQhU7PlQ5cPcLMlqXIYOc0ukqFR0eoXs=w300-h500-no',
  'https://lh3.googleusercontent.com/E-F4gimqwxNfzARmYa6lb98geWHPrpS5oQ66A7Xjf2yF2kTwzBJgoGyfWkQkBcRc6od3et08uUy-3mXJth3HmcpadXveTag3zq3U2EYaTcRIhWQS5VRdkjKBJr2B2w_8KkWn_8to5QT5P6kV3tOJYOaTo3B9NjM8tEM5Eb7RnRzfzmqUR7teYGsS5exUMwgFcxUBM6LdKyqY5qB0fBgBq9R-XmXQ2j1EpJ801BO2Vcqtpnd47t1j2aZ2P4Oj81F5kdT1cI3okz8f1C3zCZeNuk4vvlsGXmxe7NDQuPmKVcwMIUqZDJ6w_mDBTShkTK6PvXIt_WTF25ZzFOVv9H9odrk5W-xt_u7lDfscdu-1N3k_vlksY3BQSbr4snhhkl1pMmUziHiC_fTg4dHBZVSNkAYwVcRduAz1HcefBhS2wEpxn7QfdxO8FsUrEOIN5SgfUfMwdI0jRZ5KyuFcF9BFhoGGiNopmagTgHEoDdLYaOYolx98g1WaivFL-JPQGBSftIPT3sjm_RQqdOjT8smQnoQdg0IbvMfZkOlbqxmgE9OjR6SpVAfm6gvyrMvtrs3cRTmHOqFvf39VkZVUL_yjE2MFioJfbOK3rL3AtJbOEMsUvJv4GnubfpQIGnH3n_dHrzDMXaVwao6sYq4tfsc8L1MaHzssAZ0=w300-h500-no'
];

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = i => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100
});
const from = i => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) =>
  `perspective(1500px) rotateX(30deg) rotateY(${r /
    10}deg) rotateZ(${r}deg) scale(${s})`;

export default function SkillsDeck() {
  const [gone] = useState(() => new Set()); // The set flags all the cards that are flicked out
  const [props, set] = useSprings(cards.length, i => ({
    ...to(i),
    from: from(i)
  })); // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useGesture(
    ({
      args: [index],
      down,
      delta: [xDelta],
      distance,
      direction: [xDir],
      velocity
    }) => {
      const trigger = velocity > 0.2; // If you flick hard enough it should trigger the card to fly out
      const dir = xDir < 0 ? -1 : 1; // Direction should either point left or right
      if (!down && trigger) gone.add(index); // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
      set(i => {
        if (index !== i) return; // We're only interested in changing spring-data for the current spring
        const isGone = gone.has(index);
        const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0; // When a card is gone it flys out left or right, otherwise goes back to zero
        const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0); // How much the card tilts, flicking it harder makes it rotate faster
        const scale = down ? 1.1 : 1; // Active cards lift up a bit
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 }
        };
      });
      if (!down && gone.size === cards.length)
        setTimeout(() => gone.clear() || set(i => to(i)), 600);
    }
  );
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return props.map(({ x, y, rot, scale }, i) => (
    <animated.div
      className='Deck'
      key={i}
      style={{
        transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`)
      }}>
      {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
      <animated.div
        className='CardImage'
        {...bind(i)}
        style={{
          transform: interpolate([rot, scale], trans),
          backgroundImage: `url(${cards[i]})`
        }}
      />
    </animated.div>
  ));
}

render(<SkillsDeck />, document.getElementById('root'));
