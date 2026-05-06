'use strict';

/* distro data */
const DISTROS = [
  {
    name: 'Ubuntu',
    website: 'https://ubuntu.com/',
    img:  '/icons/ubuntu.webp',
    about: 'Ubuntu is one of the most widely used Linux distributions, developed by Canonical and built on Debian. It offers a polished GNOME desktop, excellent hardware compatibility, and predictable Long-Term Support releases with five years of updates. With massive community support and a huge software ecosystem, it’s a reliable choice for beginners, developers, and servers alike.',
    links: [
      { url: 'https://releases.ubuntu.com/resolute/ubuntu-26.04-desktop-amd64.iso',                                               architecture: 'x64 (recommended)', type: 'Desktop', checksums: ['https://releases.ubuntu.com/resolute/SHA256SUMS', 'https://releases.ubuntu.com/resolute/SHA256SUMS.gpg'] },
      { url: 'https://releases.ubuntu.com/resolute/ubuntu-26.04-live-server-amd64.iso',                                           architecture: 'x64 (recommended)', type: 'Server',  checksums: ['https://releases.ubuntu.com/resolute/SHA256SUMS', 'https://releases.ubuntu.com/resolute/SHA256SUMS.gpg'] },
      { url: 'https://cdimages.ubuntu.com/ubuntu/releases/resolute/release/ubuntu-26.04-desktop-arm64.iso',                       architecture: 'ARM64',             type: 'Desktop', checksums: ['https://cdimages.ubuntu.com/ubuntu/releases/resolute/release/SHA256SUMS', 'https://cdimages.ubuntu.com/ubuntu/releases/resolute/release/SHA256SUMS.gpg'] },
      { url: 'https://cdimages.ubuntu.com/ubuntu/releases/resolute/release/ubuntu-26.04-live-server-arm64.iso',                   architecture: 'ARM64',             type: 'Server',  checksums: ['https://cdimages.ubuntu.com/ubuntu/releases/resolute/release/SHA256SUMS', 'https://cdimages.ubuntu.com/ubuntu/releases/resolute/release/SHA256SUMS.gpg'] },
      { url: 'https://cdimages.ubuntu.com/ubuntu/releases/resolute/release/ubuntu-26.04-preinstalled-desktop-arm64+raspi.img.xz', architecture: 'Raspberry Pi',      type: 'Desktop', checksums: ['https://cdimages.ubuntu.com/ubuntu/releases/resolute/release/SHA256SUMS', 'https://cdimages.ubuntu.com/ubuntu/releases/resolute/release/SHA256SUMS.gpg'] },
      { url: 'https://cdimages.ubuntu.com/ubuntu/releases/resolute/release/ubuntu-26.04-preinstalled-server-arm64+raspi.img.xz',  architecture: 'Raspberry Pi',      type: 'Server',  checksums: ['https://cdimages.ubuntu.com/ubuntu/releases/resolute/release/SHA256SUMS', 'https://cdimages.ubuntu.com/ubuntu/releases/resolute/release/SHA256SUMS.gpg'] },
    ],
  },
  {
    name: 'Linux Mint',
    website: 'https://www.linuxmint.com/',
    img:  '/icons/linuxmint.webp',
    about: 'Linux Mint is a community-driven distribution based on Ubuntu, best known for its Cinnamon desktop and smooth out-of-the-box experience. It focuses on stability, ease of use, and a familiar layout that feels comfortable for users coming from Windows. With multimedia support included and a conservative update approach, it’s one of the easiest ways to get started with Linux.',
    links: [
      { url: 'https://pub.linuxmint.io/stable/22.3/linuxmint-22.3-cinnamon-64bit.iso', architecture: 'x64', desktop: 'Cinnamon (recommended)', checksums: ['https://pub.linuxmint.io/stable/22.3/sha256sum.txt', 'https://pub.linuxmint.io/stable/22.3/sha256sum.txt.gpg'] },
      { url: 'https://pub.linuxmint.io/stable/22.3/linuxmint-22.3-xfce-64bit.iso',     architecture: 'x64', desktop: 'Xfce',                   checksums: ['https://pub.linuxmint.io/stable/22.3/sha256sum.txt', 'https://pub.linuxmint.io/stable/22.3/sha256sum.txt.gpg'] },
      { url: 'https://pub.linuxmint.io/stable/22.3/linuxmint-22.3-mate-64bit.iso',     architecture: 'x64', desktop: 'MATE',                   checksums: ['https://pub.linuxmint.io/stable/22.3/sha256sum.txt', 'https://pub.linuxmint.io/stable/22.3/sha256sum.txt.gpg'] },
    ],
  },
  {
    name: 'Debian',
    website: 'https://www.debian.org/',
    img:  '/icons/debian.webp',
    about: 'Debian is one of the oldest and most influential Linux distributions, forming the base for countless others. It prioritises stability, reliability, and free software principles, with a massive repository of packages available. While not always the most cutting-edge, it’s a rock-solid choice for servers and users who value consistency over novelty.',
    links: [
      { url: 'https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/debian-live-13.4.0-amd64-gnome.iso',    architecture: 'x64 (recommended)', desktop: 'GNOME (recommended)', checksums: ['https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/SHA256SUMS', 'https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/SHA256SUMS.sign', 'https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/SHA512SUMS', 'https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/SHA512SUMS.sign'] },
      { url: 'https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/debian-live-13.4.0-amd64-kde.iso',      architecture: 'x64 (recommended)', desktop: 'KDE Plasma',          checksums: ['https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/SHA256SUMS', 'https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/SHA256SUMS.sign', 'https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/SHA512SUMS', 'https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/SHA512SUMS.sign'] },
      { url: 'https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/debian-live-13.4.0-amd64-cinnamon.iso', architecture: 'x64 (recommended)', desktop: 'Cinnamon',            checksums: ['https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/SHA256SUMS', 'https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/SHA256SUMS.sign', 'https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/SHA512SUMS', 'https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/SHA512SUMS.sign'] },
      { url: 'https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/debian-live-13.4.0-amd64-lxde.iso',     architecture: 'x64 (recommended)', desktop: 'LXDE',                checksums: ['https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/SHA256SUMS', 'https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/SHA256SUMS.sign', 'https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/SHA512SUMS', 'https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/SHA512SUMS.sign'] },
      { url: 'https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/debian-live-13.4.0-amd64-lxqt.iso',     architecture: 'x64 (recommended)', desktop: 'LXQt',                checksums: ['https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/SHA256SUMS', 'https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/SHA256SUMS.sign', 'https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/SHA512SUMS', 'https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/SHA512SUMS.sign'] },
      { url: 'https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/debian-live-13.4.0-amd64-mate.iso',     architecture: 'x64 (recommended)', desktop: 'MATE',                checksums: ['https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/SHA256SUMS', 'https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/SHA256SUMS.sign', 'https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/SHA512SUMS', 'https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/SHA512SUMS.sign'] },
      { url: 'https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/debian-live-13.4.0-amd64-xfce.iso',     architecture: 'x64 (recommended)', desktop: 'Xfce',                checksums: ['https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/SHA256SUMS', 'https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/SHA256SUMS.sign', 'https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/SHA512SUMS', 'https://cdimage.debian.org/debian-cd/current-live/amd64/iso-hybrid/SHA512SUMS.sign'] },
      { url: 'https://cdimage.debian.org/debian-cd/current/amd64/iso-dvd/debian-13.4.0-amd64-DVD-1.iso',                 architecture: 'x64 (recommended)', desktop: 'None',                checksums: ['https://cdimage.debian.org/debian-cd/current/amd64/iso-dvd/SHA256SUMS', 'https://cdimage.debian.org/debian-cd/current/amd64/iso-dvd/SHA256SUMS.sign', 'https://cdimage.debian.org/debian-cd/current/amd64/iso-dvd/SHA512SUMS', 'https://cdimage.debian.org/debian-cd/current/amd64/iso-dvd/SHA512SUMS.sign'] },
      { url: 'https://cdimage.debian.org/debian-cd/current/arm64/iso-dvd/debian-13.4.0-arm64-DVD-1.iso',                 architecture: 'ARM64',             desktop: 'None',                checksums: ['https://cdimage.debian.org/debian-cd/current/arm64/iso-dvd/SHA256SUMS', 'https://cdimage.debian.org/debian-cd/current/arm64/iso-dvd/SHA256SUMS.sign', 'https://cdimage.debian.org/debian-cd/current/arm64/iso-dvd/SHA512SUMS', 'https://cdimage.debian.org/debian-cd/current/arm64/iso-dvd/SHA512SUMS.sign'] },
      { url: 'https://cloud.debian.org/images/cloud/trixie/daily/latest/debian-13-raspi-arm64-daily.tar.xz',             architecture: 'Raspberry Pi',      desktop: 'None',                checksums: ['https://cloud.debian.org/images/cloud/trixie/daily/latest/debian-13-raspi-arm64-daily.json'] },
    ],
  },
  {
    name: 'Fedora',
    website: 'https://fedoraproject.org/',
    img:  '/icons/fedora.webp',
    about: 'Fedora is a modern, forward-thinking distribution sponsored by Red Hat and focused on innovation. It frequently introduces the latest technologies first, including new kernels, desktop features, and development tools. Despite being cutting-edge, it remains stable enough for daily use and is especially popular among developers and enthusiasts.',
    links: [
      { url: 'https://download.fedoraproject.org/pub/fedora/linux/releases/44/Workstation/x86_64/iso/Fedora-Workstation-Live-44-1.7.x86_64.iso',         architecture: 'x64 (recommended)', type: 'Workstation (recommended)', checksums: ['https://dl.fedoraproject.org/pub/fedora/linux/releases/44/Workstation/x86_64/iso/Fedora-Workstation-44-1.7-x86_64-CHECKSUM'] },
      { url: 'https://download.fedoraproject.org/pub/fedora/linux/releases/44/Workstation/aarch64/iso/Fedora-Workstation-Live-44-1.7.aarch64.iso',       architecture: 'ARM64',             type: 'Workstation (recommended)', checksums: ['https://dl.fedoraproject.org/pub/fedora/linux/releases/44/Workstation/aarch64/iso/Fedora-Workstation-44-1.7-aarch64-CHECKSUM'] },
      { url: 'https://download.fedoraproject.org/pub/fedora/linux/releases/44/Workstation/aarch64/images/Fedora-Workstation-Disk-44-1.7.aarch64.raw.xz', architecture: 'Raspberry Pi',      type: 'Workstation (recommended)', checksums: ['https://dl.fedoraproject.org/pub/fedora/linux/releases/44/Workstation/aarch64/images/Fedora-Workstation-44-1.7-aarch64-CHECKSUM'] },
      { url: 'https://download.fedoraproject.org/pub/fedora/linux/releases/44/KDE/x86_64/iso/Fedora-KDE-Desktop-Live-44-1.7.x86_64.iso',                 architecture: 'x64 (recommended)', type: 'KDE Plasma',                checksums: ['https://dl.fedoraproject.org/pub/fedora/linux/releases/44/KDE/x86_64/iso/Fedora-KDE-44-1.7-x86_64-CHECKSUM'] },
      { url: 'https://download.fedoraproject.org/pub/fedora/linux/releases/44/KDE/aarch64/iso/Fedora-KDE-Desktop-Live-44-1.7.aarch64.iso',               architecture: 'ARM64',             type: 'KDE Plasma',                checksums: ['https://dl.fedoraproject.org/pub/fedora/linux/releases/44/KDE/aarch64/iso/Fedora-KDE-44-1.7-aarch64-CHECKSUM'] },
      { url: 'https://download.fedoraproject.org/pub/fedora/linux/releases/44/KDE/aarch64/images/Fedora-KDE-Desktop-Disk-44-1.7.aarch64.raw.xz',         architecture: 'Raspberry Pi',      type: 'KDE Plasma',                checksums: ['https://dl.fedoraproject.org/pub/fedora/linux/releases/44/KDE/aarch64/images/Fedora-KDE-44-1.7-aarch64-CHECKSUM'] },
    ],
  },
  {
    name: 'Pop!_OS',
    website: 'https://system76.com/pop/',
    img:  '/icons/popos.webp',
    about: 'Pop!_OS is developed by System76 and designed with productivity in mind, especially for developers and creators. It features a refined desktop experience with built-in tiling window management and excellent GPU support. With a clean interface and thoughtful defaults, it’s ideal for users who want efficiency without spending hours tweaking.',
    links: [
      { url: 'https://iso.pop-os.org/24.04/amd64/generic/24/pop-os_24.04_amd64_generic_24.iso', architecture: 'x64 (recommended)', type: 'Generic (recommended)', checksums: [] },
      { url: 'https://iso.pop-os.org/24.04/amd64/nvidia/24/pop-os_24.04_amd64_nvidia_24.iso',   architecture: 'x64 (recommended)', type: 'NVIDIA',                checksums: [] },
      { url: 'https://iso.pop-os.org/24.04/arm64/generic/3/pop-os_24.04_arm64_generic_3.iso',   architecture: 'ARM64',             type: 'Generic (recommended)', checksums: [] },
      { url: 'https://iso.pop-os.org/24.04/arm64/nvidia/3/pop-os_24.04_arm64_nvidia_3.iso',     architecture: 'ARM64',             type: 'NVIDIA',                checksums: [] },
    ],
  },
  {
    name: 'Manjaro',
    website: 'https://manjaro.org/',
    img:  '/icons/manjaro.webp',
    about: 'Manjaro is a user-friendly distribution based on Arch Linux, designed to make Arch more accessible. It offers a rolling-release model with curated updates, preconfigured desktops, and excellent hardware detection. Combined with access to the AUR, it provides a powerful yet approachable system for users who want newer software without the full Arch setup headache.',
    links: [
      { url: 'https://download.manjaro.org/kde/26.0.4/manjaro-kde-26.0.4-260327-linux618.iso',                              architecture: 'x64 (recommended)', desktop: 'KDE Plasma (recommended)', type: 'Full (recommended)', checksums: ['https://download.manjaro.org/kde/26.0.4/manjaro-kde-26.0.4-260327-linux618.iso.sha256'] },
      { url: 'https://download.manjaro.org/kde/26.0.4/manjaro-kde-26.0.4-minimal-260327-linux618.iso',                      architecture: 'x64 (recommended)', desktop: 'KDE Plasma (recommended)', type: 'Minimal',            checksums: ['https://download.manjaro.org/kde/26.0.4/manjaro-kde-26.0.4-minimal-260327-linux618.iso.sha256'] },
      { url: 'https://download.manjaro.org/xfce/26.0.4/manjaro-xfce-26.0.4-260327-linux618.iso',                            architecture: 'x64 (recommended)', desktop: 'Xfce',                     type: 'Full (recommended)', checksums: ['https://download.manjaro.org/xfce/26.0.4/manjaro-xfce-26.0.4-260327-linux618.iso.sha256'] },
      { url: 'https://download.manjaro.org/xfce/26.0.4/manjaro-xfce-26.0.4-minimal-260327-linux618.iso',                    architecture: 'x64 (recommended)', desktop: 'Xfce',                     type: 'Minimal',            checksums: ['https://download.manjaro.org/xfce/26.0.4/manjaro-xfce-26.0.4-minimal-260327-linux618.iso.sha256'] },
      { url: 'https://download.manjaro.org/gnome/26.0.4/manjaro-gnome-26.0.4-260327-linux618.iso',                          architecture: 'x64 (recommended)', desktop: 'GNOME',                    type: 'Full (recommended)', checksums: ['https://download.manjaro.org/gnome/26.0.4/manjaro-gnome-26.0.4-260327-linux618.iso.sha256'] },
      { url: 'https://download.manjaro.org/gnome/26.0.4/manjaro-gnome-26.0.4-minimal-260327-linux618.iso',                  architecture: 'x64 (recommended)', desktop: 'GNOME',                    type: 'Minimal',            checksums: ['https://download.manjaro.org/gnome/26.0.4/manjaro-gnome-26.0.4-minimal-260327-linux618.iso.sha256'] },
      { url: 'https://github.com/manjaro-arm/rpi4-images/releases/download/23.02/Manjaro-ARM-gnome-rpi4-23.02.img.xz',      architecture: 'Raspberry Pi',      type: 'GNOME',                       checksums: ['https://github.com/manjaro-arm/rpi4-images/releases/download/23.02/Manjaro-ARM-gnome-rpi4-23.02.img.xz.sha1'] },
      { url: 'https://github.com/manjaro-arm/rpi4-images/releases/download/23.02/Manjaro-ARM-kde-plasma-rpi4-23.02.img.xz', architecture: 'Raspberry Pi',      type: 'KDE Plasma (recommended)',    checksums: ['https://github.com/manjaro-arm/rpi4-images/releases/download/23.02/Manjaro-ARM-kde-plasma-rpi4-23.02.img.xz.sha1'] },
      { url: 'https://github.com/manjaro-arm/rpi4-images/releases/download/23.02/Manjaro-ARM-mate-rpi4-23.02.img.xz',       architecture: 'Raspberry Pi',      type: 'MATE',                        checksums: ['https://github.com/manjaro-arm/rpi4-images/releases/download/23.02/Manjaro-ARM-mate-rpi4-23.02.img.xz.sha1'] },
      { url: 'https://github.com/manjaro-arm/rpi4-images/releases/download/23.02/Manjaro-ARM-minimal-rpi4-23.02.img.xz',    architecture: 'Raspberry Pi',      type: 'Minimal',                     checksums: ['https://github.com/manjaro-arm/rpi4-images/releases/download/23.02/Manjaro-ARM-minimal-rpi4-23.02.img.xz.sha1'] },
      { url: 'https://github.com/manjaro-arm/rpi4-images/releases/download/23.02/Manjaro-ARM-sway-rpi4-23.02.img.xz',       architecture: 'Raspberry Pi',      type: 'Sway WM',                     checksums: ['https://github.com/manjaro-arm/rpi4-images/releases/download/23.02/Manjaro-ARM-sway-rpi4-23.02.img.xz.sha1'] },
      { url: 'https://github.com/manjaro-arm/rpi4-images/releases/download/23.02/Manjaro-ARM-xfce-rpi4-23.02.img.xz',       architecture: 'Raspberry Pi',      type: 'Xfce',                        checksums: ['https://github.com/manjaro-arm/rpi4-images/releases/download/23.02/Manjaro-ARM-xfce-rpi4-23.02.img.xz.sha1'] },
    ],
  },
  {
    name: 'Zorin OS',
    website: 'https://zorin.com/os/',
    img:  '/icons/zorinos.webp',
    about: 'Zorin OS is designed to make the transition from Windows or macOS to Linux as smooth as possible. Its interface can mimic familiar layouts, and it includes tools to run Windows applications with minimal hassle. With a strong focus on simplicity and design, it’s one of the most beginner-friendly distributions available.',
    links: [
      { url: 'https://mirrors.edge.kernel.org/zorinos-isos/18/Zorin-OS-18.1-Core-64-bit.iso',      architecture: 'x64', type: 'Core (recommended)', checksums: ['https://help.zorin.com/docs/getting-started/check-the-integrity-of-your-copy-of-zorin-os/#correct-sha256-checksums'] },
      { url: 'https://mirrors.edge.kernel.org/zorinos-isos/18/Zorin-OS-18.1-Education-64-bit.iso', architecture: 'x64', type: 'Education',          checksums: ['https://help.zorin.com/docs/getting-started/check-the-integrity-of-your-copy-of-zorin-os/#correct-sha256-checksums'] },
      { url: 'https://mirrors.edge.kernel.org/zorinos-isos/18/Zorin-OS-18.1-Lite-64-bit.iso',      architecture: 'x64', type: 'Lite',               checksums: ['https://help.zorin.com/docs/getting-started/check-the-integrity-of-your-copy-of-zorin-os/#correct-sha256-checksums'] },
    ],
  },
  {
    name: 'Arch Linux',
    website: 'https://archlinux.org/',
    img:  '/icons/archlinux.webp',
    about: 'Arch Linux is a minimalist, rolling-release distribution built around simplicity and user control. It provides a barebones base system that users build up manually, allowing complete customisation. Known for its documentation and the AUR, it’s best suited for experienced users who want full control over their system.',
    links: [
      { url: 'https://geo.mirror.pkgbuild.com/iso/latest/archlinux-x86_64.iso', architecture: 'x64', checksums: ['https://archlinux.org/iso/2026.05.01/sha256sums.txt', 'https://archlinux.org/iso/2026.05.01/b2sums.txt'] },
    ],
  },
  {
    name: 'Raspberry Pi OS',
    website: 'https://www.raspberrypi.com/software/operating-systems/',
    img:  '/icons/raspbian.webp',
    about: 'Raspberry Pi OS is the official operating system for Raspberry Pi devices, based on Debian and optimised for ARM hardware. It includes a lightweight desktop and a wide range of educational and development tools, especially for Python and GPIO. It’s the go-to choice for hobbyists, students, and anyone working with Raspberry Pi projects.',
    links: [
      { url: 'https://downloads.raspberrypi.com/raspios_arm64/images/raspios_arm64-2026-04-21/2026-04-21-raspios-trixie-arm64.img.xz',                architecture: 'Raspberry Pi 64-bit (recommended)', type: 'Standard (recommended)', checksums: ['https://downloads.raspberrypi.com/raspios_arm64/images/raspios_arm64-2026-04-21/2026-04-21-raspios-trixie-arm64.img.xz.sha256', ''] },
      { url: 'https://downloads.raspberrypi.com/raspios_full_arm64/images/raspios_full_arm64-2026-04-21/2026-04-21-raspios-trixie-arm64-full.img.xz', architecture: 'Raspberry Pi 64-bit (recommended)', type: 'Full',                   checksums: ['https://downloads.raspberrypi.com/raspios_full_arm64/images/raspios_full_arm64-2026-04-21/2026-04-21-raspios-trixie-arm64-full.img.xz.sha256'] },
      { url: 'https://downloads.raspberrypi.com/raspios_lite_arm64/images/raspios_lite_arm64-2026-04-21/2026-04-21-raspios-trixie-arm64-lite.img.xz', architecture: 'Raspberry Pi 64-bit (recommended)', type: 'Lite',                   checksums: ['https://downloads.raspberrypi.com/raspios_lite_arm64/images/raspios_lite_arm64-2026-04-21/2026-04-21-raspios-trixie-arm64-lite.img.xz.sha256'] },
      { url: 'https://downloads.raspberrypi.com/raspios_armhf/images/raspios_armhf-2026-04-21/2026-04-21-raspios-trixie-armhf.img.xz',                architecture: 'Raspberry Pi 32-bit',               type: 'Standard (recommended)', checksums: ['https://downloads.raspberrypi.com/raspios_armhf/images/raspios_armhf-2026-04-21/2026-04-21-raspios-trixie-armhf.img.xz.sha256'] },
      { url: 'https://downloads.raspberrypi.com/raspios_full_armhf/images/raspios_full_armhf-2026-04-21/2026-04-21-raspios-trixie-armhf-full.img.xz', architecture: 'Raspberry Pi 32-bit',               type: 'Full',                   checksums: ['https://downloads.raspberrypi.com/raspios_full_armhf/images/raspios_full_armhf-2026-04-21/2026-04-21-raspios-trixie-armhf-full.img.xz.sha256'] },
      { url: 'https://downloads.raspberrypi.com/raspios_lite_armhf/images/raspios_lite_armhf-2026-04-21/2026-04-21-raspios-trixie-armhf-lite.img.xz', architecture: 'Raspberry Pi 32-bit',               type: 'Lite',                   checksums: ['https://downloads.raspberrypi.com/raspios_lite_armhf/images/raspios_lite_armhf-2026-04-21/2026-04-21-raspios-trixie-armhf-lite.img.xz.sha256'] },
    ],
  },
  {
    name: 'Kubuntu',
    website: 'https://kubuntu.org/',
    img:  '/icons/kubuntu.webp',
    about: 'Kubuntu is an official Ubuntu flavour featuring the KDE Plasma desktop, offering a highly customisable and feature-rich experience. It combines Ubuntu’s stability and software ecosystem with Plasma’s modern interface and flexibility. Ideal for users who want a polished system that they can tweak to their heart’s content without building everything from scratch.',
    links: [
      { url: 'https://cdimages.ubuntu.com/kubuntu/releases/resolute/release/kubuntu-26.04-desktop-amd64.iso', architecture: 'x64', checksums: ['https://cdimages.ubuntu.com/kubuntu/releases/resolute/release/SHA256SUMS', 'https://cdimages.ubuntu.com/kubuntu/releases/resolute/release/SHA256SUMS.gpg'] },
    ],
  },
  {
    name: 'Xubuntu',
    website: 'https://xubuntu.org/',
    img:  '/icons/xubuntu.webp',
    about: 'Xubuntu is a lightweight Ubuntu flavour that uses the Xfce desktop, focusing on speed, simplicity, and efficiency. It provides a clean and traditional interface while keeping resource usage low, making it suitable for older hardware or users who prefer a minimal setup. Despite its lightweight nature, it still benefits from Ubuntu’s extensive repositories and support.',
    links: [
      { url: 'https://cdimages.ubuntu.com/xubuntu/releases/resolute/release/xubuntu-26.04-desktop-amd64.iso', architecture: 'x64', checksums: ['https://cdimages.ubuntu.com/xubuntu/releases/resolute/release/SHA256SUMS', 'https://cdimages.ubuntu.com/xubuntu/releases/resolute/release/SHA256SUMS.gpg'] },
    ],
  },
  {
    name: 'Lubuntu',
    website: 'https://lubuntu.me/',
    img:  '/icons/lubuntu.webp',
    about: 'Lubuntu is a fast and lightweight Ubuntu flavour built around the LXQt desktop environment. Designed for low-resource systems, it delivers a simple, responsive experience without unnecessary extras. It’s a great choice for older machines or users who want a minimal, no-frills desktop that still retains access to Ubuntu’s ecosystem.',
    links: [
      { url: 'https://cdimages.ubuntu.com/lubuntu/releases/resolute/release/lubuntu-26.04-desktop-amd64.iso', architecture: 'x64', checksums: ['https://cdimages.ubuntu.com/lubuntu/releases/resolute/release/SHA256SUMS', 'https://cdimages.ubuntu.com/lubuntu/releases/resolute/release/SHA256SUMS.gpg'] },
    ],
  },
  {
    name: 'EndeavourOS',
    website: 'https://endeavouros.com/',
    img:  '/icons/endeavouros.webp',
    about: 'EndeavourOS is a lightweight Arch-based distribution that aims to provide a near-vanilla Arch experience with an easier installation process. It features a simple installer, minimal preconfiguration, and a strong community focus. Ideal for users who want to move to Arch without dealing with the full manual install.',
    links: [
      { url: 'https://ftp.belnet.be/mirror/endeavouros/iso/EndeavourOS_Titan-Neo-2026.04.27.iso',         architecture: 'x64 (recommended)', mirror: 'Belgium - Belnet',          checksums: ['https://ftp.belnet.be/mirror/endeavouros/iso/EndeavourOS_Titan-Neo-2026.04.27.iso.sha512'] },
      { url: 'https://mirrors.jlu.edu.cn/endeavouros/iso/EndeavourOS_Titan-Neo-2026.04.27.iso',           architecture: 'x64 (recommended)', mirror: 'China - Jilin University',  checksums: ['https://mirrors.jlu.edu.cn/endeavouros/iso/EndeavourOS_Titan-Neo-2026.04.27.iso.sha512'] },
      { url: 'https://mirror.sjtu.edu.cn/endeavouros/iso/EndeavourOS_Titan-Neo-2026.04.27.iso',           architecture: 'x64 (recommended)', mirror: 'China - SJTU',              checksums: ['https://mirror.sjtu.edu.cn/endeavouros/iso/EndeavourOS_Titan-Neo-2026.04.27.iso.sha512'] },
      { url: 'https://mirrors.tuna.tsinghua.edu.cn/endeavouros/iso/EndeavourOS_Titan-Neo-2026.04.27.iso', architecture: 'x64 (recommended)', mirror: 'China - Tuna',              checksums: ['https://mirrors.tuna.tsinghua.edu.cn/endeavouros/iso/EndeavourOS_Titan-Neo-2026.04.27.iso.sha512'] },
      { url: 'https://mirrors.c0urier.net/linux/endeavouros/iso/EndeavourOS_Titan-Neo-2026.04.27.iso',    architecture: 'x64 (recommended)', mirror: 'Denmark - C0urier',         checksums: ['https://mirrors.c0urier.net/linux/endeavouros/iso/EndeavourOS_Titan-Neo-2026.04.27.iso.sha512'] },
      { url: 'https://mirror.rznet.fr/endeavouros/iso/EndeavourOS_Titan-Neo-2026.04.27.iso',              architecture: 'x64 (recommended)', mirror: 'France - Rznet',            checksums: ['https://mirror.rznet.fr/endeavouros/iso/EndeavourOS_Titan-Neo-2026.04.27.iso.sha512'] },
      { url: 'https://mirror.alpix.eu/endeavouros/iso/EndeavourOS_Titan-Neo-2026.04.27.iso',              architecture: 'x64 (recommended)', mirror: 'Germany - Alpix',           checksums: ['https://mirror.alpix.eu/endeavouros/iso/EndeavourOS_Titan-Neo-2026.04.27.iso.sha512'] },
      { url: 'https://mirror.diyarciftci.xyz/endeavouros/iso/EndeavourOS_Titan-Neo-2026.04.27.iso',       architecture: 'x64 (recommended)', mirror: 'Germany - Diyarciftci',     checksums: ['https://mirror.diyarciftci.xyz/endeavouros/iso/EndeavourOS_Titan-Neo-2026.04.27.iso.sha512'] },
      { url: 'https://mirror.moson.org/endeavouros/iso/EndeavourOS_Titan-Neo-2026.04.27.iso',             architecture: 'x64 (recommended)', mirror: 'Germany - Moson',           checksums: ['https://mirror.moson.org/endeavouros/iso/EndeavourOS_Titan-Neo-2026.04.27.iso.sha512'] },
      { url: 'https://ftp.rz.tu-bs.de/pub/mirror/endeavouros/iso/EndeavourOS_Titan-Neo-2026.04.27.iso',   architecture: 'x64 (recommended)', mirror: 'Germany - RZ TU-BS',        checksums: ['https://ftp.rz.tu-bs.de/pub/mirror/endeavouros/iso/EndeavourOS_Titan-Neo-2026.04.27.iso.sha512'] },
      { url: 'https://fosszone.csd.auth.gr/endeavouros/iso/EndeavourOS_Titan-Neo-2026.04.27.iso',         architecture: 'x64 (recommended)', mirror: 'Greece - Fosszone',         checksums: ['https://fosszone.csd.auth.gr/endeavouros/iso/EndeavourOS_Titan-Neo-2026.04.27.iso.sha512'] },
      { url: 'https://mirror.albony.in/endeavouros/iso/EndeavourOS_Titan-Neo-2026.04.27.iso',             architecture: 'x64 (recommended)', mirror: 'India - Albony',            checksums: ['https://mirror.albony.in/endeavouros/iso/EndeavourOS_Titan-Neo-2026.04.27.iso.sha512'] },
      { url: 'https://mirrors.nxtgen.com/endeavouros-mirror/iso/EndeavourOS_Titan-Neo-2026.04.27.iso',    architecture: 'x64 (recommended)', mirror: 'India - Nxtgen',            checksums: ['https://mirrors.nxtgen.com/endeavouros-mirror/iso/EndeavourOS_Titan-Neo-2026.04.27.iso.sha512'] },
      { url: 'https://www.miraa.jp/endeavouros/iso/EndeavourOS_Titan-Neo-2026.04.27.iso',                 architecture: 'x64 (recommended)', mirror: 'Japan - Miraa',             checksums: ['https://www.miraa.jp/endeavouros/iso/EndeavourOS_Titan-Neo-2026.04.27.iso.sha512'] },
      { url: 'https://mirror.freedif.org/EndeavourOS/iso/EndeavourOS_Titan-Neo-2026.04.27.iso',           architecture: 'x64 (recommended)', mirror: 'Singapore - Freedif',       checksums: ['https://mirror.freedif.org/EndeavourOS/iso/EndeavourOS_Titan-Neo-2026.04.27.iso.sha512'] },
      { url: 'https://mirror.jingk.ai/endeavouros/iso/EndeavourOS_Titan-Neo-2026.04.27.iso',              architecture: 'x64 (recommended)', mirror: 'Singapore - Jingk',         checksums: ['https://mirror.jingk.ai/endeavouros/iso/EndeavourOS_Titan-Neo-2026.04.27.iso.sha512'] },
      { url: 'https://mirrors.urbanwave.co.za/endeavouros/iso/EndeavourOS_Titan-Neo-2026.04.27.iso',      architecture: 'x64 (recommended)', mirror: 'South Africa - Urban Wave', checksums: ['https://mirrors.urbanwave.co.za/endeavouros/iso/EndeavourOS_Titan-Neo-2026.04.27.iso.sha512'] },
      { url: 'https://mirror.funami.tech/endeavouros/iso/EndeavourOS_Titan-Neo-2026.04.27.iso',           architecture: 'x64 (recommended)', mirror: 'South Korea - YuruMirror',  checksums: ['https://mirror.funami.tech/endeavouros/iso/EndeavourOS_Titan-Neo-2026.04.27.iso.sha512'] },
      { url: 'https://mirror.retropc.se/endeavouros/iso/EndeavourOS_Titan-Neo-2026.04.22.iso',            architecture: 'x64 (recommended)', mirror: 'Sweden - Retropc',          checksums: ['https://mirror.retropc.se/endeavouros/iso/EndeavourOS_Titan-Neo-2026.04.22.iso.sha512'] },
      { url: 'https://mirror.accum.se/mirror/endeavouros/iso/EndeavourOS_Titan-Neo-2026.04.27.iso',       architecture: 'x64 (recommended)', mirror: 'Sweden - Umeå University',  checksums: ['https://mirror.accum.se/mirror/endeavouros/iso/EndeavourOS_Titan-Neo-2026.04.27.iso.sha512'] },
      { url: 'https://pkg.adfinis-on-exoscale.ch/endeavouros/iso/EndeavourOS_Titan-Neo-2026.04.27.iso',   architecture: 'x64 (recommended)', mirror: 'Switzerland - Adfinis',     checksums: ['https://pkg.adfinis-on-exoscale.ch/endeavouros/iso/EndeavourOS_Titan-Neo-2026.04.27.iso.sha512'] },
      { url: 'https://mirror.gofoss.xyz/endeavouros/iso/EndeavourOS_Titan-Neo-2026.04.27.iso',            architecture: 'x64 (recommended)', mirror: 'Switzerland - Go Foss',     checksums: ['https://mirror.gofoss.xyz/endeavouros/iso/EndeavourOS_Titan-Neo-2026.04.27.iso.sha512'] },
      //{ url: '', architecture: 'x64 (recommended)', mirror: 'Taiwan - Archlinux Taiwan', checksums: [] },
      { url: 'https://distrohub.kyiv.ua/endeavouros/iso/EndeavourOS_Titan-Neo-2026.04.27.iso',            architecture: 'x64 (recommended)', mirror: 'Ukraine - Distrohub',       checksums: ['https://distrohub.kyiv.ua/endeavouros/iso/EndeavourOS_Titan-Neo-2026.04.27.iso.sha512'] },
      { url: 'https://repo.c48.uk/endeavouros/iso/EndeavourOS_Titan-Neo-2026.04.27.iso',                  architecture: 'x64 (recommended)', mirror: 'United Kingdom - C48',      checksums: ['https://repo.c48.uk/endeavouros/iso/EndeavourOS_Titan-Neo-2026.04.27.iso.sha512'] },
      { url: 'https://mirrors.gigenet.com/endeavouros/iso/EndeavourOS_Titan-Neo-2026.04.27.iso',          architecture: 'x64 (recommended)', mirror: 'USA - Gigenet',             checksums: ['https://mirrors.gigenet.com/endeavouros/iso/EndeavourOS_Titan-Neo-2026.04.27.iso.sha512'] },
      //{ url: '', architecture: 'x64 (recommended)', mirror: 'Vietnam - The MeowSMP', checksums: [] },
      { url: 'https://github.com/endeavouros-arm/images/releases/download/rpi-5b-image/enosLinuxARM-rpi5-latest.img.xz', architecture: 'Raspberry Pi',      model: 'Raspberry Pi 5', checksums: ['https://github.com/endeavouros-arm/images/releases/download/rpi-5b-image/enosLinuxARM-rpi5-latest.img.xz.sha512sum'] },
      { url: 'https://github.com/endeavouros-arm/images/releases/download/rpi-4b-image/enosLinuxARM-rpi4-latest.img.xz', architecture: 'Raspberry Pi',      model: 'Raspberry Pi 4', checksums: ['https://github.com/endeavouros-arm/images/releases/download/rpi-4b-image/enosLinuxARM-rpi4-latest.img.xz.sha512sum'] },
    ],
  },
  {
    name: 'Garuda Linux',
    website: 'https://garudalinux.org/',
    img:  '/icons/garudalinux.webp',
    about: 'Garuda Linux is a flashy, performance-focused Arch-based distribution with a strong emphasis on gaming and desktop experience. It includes features like Btrfs snapshots, performance tweaks, and heavily customised KDE layouts. It’s aimed at users who want a powerful system that looks impressive straight out of the box.',
    links: [
      { url: 'https://iso.builds.garudalinux.org/iso/latest/garuda/mokka/latest.iso',             architecture: 'x64', desktop: 'Mokka (recommended)', checksums: ['https://iso.builds.garudalinux.org/iso/latest/garuda/mokka/latest.iso.sha256'] },
      { url: 'https://iso.builds.garudalinux.org/iso/latest/garuda/dr460nized/latest.iso',        architecture: 'x64', desktop: 'Dr460nized',          checksums: ['https://iso.builds.garudalinux.org/iso/latest/garuda/dr460nized/latest.iso.sha256'] },
      { url: 'https://iso.builds.garudalinux.org/iso/latest/garuda/dr460nized-gaming/latest.iso', architecture: 'x64', desktop: 'Dr460nized Gaming',   checksums: ['https://iso.builds.garudalinux.org/iso/latest/garuda/dr460nized-gaming/latest.iso.sha256'] },
      { url: 'https://iso.builds.garudalinux.org/iso/latest/garuda/gnome/latest.iso',             architecture: 'x64', desktop: 'GNOME',               checksums: ['https://iso.builds.garudalinux.org/iso/latest/garuda/gnome/latest.iso.sha256'] },
      { url: 'https://iso.builds.garudalinux.org/iso/latest/garuda/cinnamon/latest.iso',          architecture: 'x64', desktop: 'Cinnamon',            checksums: ['https://iso.builds.garudalinux.org/iso/latest/garuda/cinnamon/latest.iso.sha256'] },
      { url: 'https://iso.builds.garudalinux.org/iso/latest/garuda/xfce/latest.iso',              architecture: 'x64', desktop: 'Xfce',                checksums: ['https://iso.builds.garudalinux.org/iso/latest/garuda/xfce/latest.iso.sha256'] },
      { url: 'https://iso.builds.garudalinux.org/iso/latest/garuda/sway/latest.iso',              architecture: 'x64', desktop: 'Sway',                checksums: ['https://iso.builds.garudalinux.org/iso/latest/garuda/sway/latest.iso.sha256'] },
      { url: 'https://iso.builds.garudalinux.org/iso/latest/garuda/i3/latest.iso',                architecture: 'x64', desktop: 'i3',                  checksums: ['https://iso.builds.garudalinux.org/iso/latest/garuda/i3/latest.iso.sha256'] },
      { url: 'https://iso.builds.garudalinux.org/iso/latest/garuda/hyprland/latest.iso',          architecture: 'x64', desktop: 'Hyprland',            checksums: ['https://iso.builds.garudalinux.org/iso/latest/garuda/hyprland/latest.iso.sha256'] },
      { url: 'https://iso.builds.garudalinux.org/iso/latest/garuda/kde-lite/latest.iso',          architecture: 'x64', desktop: 'KDE Lite',            checksums: ['https://iso.builds.garudalinux.org/iso/latest/garuda/kde-lite/latest.iso.sha256'] },
    ],
  },
  {
    name: 'elementary OS',
    website: 'https://elementary.io/',
    img:  '/icons/elementaryos.webp',
    about: 'elementary OS is a design-focused distribution based on Ubuntu, featuring the custom Pantheon desktop. It emphasises simplicity, consistency, and a clean user experience inspired by macOS. With curated apps and a strong design philosophy, it’s ideal for users who care about aesthetics as much as functionality.',
    links: [
      { url: 'https://ams3.dl.elementary.io/download/MTc3NzkyNTc2Mw==/elementaryos-8.1-stable-amd64.20260219.iso', architecture: 'x64 (recommended)', checksums: [] },
      { url: 'https://ams3.dl.elementary.io/download/MTc3NzkyNTc2Mw==/elementaryos-8.1-stable-arm64.20260219.iso', architecture: 'ARM64', checksums: [] },
    ],
  },
  {
    name: 'KDE neon',
    website: 'https://neon.kde.org/',
    img:  '/icons/kdeneon.webp',
    about: 'KDE neon is an Ubuntu-based distribution that showcases the latest KDE Plasma desktop and applications. It combines a stable base system with cutting-edge KDE software, updated continuously. It’s perfect for users who want the newest KDE features without switching to a full rolling-release distro.',
    links: [
      { url: 'https://files.kde.org/neon/images/user/20260430-1324/neon-user-20260430-1324.iso',                    architecture: 'x64', type: 'User Edition (recommended)', checksums: ['https://files.kde.org/neon/images/user/20260430-1324/neon-user-20260430-1324.iso.sig'] },
      { url: 'https://files.kde.org/neon/images/testing/20260428-0435/neon-testing-20260428-0435.iso',              architecture: 'x64', type: 'Testing Edition',            checksums: ['https://files.kde.org/neon/images/testing/20260428-0435/neon-testing-20260428-0435.iso.sig'] },
      { url: 'https://files.kde.org/neon/images/unstable/20260503-1152/neon-unstable-20260503-1152.iso',            architecture: 'x64', type: 'Unstable Edition',           checksums: ['https://files.kde.org/neon/images/unstable/20260503-1152/neon-unstable-20260503-1152.iso.sig'] },
      { url: 'https://files.kde.org/neon/images/developer/20250901-0038/neon-unstable-developer-20250901-0038.iso', architecture: 'x64', type: 'Developer Edition',          checksums: ['https://files.kde.org/neon/images/developer/20250901-0038/neon-unstable-developer-20250901-0038.iso.sig'] },
    ],
  },
  {
    name: 'MX Linux',
    website: 'https://mxlinux.org/',
    img:  '/icons/mxlinux.webp',
    about: 'MX Linux is a Debian-based distribution focused on stability, efficiency, and simplicity. It uses lightweight desktops like Xfce and includes a range of useful system tools for configuration and maintenance. It’s especially popular on older hardware and with users who want a dependable, no-nonsense system.',
    links: [
      { url: 'https://sourceforge.net/projects/mx-linux/files/Final/Xfce/MX-25.1_Xfce_x64.iso/download',        architecture: 'x64 (recommended)', desktop: 'Xfce', type: 'Standard (recommended)',    checksums: [] },
      { url: 'https://sourceforge.net/projects/mx-linux/files/Final/Xfce/MX-25.1_Xfce_ahs_x64.iso/download',    architecture: 'x64 (recommended)', desktop: 'Xfce', type: 'Advanced Hardware Support', checksums: [] },
      { url: 'https://sourceforge.net/projects/mx-linux/files/Final/KDE/MX-25.1_KDE_x64.iso/download',          architecture: 'x64 (recommended)', desktop: 'KDE Plasma',                              checksums: [] },
      { url: 'https://sourceforge.net/projects/mx-linux/files/Final/Fluxbox/MX-25.1_fluxbox_x64.iso/download',  architecture: 'x64 (recommended)', desktop: 'Fluxbox',                                 checksums: [] },
      { url: 'https://sourceforge.net/projects/mx-linux/files/Final/Xfce/mx23.6_rpi_respin_arm64.zip/download', architecture: 'Raspberry Pi',                                                          checksums: [] },
    ],
  },
  {
    name: 'openSUSE',
    website: 'https://www.opensuse.org/',
    img:  '/icons/opensuse.webp',
    about: 'openSUSE offers both a stable release (Leap) and a rolling release (Tumbleweed), catering to different types of users. It’s known for its powerful YaST configuration tool and robust system management features. With strong ties to SUSE enterprise systems, it’s a reliable choice for both desktops and servers.',
    links: [
      { url: 'https://download.opensuse.org/distribution/leap/16.0/offline/Leap-16.0-offline-installer-x86_64.install.iso',       architecture: 'x64 (recommended)', type: 'Leap (recommended)', checksums: ['https://download.opensuse.org/distribution/leap/16.0/offline/Leap-16.0-offline-installer-x86_64.install.iso.sha256'] },
      { url: 'https://download.opensuse.org/distribution/leap/16.0/offline/Leap-16.0-offline-installer-aarch64.install.iso',      architecture: 'ARM64',             type: 'Leap (recommended)', checksums: ['https://download.opensuse.org/distribution/leap/16.0/offline/Leap-16.0-offline-installer-aarch64.install.iso.sha256'] },
      { url: 'https://download.opensuse.org/tumbleweed/iso/openSUSE-Tumbleweed-DVD-x86_64-Current.iso',                           architecture: 'x64 (recommended)', type: 'Tumbleweed',         checksums: ['https://download.opensuse.org/tumbleweed/iso/openSUSE-Tumbleweed-DVD-x86_64-Current.iso.sha256'] },
      { url: 'https://download.opensuse.org/ports/aarch64/tumbleweed/iso/openSUSE-Tumbleweed-DVD-aarch64-Current.iso',            architecture: 'ARM64',             type: 'Tumbleweed',         checksums: ['https://download.opensuse.org/ports/aarch64/tumbleweed/iso/openSUSE-Tumbleweed-DVD-aarch64-Current.iso.sha256'] },
    ],
  },
  {
    name: 'deepin',
    website: 'https://www.deepin.org/',
    img:  '/icons/deepin.webp',
    about: 'deepin is a distribution focused heavily on design and user experience, featuring its own custom desktop environment. It offers a sleek interface, smooth animations, and a suite of built-in applications. While visually impressive, it’s best suited for users who prioritise aesthetics and ease of use.',
    links: [
      { url: 'https://cdimage.deepin.com/releases/25.1.0/amd64/deepin-desktop-community-25.1.0-amd64.iso', architecture: 'x64 (recommended)', checksums: ['https://cdimage.deepin.com/releases/25.1.0/amd64/MD5SUMS', 'https://cdimage.deepin.com/releases/25.1.0/amd64/SHA256SUMS'] },
      { url: 'https://cdimage.deepin.com/releases/25.1.0/arm64/deepin-desktop-community-25.1.0-arm64.iso', architecture: 'ARM64',             checksums: ['https://cdimage.deepin.com/releases/25.1.0/arm64/MD5SUMS', 'https://cdimage.deepin.com/releases/25.1.0/arm64/SHA256SUMS'] },
    ],
  },
  {
    name: 'Red Hat Enterprise Linux',
    website: 'https://redhat.com/rhel/',
    img:  '/icons/redhat.webp',
    about: 'Red Hat Enterprise Linux (RHEL) is a commercial, enterprise-grade distribution used in business and production environments worldwide. It offers long-term support, extensive certifications, and professional backing. While paid for organisations, it’s available free for individual developers through Red Hat’s programme.',
    links: [
      { url: 'https://developers.redhat.com/content-gateway/file/rhel/Red_Hat_Enterprise_Linux_10.1/rhel-10.1-x86_64-dvd.iso',  architecture: 'x64',   checksums: [] },
      { url: 'https://developers.redhat.com/content-gateway/file/rhel/Red_Hat_Enterprise_Linux_10.1/rhel-10.1-aarch64-dvd.iso', architecture: 'ARM64', checksums: [] },
    ],
  },
  {
    name: 'Rocky Linux',
    website: 'https://rockylinux.org/',
    img:  '/icons/rockylinux.webp',
    about: 'Rocky Linux is a community-driven, enterprise-ready distribution designed as a replacement for CentOS. It is fully compatible with RHEL and provides long-term stability without licensing costs. It’s widely used by organisations needing a reliable and free enterprise Linux platform.',
    links: [
      { url: 'https://download.rockylinux.org/pub/rocky/10/isos/x86_64/Rocky-10-latest-x86_64-dvd.iso',                    architecture: 'x64 (recommended)', checksums: ['https://download.rockylinux.org/pub/rocky/10/isos/x86_64/CHECKSUM'] },
      { url: 'https://download.rockylinux.org/pub/rocky/10/isos/aarch64/Rocky-10-latest-aarch64-dvd.iso',                  architecture: 'ARM64',             checksums: ['https://download.rockylinux.org/pub/rocky/10/isos/aarch64/CHECKSUM'] },
      { url: 'https://download.rockylinux.org/pub/rocky/10/images/aarch64/Rocky-10-SBC-RaspberryPi.latest.aarch64.raw.xz', architecture: 'Raspberry Pi',      checksums: ['https://dl.rockylinux.org/pub/rocky/10/images/aarch64/Rocky-10-SBC-RaspberryPi.latest.aarch64.raw.xz.CHECKSUM'] },
    ],
  },
  {
    name: 'AlmaLinux',
    website: 'https://almalinux.org/',
    img:  '/icons/almalinux.webp',
    about: 'AlmaLinux is another RHEL-compatible distribution maintained by the AlmaLinux OS Foundation. It focuses on stability, transparency, and long-term support for production environments. It serves as a dependable alternative for users migrating away from CentOS.',
    links: [
      { url: 'https://repo.almalinux.org/almalinux/10/isos/x86_64/AlmaLinux-10-latest-x86_64-dvd.iso',                    architecture: 'x64 (recommended)', checksums: ['https://repo.almalinux.org/almalinux/10.1/isos/x86_64/CHECKSUM'] },
      { url: 'https://repo.almalinux.org/almalinux/10/isos/aarch64/AlmaLinux-10-latest-aarch64-dvd.iso',                  architecture: 'ARM64',             checksums: ['https://repo.almalinux.org/almalinux/10.1/isos/aarch64/CHECKSUM'] },
      { url: 'https://repo.almalinux.org/almalinux/10/raspberrypi/images/AlmaLinux-10-RaspberryPi-latest.aarch64.raw.xz', architecture: 'Raspberry Pi',      checksums: [] },
    ],
  },
  {
    name: 'Oracle Linux',
    website: 'https://www.oracle.com/linux/',
    img:  '/icons/oraclelinux.webp',
    about: 'Oracle Linux is a RHEL-compatible distribution maintained by Oracle, offering enterprise features and support options. It includes its own kernel enhancements and is commonly used in Oracle-based environments. Despite the name, it’s freely available and suitable for general enterprise use.',
    links: [
      { url: 'https://yum.oracle.com/ISOS/OracleLinux/OL10/u1/x86_64/OracleLinux-R10-U1-x86_64-dvd.iso',   architecture: 'x64 (recommended)', checksums: ['https://linux.oracle.com/security/gpg/checksum/OracleLinux-R10-U1-Server-x86_64.checksum'] },
      { url: 'https://yum.oracle.com/ISOS/OracleLinux/OL10/u1/aarch64/OracleLinux-R10-U1-aarch64-dvd.iso', architecture: 'ARM64',             checksums: ['https://linux.oracle.com/security/gpg/checksum/OracleLinux-R10-U1-Server-aarch64.checksum'] },
    ],
  },
  {
    name: 'CentOS Stream',
    website: 'https://www.centos.org/',
    img:  '/icons/centos.webp',
    about: 'CentOS Stream is a rolling distribution that sits just ahead of RHEL in the development pipeline. It provides a preview of upcoming enterprise features and acts as a collaboration point between Red Hat and the community. It’s best suited for developers and those who want insight into future RHEL changes.',
    links: [
      { url: 'https://centos-stream.mirrorservice.org/10-stream/BaseOS/x86_64/iso/CentOS-Stream-10-latest-x86_64-dvd1.iso',   architecture: 'x64 (recommended)', checksums: [] },
      { url: 'https://centos-stream.mirrorservice.org/10-stream/BaseOS/aarch64/iso/CentOS-Stream-10-latest-aarch64-dvd1.iso', architecture: 'ARM64',             checksums: [] },
    ],
  },
  {
    name: 'Kali Linux',
    website: 'https://www.kali.org/',
    img:  '/icons/kalilinux.webp',
    about: 'Kali Linux is a specialised distribution for penetration testing and cybersecurity work. It comes preloaded with a large collection of security tools for network analysis, exploitation, and forensics. It’s not meant for everyday use unless your idea of fun is breaking into your own Wi-Fi.',
    links: [
      { url: 'https://cdimage.kali.org/kali-2026.1/kali-linux-2026.1-installer-amd64.iso',               architecture: 'x64 (recommended)', checksums: ['https://kali.download/base-images/kali-2026.1/SHA256SUMS', 'https://kali.download/base-images/kali-2026.1/SHA256SUMS.gpg'] },
      { url: 'https://cdimage.kali.org/kali-2026.1/kali-linux-2026.1-installer-arm64.iso',               architecture: 'ARM64',             checksums: ['https://cdimage.kali.org/kali-2026.1/SHA256SUMS', 'https://cdimage.kali.org/kali-2026.1/SHA256SUMS.gpg'] },
      { url: 'https://kali.download/arm-images/kali-2026.1/kali-linux-2026.1-raspberry-pi-arm64.img.xz', architecture: 'Raspberry Pi',      checksums: ['https://kali.download/arm-images/kali-2026.1/SHA256SUMS'] },
    ],
  },
  {
    name: 'Parrot OS',
    website: 'https://www.parrotsec.org/',
    img:  '/icons/parrotos.webp',
    about: 'Parrot OS is a security-focused distribution similar to Kali, but with a broader focus on privacy and general usability. It includes tools for penetration testing, development, and secure communication. It’s a bit more flexible for daily use while still catering to security professionals.',
    links: [
      { url: 'https://deb.parrot.sh/parrot/iso/7.1/Parrot-security-7.1_amd64.iso',  architecture: 'x64',          type: 'Security Edition (recommended)', checksums: ['https://deb.parrot.sh/parrot/iso/7.1/signed-hashes.txt'] },
      { url: 'https://deb.parrot.sh/parrot/iso/7.1/Parrot-home-7.1_amd64.iso',      architecture: 'x64',          type: 'Home Edition', checksums: ['https://deb.parrot.sh/parrot/iso/7.1/signed-hashes.txt'] },
      { url: 'https://deb.parrot.sh/parrot/iso/7.1/Parrot-spin-htb-7.1_amd64.iso',  architecture: 'x64',          type: 'Hack The Box Edition', checksums: ['https://deb.parrot.sh/parrot/iso/7.1/signed-hashes.txt'] },
      { url: 'https://deb.parrot.sh/parrot/iso/7.1/Parrot-core-7.1_rpi.img.xz',     architecture: 'Raspberry Pi', type: 'Core Edition (recommended)', checksums: ['https://deb.parrot.sh/parrot/iso/7.1/signed-hashes.txt'] },
      { url: 'https://deb.parrot.sh/parrot/iso/7.1/Parrot-security-7.1_rpi.img.xz', architecture: 'Raspberry Pi', type: 'Security Edition', checksums: ['https://deb.parrot.sh/parrot/iso/7.1/signed-hashes.txt'] },
      { url: 'https://deb.parrot.sh/parrot/iso/7.1/Parrot-home-7.1_rpi.img.xz',     architecture: 'Raspberry Pi', type: 'Home Edition', checksums: ['https://deb.parrot.sh/parrot/iso/7.1/signed-hashes.txt'] },
    ],
  },
  {
    name: 'NixOS',
    website: 'https://nixos.org/',
    img:  '/icons/nixos.webp',
    about: 'NixOS is a unique distribution that uses a declarative configuration model powered by the Nix package manager. Entire systems are defined through configuration files, allowing reproducibility and easy rollbacks. It’s powerful but has a steep learning curve, so don’t expect it to hold your hand.',
    links: [
      { url: 'https://channels.nixos.org/nixos-25.11/latest-nixos-graphical-x86_64-linux.iso',  architecture: 'x64 (recommended)', type: 'Graphical (recommended)', checksums: ['https://channels.nixos.org/nixos-25.11/latest-nixos-graphical-x86_64-linux.iso.sha256'] },
      { url: 'https://channels.nixos.org/nixos-25.11/latest-nixos-minimal-x86_64-linux.iso',    architecture: 'x64 (recommended)', type: 'Minimal',                 checksums: ['https://channels.nixos.org/nixos-25.11/latest-nixos-minimal-x86_64-linux.iso.sha256'] },
      { url: 'https://channels.nixos.org/nixos-25.11/latest-nixos-graphical-aarch64-linux.iso', architecture: 'ARM64',             type: 'Graphical (recommended)', checksums: ['https://channels.nixos.org/nixos-25.11/latest-nixos-graphical-aarch64-linux.iso.sha256'] },
      { url: 'https://channels.nixos.org/nixos-25.11/latest-nixos-minimal-aarch64-linux.iso',   architecture: 'ARM64',             type: 'Minimal',                 checksums: ['https://channels.nixos.org/nixos-25.11/latest-nixos-minimal-aarch64-linux.iso.sha256'] },
    ],
  },
  {
    name: 'Tails',
    website: 'https://tails.net/',
    img:  '/icons/tails.webp',
    about: 'Tails is a privacy-focused, live operating system designed to leave no trace on the host machine. It routes all internet traffic through Tor and includes tools for encryption and anonymity. Ideal for sensitive work, journalism, or anyone who doesn’t want to be tracked.',
    links: [
      { url: 'https://download.tails.net/tails/stable/tails-amd64-7.7.2/tails-amd64-7.7.2.iso', architecture: 'x64', checksums: ['https://tails.net/tails-signing.key'] },
    ],
  },
  {
    name: 'Qubes OS',
    website: 'https://www.qubes-os.org/',
    img:  '/icons/qubesos.webp',
    about: 'Qubes OS is a security-first system that isolates applications into separate virtual machines. This compartmentalisation limits the impact of potential compromises and keeps different tasks separated. It’s extremely secure, but also resource-heavy and not exactly beginner-friendly.',
    links: [
      { url: 'https://download.tails.net/tails/stable/tails-amd64-7.7.2/tails-amd64-7.7.2.iso', architecture: 'x64', checksums: ['https://mirrors.edge.kernel.org/qubes/iso/Qubes-R4.3.0-x86_64.iso.asc'] },
    ],
  },
  {
    name: 'Alpine Linux',
    website: 'https://www.alpinelinux.org/',
    img:  '/icons/alpinelinux.webp',
    about: 'Alpine Linux is an ultra-lightweight distribution built with security and minimalism in mind. It uses musl libc and BusyBox, resulting in a tiny footprint and fast performance. It’s widely used in containers and embedded systems where efficiency matters.',
    links: [
      { url: 'https://dl-cdn.alpinelinux.org/alpine/v3.23/releases/x86_64/alpine-standard-3.23.4-x86_64.iso',      architecture: 'x64 (recommended)', checksums: ['https://dl-cdn.alpinelinux.org/alpine/v3.23/releases/x86_64/alpine-standard-3.23.4-x86_64.iso.sha256'] },
      { url: 'https://dl-cdn.alpinelinux.org/alpine/v3.23/releases/aarch64/alpine-standard-3.23.4-aarch64.iso',    architecture: 'ARM64', checksums: ['https://dl-cdn.alpinelinux.org/alpine/v3.23/releases/aarch64/alpine-standard-3.23.4-aarch64.iso.sha256'] },
      { url: 'https://dl-cdn.alpinelinux.org/alpine/v3.23/releases/aarch64/alpine-rpi-3.23.4-aarch64.img.gz',      architecture: 'Raspberry Pi', checksums: ['https://dl-cdn.alpinelinux.org/alpine/v3.23/releases/aarch64/alpine-rpi-3.23.4-aarch64.img.gz.sha256'] },
    ],
  },
  {
    name: 'Void Linux',
    website: 'https://voidlinux.org/',
    img:  '/icons/voidlinux.webp',
    about: 'Void Linux is an independent rolling-release distribution that focuses on simplicity and performance. It uses its own package manager and the runit init system instead of systemd. It’s a great choice for users who want something lightweight and a bit different from the mainstream.',
    links: [
      { url: 'https://repo-default.voidlinux.org/live/current/void-live-x86_64-20250202-xfce.iso',  architecture: 'x64 (recommended)', type: 'xfce (recommended)', checksums: ['https://repo-default.voidlinux.org/live/current/sha256sum.txt'] },
      { url: 'https://repo-default.voidlinux.org/live/current/void-live-x86_64-20250202-base.iso',  architecture: 'x64 (recommended)', type: 'base', checksums: ['https://repo-default.voidlinux.org/live/current/sha256sum.txt'] },
      { url: 'https://repo-default.voidlinux.org/live/current/void-live-aarch64-20250202-xfce.iso', architecture: 'ARM64', type: 'xfce (recommended)', checksums: ['https://repo-default.voidlinux.org/live/current/sha256sum.txt'] },
      { url: 'https://repo-default.voidlinux.org/live/current/void-live-aarch64-20250202-base.iso', architecture: 'ARM64', type: 'base', checksums: ['https://repo-default.voidlinux.org/live/current/sha256sum.txt'] },
      { url: 'https://repo-default.voidlinux.org/live/current/void-rpi-aarch64-20250202.img.xz',    architecture: 'Raspberry Pi', checksums: ['https://repo-default.voidlinux.org/live/current/sha256sum.txt'] },
    ],
  },
  {
    name: 'Gentoo',
    website: 'https://www.gentoo.org/',
    img:  '/icons/gentoo.webp',
    about: 'Gentoo is a source-based distribution that allows users to compile software tailored to their hardware. It offers extreme customisation and optimisation, but requires time and patience to set up. Perfect if you enjoy tweaking everything — or if you just enjoy suffering slightly.',
    links: [
      { url: 'https://distfiles.gentoo.org/releases/amd64/autobuilds/current-livegui-amd64/livegui-amd64-20260426T153103Z.iso',                 architecture: 'x64 (recommended)', desktop: 'KDE Plasma (recommended)', checksums: ['https://distfiles.gentoo.org/releases/amd64/autobuilds/20260426T153103Z/livegui-amd64-20260426T153103Z.iso.asc'] },
      { url: 'https://distfiles.gentoo.org/releases/amd64/autobuilds/current-install-amd64-minimal/install-amd64-minimal-20260426T153103Z.iso', architecture: 'x64 (recommended)', desktop: 'None',                     checksums: ['https://distfiles.gentoo.org/releases/amd64/autobuilds/20260426T153103Z/install-amd64-minimal-20260426T153103Z.iso.asc'] },
      { url: 'https://distfiles.gentoo.org/releases/arm64/autobuilds/current-install-arm64-minimal/install-arm64-minimal-20260503T230109Z.iso', architecture: 'ARM64',             desktop: 'None',                     checksums: ['https://distfiles.gentoo.org/releases/arm64/autobuilds/20260503T230109Z/install-arm64-minimal-20260503T230109Z.iso.asc'] },
    ],
  },
  {
    name: 'CachyOS',
    website: 'https://cachyos.org/',
    img:  '/icons/cachyos.webp',
    about: 'CachyOS is an Arch-based distribution focused heavily on performance and optimisation. It features custom kernels, tuned packages, and enhancements aimed at gamers and power users. If you like squeezing every last drop of performance out of your system, this one’s for you.',
    links: [
      { url: 'https://cdn77.cachyos.org/ISO/desktop/260426/cachyos-desktop-linux-260426.iso', architecture: 'x64', checksums: ['https://cdn77.cachyos.org/ISO/desktop/260426/cachyos-desktop-linux-260426.iso.sha256'] },
    ],
  },
];

