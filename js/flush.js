
        //ͼƬ����
        var imgNumber = [];
        //20160815��Ӷ���Ч��
        imgNumber[1] = "zz";
		imgNumber[2] = "monkey";
		imgNumber[3] = "syz";
		
        //��ʱִ��
        window.setTimeout(aniFun, 1000);
        //��ǰͼƬ���
        var curNumber = 0;
        var f = "";
        var showOrHide = "";
        //����Ч��
        function aniFun() {

            //���ͼƬ��˸Ч��
            showOrHideImage();
            window.setTimeout(aniDo, 500);
        }
        //ͼƬ��˸Ч��
        function showOrHideImage() {
            //ѭ��ִ��
            window.setTimeout(hideAllImage, 100);
            window.setTimeout(showAllImage, 200);
            //ѭ��ִ��
            window.setTimeout(hideAllImage, 300);
            window.setTimeout(showAllImage, 400);
        }
        //ִ�ж���
        function aniDo() {
            hideAllImage();
            curNumber = 0;
            //ѭ��ִ�У�
            f = window.setInterval(showImage, 500);
        }
        //��������ͼƬ
        function hideAllImage() {
            //��������ͼƬ
            for (var i = 1; i <= 3; i++) {
                if (typeof (document.getElementById(imgNumber[i])) != "undefined") {
                    document.getElementById(imgNumber[i]).style.display = "none";
                }
            }
        }
        //��ʾ����ͼƬ
        function showAllImage() {
            //��ʾ����ͼƬ
            for (var i = 1; i <= 3; i++) {
                if (typeof (document.getElementById(imgNumber[i])) != "undefined") {
                    document.getElementById(imgNumber[i]).style.display = "block";
                }
            }
        }
        //��ʾ���ͼƬ
        function showImage() {
            curNumber++;
            //��ʾ���ͼƬ
            if (curNumber <= 3) {
                if (typeof (document.getElementById(imgNumber[curNumber])) != "undefined") {
                    document.getElementById(imgNumber[curNumber]).style.display = "block";
                }
            }
            else if (curNumber > 6) {
                window.clearInterval(f);
                aniFun();
            }
        } 


