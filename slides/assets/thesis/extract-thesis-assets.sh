#!/usr/bin/env bash
set -euo pipefail

src="/tmp/thesis_pages"
out="$(cd "$(dirname "$0")" && pwd)"

crop() {
  local page="$1"
  local geom="$2"
  local name="$3"
  magick "$src/page-${page}.png" -crop "$geom" +repage "$out/${name}.png"
}

crop 07 780x520+300+960 fig_1_1_deepfake_scene
crop 08 840x590+390+520 fig_1_2_face_swap
crop 10 850x520+345+250 fig_1_3_lmm_timeline
crop 12 880x520+320+1100 fig_1_4_qwen3_omni

crop 16 800x560+250+770 fig_2_1_convolution
crop 18 430x650+450+1050 fig_2_2_transformer
crop 19 950x640+230+390 fig_2_3_wav2vec2
crop 21 780x610+300+760 fig_2_2_mel_spectrogram
crop 22 900x650+250+750 fig_2_3_ecapa_tdnn
crop 23 780x430+320+500 fig_2_4_gan
crop 24 760x650+315+120 fig_2_5_diffusion

crop 27 1110x750+120+290 fig_3_1_specwav_attack
crop 31 900x520+250+360 fig_3_2_loss_curve
crop 32 1130x470+105+1300 table_3_1_librispeech

crop 35 620x690+455+990 fig_4_1_feature_visualization
crop 38 890x560+250+280 fig_4_2_sfenet_architecture
crop 39 610x640+420+1070 fig_4_3_lstm
crop 42 1180x910+90+185 table_4_1_cross_dataset_auc
crop 43 1160x450+100+1170 table_4_2_ablation

crop 46 830x650+300+470 fig_5_1_qwen25_omni
crop 47 760x610+400+1020 fig_5_2_av_lmmdetect_flow
crop 49 970x480+180+230 fig_5_3_two_stage_sft
crop 51 940x530+260+830 fig_5_4_fakeavceleb
crop 52 850x780+250+135 table_5_1_fakeavceleb_results
crop 53 900x620+270+920 fig_5_5_mavos_dd
crop 54 1210x650+55+535 table_5_2_mavos_results
crop 55 1130x520+100+530 table_5_3_ablation

magick \
  \( "$src/page-58.png" -crop 1140x300+95+1380 +repage \) \
  \( "$src/page-59.png" -crop 1140x240+95+125 +repage \) \
  -append "$out/table_6_1_asv_add_value.png"
crop 61 1080x310+120+610 table_6_2_decision
crop 62 450x570+470+1060 fig_6_1_esp32s3
crop 63 820x530+300+420 fig_6_2_stm32f7

echo "Extracted thesis assets to $out"