/* attribute config */
// ATTR_ORDER is only a fallback; real order is derived per distro
const ATTR_ORDER  = ['architecture', 'desktop', 'type', 'model', 'mirror'];
const ATTR_LABELS = {
  architecture: 'Select an architecture',
  desktop:      'Select a desktop environment',
  type:         'Select a release type',
  model:        'Select a model',
  mirror:       'Select your nearest mirror',
};

/* dom refs */
const grid        = document.getElementById('distroGrid');
const overlay     = document.getElementById('overlay');
const modal       = document.getElementById('modal');
const modalIcon   = document.getElementById('modalIcon');
const modalName   = document.getElementById('modalName');
const modalBody   = document.getElementById('modalBody');
const modalFooter = document.getElementById('modalFooter');
const btnBack     = document.getElementById('btnBack');
const btnNext     = document.getElementById('btnNext');
const modalClose  = document.getElementById('modalClose');

/* download flow state */
let dlState = null;

/* build grids */
function buildGrid() {
  DISTROS.forEach((distro, idx) => {
    const card = document.createElement('div');
    card.className = 'distro-card';
    card.innerHTML = `
      <div class="card-img-wrap">
        <img class="card-img" src="${distro.img}" alt="${distro.name} logo"
             onerror="this.style.opacity='0.3';this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22><text y=%2220%22 font-size=%2220%22>🐧</text></svg>'" />
      </div>
      <div class="card-name">${distro.name}</div>
      <div class="card-actions">
        <button class="btn btn-download-card" data-idx="${idx}" data-action="download">Download</button>
        <button class="btn btn-about-card"    data-idx="${idx}" data-action="about">About</button>
      </div>
    `;
    grid.appendChild(card);
  });

  grid.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-action]');
    if (!btn) return;
    const idx    = parseInt(btn.dataset.idx, 10);
    const action = btn.dataset.action;
    if (action === 'about')    openAbout(idx);
    if (action === 'download') openDownload(idx);
  });
}

/* modal open/close */
function openModal(distro) {
  modalIcon.src = distro.img;
  modalIcon.alt = distro.name + ' logo';
  modalName.textContent = distro.name;
  modal.classList.remove('hidden');
  modal.classList.add('modal-enter');
  overlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  setTimeout(() => modal.classList.remove('modal-enter'), 350);
}

function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  document.body.style.overflow = '';
  dlState = null;
}

overlay.addEventListener('click', closeModal);
modalClose.addEventListener('click', closeModal);

/* about mode */
function openAbout(idx) {
  const distro = DISTROS[idx];
  openModal(distro);
  modalBody.innerHTML = `<p class="about-text">${distro.about}</p>`;

  // Show footer with centered "More" button
  modalFooter.classList.remove('hidden');
  modalFooter.classList.add('modal-footer--center');

  // Hide download-flow buttons
  btnBack.classList.add('hidden');
  btnNext.classList.add('hidden');

  // Remove any previously injected about button
  const existingBtn = modalFooter.querySelector('.btn-about-more');
  if (existingBtn) existingBtn.remove();

  const hasWebsite = distro.website && distro.website.trim() !== '';

  const moreBtn = document.createElement('a');
  moreBtn.className = 'btn btn-primary btn-about-more' + (hasWebsite ? '' : ' btn-disabled');
  moreBtn.href = hasWebsite ? distro.website : '#';
  moreBtn.target = '_blank';
  moreBtn.rel = 'noopener noreferrer';
  moreBtn.innerHTML = `
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" style="flex-shrink:0;">
      <path d="M9 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H9M15 17H17C19.7614 17 22 14.7614 22 12C22 9.23858 19.7614 7 17 7H15M7 12L17 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    More
  `;
  modalFooter.appendChild(moreBtn);
}

/* download mode */
function openDownload(idx) {
  const distro = DISTROS[idx];
  openModal(distro);

  // Reset footer for download flow
  modalFooter.classList.remove('hidden');
  modalFooter.classList.remove('modal-footer--center');
  btnBack.classList.remove('hidden');
  btnNext.classList.remove('hidden');

  // Remove any previously injected about button
  const existingBtn = modalFooter.querySelector('.btn-about-more');
  if (existingBtn) existingBtn.remove();

  // Derive per‑distro attribute order: first appearance across all links
  const attrOrder = [];
  for (const link of distro.links) {
    for (const key of Object.keys(link)) {
      if (ATTR_LABELS.hasOwnProperty(key) && !attrOrder.includes(key)) {
        attrOrder.push(key);
      }
    }
  }

  dlState = {
    distro:       distro,
    allLinks:     distro.links,
    filtered:     [...distro.links],
    asked:        [],
    history:      [],
    selected:     null,
    currentAttr:  null,
    attrOrder:    attrOrder,                    // distro‑specific order
    totalSteps:   computeTotalSteps(distro.links, [], attrOrder) + 1,   // +1 for final download+checksums page
  };

  renderDownloadStep();
}

/* Compute maximum number of attribute‑selection steps across ALL possible paths */
function computeTotalSteps(links, asked = [], attrOrder = ATTR_ORDER) {
  const next = getNextAttr(links, asked, attrOrder);
  if (!next) return 0;
  let max = 0;
  for (const val of next.values) {
    const filtered = links.filter(l => (l[next.attr] || null) === val);
    const depth = 1 + computeTotalSteps(filtered, [...asked, next.attr], attrOrder);
    if (depth > max) max = depth;
  }
  return max;
}

/* Return next attribute to ask about, or null if done */
function getNextAttr(links, asked, attrOrder = ATTR_ORDER) {
  for (const attr of attrOrder) {
    if (asked.includes(attr)) continue;
    const vals = [...new Set(links.map(l => l[attr]).filter(Boolean))];
    if (vals.length > 0) return { attr, values: vals };
  }
  return null;
}

/* Render the current download step */
function renderDownloadStep() {
  const s    = dlState;
  s.selected = null;
  const next = getNextAttr(s.filtered, s.asked, s.attrOrder);

  if (!next) {
    renderFinalPage();
    return;
  }

  s.currentAttr = next.attr;
  const stepNum  = s.asked.length;
  const totalSt  = s.totalSteps;

  // Step indicator dots
  const dotsHtml = Array.from({ length: totalSt }, (_, i) => {
    let cls = 'step-dot';
    if (i < stepNum)  cls += ' done';
    if (i === stepNum) cls += ' active';
    return `<div class="${cls}"></div>`;
  }).join('');

  modalBody.innerHTML = `
    <div class="step-indicator">${dotsHtml}</div>
    <div class="question-label">${ATTR_LABELS[next.attr]}</div>
    <div class="options-list" id="optionsList">
      ${next.values.map(val => `
        <div class="option-item" data-value="${escHtml(val)}">
          <div class="option-radio"></div>
          <span class="option-label">${escHtml(val)}</span>
        </div>
      `).join('')}
    </div>
  `;

  document.querySelectorAll('.option-item').forEach(item => {
    item.addEventListener('click', () => selectOption(item, item.dataset.value));
  });

  btnBack.textContent = s.history.length === 0 ? 'Cancel' : '‹ Back';
  btnBack.onclick = handleBack;

  setNextDisabled(true);
  btnNext.textContent = 'Next ›';
  btnNext.onclick = handleNext;
}

function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* user selects an option */
function selectOption(itemEl, value) {
  document.querySelectorAll('.option-item').forEach(i => i.classList.remove('selected'));
  itemEl.classList.add('selected');
  dlState.selected = value;

  btnNext.textContent = 'Next ›';
  btnNext.onclick = handleNext;
  setNextDisabled(false);
}

/* enable/disable next button */
function setNextDisabled(disabled) {
  if (disabled) {
    btnNext.classList.add('btn-disabled');
    btnNext.disabled = true;
  } else {
    btnNext.classList.remove('btn-disabled');
    btnNext.disabled = false;
  }
}

/* back / cancel handler */
function handleBack() {
  const s = dlState;
  if (s.history.length === 0) {
    closeModal();
    return;
  }
  const prev    = s.history.pop();
  s.filtered    = prev.filtered;
  s.asked       = prev.asked;
  s.currentAttr = null;
  renderDownloadStep();
}

/* next handler */
function handleNext() {
  const s = dlState;
  if (!s.selected) return;

  s.history.push({ filtered: [...s.filtered], asked: [...s.asked] });

  s.filtered = s.filtered.filter(l =>
    (l[s.currentAttr] || null) === s.selected
  );
  s.asked.push(s.currentAttr);

  renderDownloadStep();
}

/* final page: download button + optional checksums */
function renderFinalPage() {
  const s = dlState;
  const finalLink = s.filtered[0];  // should be exactly one
  const finalUrl  = finalLink.url;
  const checksums = finalLink.checksums || [];

  const stepNum = s.asked.length;          // number of attribute questions answered
  const totalSt = s.totalSteps;            // includes this final step

  const dotsHtml = Array.from({ length: totalSt }, (_, i) => {
    let cls = 'step-dot';
    if (i < stepNum)  cls += ' done';
    if (i === stepNum) cls += ' active';
    return `<div class="${cls}"></div>`;
  }).join('');

  const checksumsHtml = checksums.length > 0
    ? `<div class="checksums-section">
        <div class="checksums-heading">Verification files (optional)</div>
        <div class="checksums-list">
          ${checksums.map(url => {
            const filename = url.split('/').pop() || 'checksum file';
            return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="btn btn-glass btn-checksum" download>${escHtml(filename)}</a>`;
          }).join('')}
        </div>
      </div>`
    : `<div class="checksums-section">
        <div class="checksums-heading">Verification files (optional)</div>
        <p class="checksums-empty">No checksum files available.</p>
      </div>`;

  modalBody.innerHTML = `
    <div class="step-indicator">${dotsHtml}</div>
    <div class="final-download-area">
      ${checksumsHtml}
    </div>
  `;

  // Footer
  btnBack.textContent = '‹ Back';
  btnBack.onclick = handleBack;

  btnNext.classList.remove('btn-disabled');
  btnNext.disabled = false;
  btnNext.textContent = '⬇ Download ISO';
  btnNext.onclick = () => {
    triggerDownload(finalUrl);
  };
}

/* trigger a file download */
function triggerDownload(url) {
  const a = document.createElement('a');
  a.href   = url;
  a.target = '_blank';
  a.rel    = 'noopener noreferrer';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  closeModal();
}

/* keyboard: close on esc */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/* boot */
buildGrid();